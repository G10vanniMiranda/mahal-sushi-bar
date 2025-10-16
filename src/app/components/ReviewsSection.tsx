"use client";

import { useEffect, useMemo, useState } from "react";

type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  photoUrl?: string;
  createdAt: string;
};

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => setReviews(Array.isArray(data) ? data : []))
      .catch(() => setReviews([]));
  }, []);

  useEffect(() => {
    if (!photo) return setPreview(null);
    const url = URL.createObjectURL(photo);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [photo]);

  const canSubmit = useMemo(() => {
    return name.trim().length > 1 && comment.trim().length > 5 && rating >= 1 && rating <= 5 && !loading;
  }, [name, comment, rating, loading]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setError(null);
    try {
      const form = new FormData();
      form.set("name", name.trim());
      form.set("rating", String(rating));
      form.set("comment", comment.trim());
      if (photo) form.set("photo", photo);
      const res = await fetch("/api/reviews", { method: "POST", body: form });
      if (!res.ok) throw new Error("Falha ao enviar comentário");
      const created: Review = await res.json();
      setReviews((prev) => [created, ...prev]);
      setName("");
      setRating(5);
      setComment("");
      setPhoto(null);
      setPreview(null);
    } catch (err: any) {
      setError(err.message || "Erro inesperado");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="depoimentos" className="w-full py-16 px-4 bg-zinc-100 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-zinc-800 text-center mb-8">Depoimentos de Clientes</h2>

      {/* Formulário */}
      <form onSubmit={onSubmit} className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-700" htmlFor="name">Seu nome</label>
          <input
            id="name"
            type="text"
            className="border border-zinc-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Ex.: Ana Souza"
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-zinc-700">Sua avaliação</span>
          <div className="flex items-center gap-1" role="radiogroup" aria-label="Avaliação em estrelas">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                aria-pressed={rating === star}
                aria-label={`${star} estrela${star > 1 ? "s" : ""}`}
                className="p-1"
                onClick={() => setRating(star)}
              >
                <svg
                  className={`w-7 h-7 ${rating >= star ? "text-yellow-400" : "text-zinc-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-700" htmlFor="comment">Seu comentário</label>
          <textarea
            id="comment"
            className="border border-zinc-300 rounded-md px-3 py-2 min-h-[100px] outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Conte como foi sua experiência"
            maxLength={500}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-700" htmlFor="photo">Sua foto (opcional)</label>
          <input
            id="photo"
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files?.[0] || null)}
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            disabled={!canSubmit}
            className="bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 text-white font-semibold px-4 py-2 rounded-md"
          >
            {loading ? "Enviando..." : "Enviar depoimento"}
          </button>
        </div>

        {preview && (
          <div className="md:col-span-2">
            <p className="text-sm text-zinc-600 mb-2">Prévia da imagem:</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview} alt="Prévia" className="w-40 h-40 object-cover rounded-md" />
          </div>
        )}

        {error && (
          <div className="md:col-span-2 text-red-600 text-sm">{error}</div>
        )}
      </form>

      {/* Lista de depoimentos */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {reviews.map((r) => (
          <div key={r.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={r.photoUrl || "/clientes/cliente1.jpg"}
              alt={`Foto de ${r.name}`}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <div className="flex mb-2" role="img" aria-label={`Avaliação: ${r.rating} de 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < r.rating ? "text-yellow-400" : "text-zinc-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}
            </div>
            <p className="font-semibold text-zinc-800">{r.name}</p>
            <span className="text-zinc-600 text-sm mb-2 whitespace-pre-line">{r.comment}</span>
          </div>
        ))}
        {reviews.length === 0 && (
          <p className="col-span-full text-center text-zinc-600">Seja o primeiro a deixar um depoimento!</p>
        )}
      </div>
    </section>
  );
}
