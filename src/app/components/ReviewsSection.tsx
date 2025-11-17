"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

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
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [errorReviews, setErrorReviews] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Carrega os reviews ao montar
  useEffect(() => {
    async function loadReviews() {
      try {
        setLoadingReviews(true);
        setErrorReviews(null);
        const res = await fetch("/api/reviews");
        if (!res.ok) {
          throw new Error("Não foi possível carregar os depoimentos.");
        }
        const data = await res.json();
        if (Array.isArray(data)) {
          setReviews(data);
        } else {
          setReviews([]);
        }
      } catch (err) {
        console.error(err);
        setErrorReviews("Não foi possível carregar os depoimentos. Tente novamente mais tarde.");
        setReviews([]);
      } finally {
        setLoadingReviews(false);
      }
    }

    loadReviews();
  }, []);

  // Preview da foto
  useEffect(() => {
    if (!photo) return setPreview(null);
    const url = URL.createObjectURL(photo);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [photo]);

  // Some a mensagem de sucesso depois de alguns segundos
  useEffect(() => {
    if (!success) return;
    const t = setTimeout(() => setSuccess(null), 4000);
    return () => clearTimeout(t);
  }, [success]);

  const canSubmit = useMemo(() => {
    return (
      name.trim().length > 1 &&
      comment.trim().length > 5 &&
      rating >= 1 &&
      rating <= 5 &&
      !loading
    );
  }, [name, comment, rating, loading]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setError(null);
    setSuccess(null);

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
      setSuccess("Depoimento enviado com sucesso!");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erro inesperado";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  function onPickFile(file: File | null) {
    setError(null);
    setSuccess(null);
    if (!file) {
      setPhoto(null);
      return;
    }
    const maxBytes = 2 * 1024 * 1024; // 2MB
    if (!file.type.startsWith("image/")) {
      setError("Por favor, selecione uma imagem válida.");
      setPhoto(null);
      return;
    }
    if (file.size > maxBytes) {
      setError("A imagem deve ter no máximo 2MB.");
      setPhoto(null);
      return;
    }
    setPhoto(file);
  }

  return (
    <section
      id="depoimentos"
      className="w-full py-16 px-4 bg-zinc-100 flex flex-col items-center"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-zinc-800 text-center mb-8"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Depoimentos de Clientes
      </motion.h2>

      {/* Formulário */}
      <motion.form
        onSubmit={onSubmit}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-700" htmlFor="name">
            Seu nome
          </label>
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
          <span className="text-sm font-medium text-zinc-700">
            Sua avaliação
          </span>
          <div
            className="flex items-center gap-1"
            role="radiogroup"
            aria-label="Avaliação em estrelas"
          >
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
                  className={`w-7 h-7 ${rating >= star ? "text-yellow-400" : "text-zinc-300"
                    }`}
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
          <label
            className="text-sm font-medium text-zinc-700"
            htmlFor="comment"
          >
            Seu comentário
          </label>
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
          <label
            className="text-sm font-medium text-zinc-700"
            htmlFor="photo"
          >
            Sua foto (opcional)
          </label>
          <input
            id="photo"
            type="file"
            accept="image/*"
            onChange={(e) => onPickFile(e.target.files?.[0] || null)}
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
            <img
              src={preview}
              alt="Prévia"
              className="w-40 h-40 object-cover rounded-md"
            />
          </div>
        )}

        <div className="md:col-span-2 space-y-1">
          {error && (
            <p aria-live="assertive" className="text-red-600 text-sm">
              {error}
            </p>
          )}
          {success && (
            <p aria-live="polite" className="text-green-600 text-sm">
              {success}
            </p>
          )}
          {!error && !success && (
            <p className="text-xs text-zinc-500">
              Seu depoimento ajuda outros clientes a confiarem no Mahal Sushi Bar.
            </p>
          )}
        </div>
      </motion.form>

      {/* Lista de depoimentos */}
      <div className="w-full max-w-5xl">
        {loadingReviews && (
          <p className="text-center text-zinc-600">Carregando depoimentos...</p>
        )}

        {!loadingReviews && errorReviews && (
          <p className="text-center text-red-600 text-sm">{errorReviews}</p>
        )}

        {!loadingReviews && !errorReviews && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {reviews.map((r, idx) => (
              <motion.div
                key={r.id}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.4) }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.photoUrl || "/clientes/cliente1.jpg"}
                  alt={`Foto de ${r.name}`}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <div
                  className="flex mb-2"
                  role="img"
                  aria-label={`Avaliação: ${r.rating} de 5`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < r.rating ? "text-yellow-400" : "text-zinc-300"
                        }`}
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
                <span className="text-zinc-600 text-sm mb-2 whitespace-pre-line">
                  {r.comment}
                </span>
              </motion.div>
            ))}

            {reviews.length === 0 && (
              <p className="col-span-full text-center text-zinc-600">
                Seja o primeiro a deixar um depoimento!
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
