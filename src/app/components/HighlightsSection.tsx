"use client";

import MotionSection from "./MotionSection";
import { motion } from "framer-motion";

export default function HighlightsSection() {
  return (
    <MotionSection id="destaques" className="w-full py-16 px-4 bg-white flex flex-col items-center">
      {/* Frescor */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <span className="text-green-500 mb-3">
          <svg aria-hidden="true" focusable="false" width="48" height="48" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2C7.03 2 2.73 6.11 2.05 11.02c-.09.67.45 1.25 1.13 1.25h.01c.56 0 1.04-.42 1.12-.97C4.98 7.36 8.13 4.5 12 4.5s7.02 2.86 7.69 6.8c.08.55.56.97 1.12.97h.01c.68 0 1.22-.58 1.13-1.25C21.27 6.11 16.97 2 12 2Z" />
          </svg>
        </span>
        <p className="font-semibold text-zinc-800">Frescura Garantida</p>
        <span className="text-zinc-600 text-sm">Ingredientes sempre frescos e selecionados.</span>
      </motion.div>

      {/* Ingredientes importados */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="text-blue-500 mb-3">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2c1.38 0 2.63.35 3.72.97C14.5 6.1 13.34 8.5 13.07 12h-2.14C10.66 8.5 9.5 6.1 8.28 4.97A7.97 7.97 0 0112 4zm-7.93 8c.2-1.19.65-2.29 1.3-3.24C7.1 10.5 8.5 13.5 8.93 20.07A8.01 8.01 0 014.07 12zm2.23 6.24C9.5 17.9 10.66 15.5 10.93 12h2.14c.27 3.5 1.43 5.9 3.65 6.24A7.97 7.97 0 0112 20a7.97 7.97 0 01-5.7-1.76zM12 20c1.38 0 2.63-.35 3.72-.97C14.5 17.9 13.34 15.5 13.07 12h-2.14c-.27 3.5-1.43 5.9-3.65 6.24A7.97 7.97 0 0012 20zm7.93-8a8.01 8.01 0 01-4.86 8.07C16.9 13.5 15.5 10.5 15.07 4.93A8.01 8.01 0 0119.93 12z" />
          </svg>
        </span>
        <p className="font-semibold text-zinc-800">Ingredientes Importados</p>
        <span className="text-zinc-600 text-sm">Produtos exclusivos do Japão e do mundo.</span>
      </motion.div>

      {/* Entrega rápida */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <span className="text-yellow-500 mb-3">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 2v13h3v7l7-12h-4l4-8z" />
          </svg>
        </span>
        <p className="font-semibold text-zinc-800">Entrega Rápida</p>
        <span className="text-zinc-600 text-sm">Seu pedido chega quentinho e no tempo certo.</span>
      </motion.div>

      {/* Montagem artesanal */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-pink-500 mb-3">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 11V7a5 5 0 0110 0v4h1a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2h1zm2-4a3 3 0 016 0v4H9V7z" />
          </svg>
        </span>
        <p className="font-semibold text-zinc-800">Montagem Artesanal</p>
        <span className="text-zinc-600 text-sm">Cada peça feita com cuidado e dedicação.</span>
      </motion.div>

      {/* Atendimento personalizado */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <span className="text-purple-500 mb-3">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>
        <p className="font-semibold text-zinc-800">Atendimento Personalizado</p>
        <span className="text-zinc-600 text-sm">Equipe pronta para te surpreender.</span>
      </motion.div>
    </MotionSection>
  );
}
