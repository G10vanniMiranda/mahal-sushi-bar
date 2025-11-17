import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// 📌 Variáveis de ambiente — configure no `.env.local` (desenvolvimento)
// e nas Variáveis de Ambiente do projeto na Vercel (produção):
// - NEXT_PUBLIC_SUPABASE_URL = https://<seu-projeto>.supabase.co
// - SUPABASE_SERVICE_ROLE_KEY = <chave service role> (APENAS NO BACKEND)
// Observação: não use a Service Role no cliente. Este arquivo roda no servidor (API Route).
const bucketName = "pdv";       // Nome do bucket no Supabase Storage
const bucketFolder = "reviews"; // Pasta onde salvamos as fotos dentro do bucket

// Lazy init do cliente Supabase para evitar erro em build quando env não está setado.
// Isso previne o erro "Invalid supabaseUrl" durante a etapa "Collecting page data".
function createServerSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !/^https?:\/\//i.test(supabaseUrl)) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL inválida ou ausente. Defina uma URL HTTP/HTTPS válida no .env.local e na Vercel."
    );
  }
  if (!supabaseServiceRoleKey) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY ausente. Defina a Service Role Key no .env.local e na Vercel (apenas no backend)."
    );
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey);
}

export async function GET() {
  try {
    const supabase = createServerSupabase();
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erro GET:", error);
      return NextResponse.json({ error: "Erro ao carregar reviews" }, { status: 500 });
    }

    const reviews = data?.map((r) => ({
      id: r.id,
      name: r.name,
      rating: r.rating,
      comment: r.comment,
      photoUrl: r.photo_url || undefined,
      createdAt: r.created_at,
    })) || [];

    return NextResponse.json(reviews);
  } catch (e) {
    console.error("Exceção GET:", e);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const supabase = createServerSupabase();
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
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const originalName = file.name || "photo.jpg";
        const ext = originalName.includes(".")
          ? originalName.split(".").pop()
          : "jpg";

        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const storagePath = `${bucketFolder}/${fileName}`;

        // Upload da imagem
        const { error: uploadError } = await supabase.storage
          .from(bucketName)
          .upload(storagePath, buffer, {
            contentType: file.type || "image/jpeg",
          });

        if (uploadError) {
          console.error("Erro upload foto:", uploadError);
        } else {
          // Pega a URL pública da imagem
          const { data: publicUrlData } = supabase.storage
            .from(bucketName)
            .getPublicUrl(storagePath);

          photoUrl = publicUrlData.publicUrl;
        }
      }
    } else {
      return NextResponse.json({ error: "Formato inválido" }, { status: 400 });
    }

    if (!name || !comment || !rating || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Campos inválidos" }, { status: 400 });
    }

    // Inserir no banco
    const { data, error } = await supabase
      .from("reviews")
      .insert({
        name,
        rating,
        comment,
        photo_url: photoUrl || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Erro insert:", error);
      return NextResponse.json({ error: "Erro ao salvar review" }, { status: 500 });
    }

    const created = {
      id: data.id,
      name: data.name,
      rating: data.rating,
      comment: data.comment,
      photoUrl: data.photo_url || undefined,
      createdAt: data.created_at,
    };

    return NextResponse.json(created, { status: 201 });
  } catch (e) {
    console.error("Exception POST:", e);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
