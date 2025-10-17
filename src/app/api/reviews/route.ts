import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

type Review = {
  id: string;
  name: string;
  rating: number; // 1-5
  comment: string;
  photoUrl?: string; // relative to public
  createdAt: string;
};

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "reviews.json");
const uploadsDir = path.join(process.cwd(), "public", "uploads");

async function ensureFiles() {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.mkdir(uploadsDir, { recursive: true });
  try {
    await fs.access(dataFile);
  } catch {
    await fs.writeFile(dataFile, "[]", "utf-8");
  }
}

async function readReviews(): Promise<Review[]> {
  await ensureFiles();
  const raw = await fs.readFile(dataFile, "utf-8");
  return JSON.parse(raw || "[]");
}

async function writeReviews(reviews: Review[]) {
  await fs.writeFile(dataFile, JSON.stringify(reviews, null, 2), "utf-8");
}

export async function GET() {
  try {
    const reviews = await readReviews();
    // Sort newest first
    reviews.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return NextResponse.json(reviews);
  } catch {
    return NextResponse.json({ error: "Failed to load reviews" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await ensureFiles();

    const contentType = req.headers.get("content-type") || "";

    let name = "";
    let rating = 0;
    let comment = "";
    let photoUrl: string | undefined;

    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      name = String(form.get("name") || "").slice(0, 80);
      rating = Number(form.get("rating") || 0);
      comment = String(form.get("comment") || "").slice(0, 500);
      const fileEntry = form.get("photo");
      const file = fileEntry instanceof File ? fileEntry : null;
      if (file) {
        const bytes = Buffer.from(await file.arrayBuffer());
        const ext = path.extname(file.name || "") || ".jpg";
        const fname = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
        const fpath = path.join(uploadsDir, fname);
        await fs.writeFile(fpath, bytes);
        photoUrl = `/uploads/${fname}`;
      }
    } else {
      // JSON fallback: { name, rating, comment, imageBase64? }
      const json = await req.json().catch(() => ({}));
      name = String(json.name || "").slice(0, 80);
      rating = Number(json.rating || 0);
      comment = String(json.comment || "").slice(0, 500);
      const imageBase64: string | undefined = json.imageBase64;
      if (imageBase64) {
        const base64Data = imageBase64.replace(/^data:[^;]+;base64,/, "");
        const bytes = Buffer.from(base64Data, "base64");
        const fname = `${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`;
        const fpath = path.join(uploadsDir, fname);
        await fs.writeFile(fpath, bytes);
        photoUrl = `/uploads/${fname}`;
      }
    }

    if (!name || !comment || !(rating >= 1 && rating <= 5)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const reviews = await readReviews();
    const review: Review = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      name,
      rating,
      comment,
      photoUrl,
      createdAt: new Date().toISOString(),
    };
    reviews.push(review);
    await writeReviews(reviews);

    return NextResponse.json(review, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to save review" }, { status: 500 });
  }
}
