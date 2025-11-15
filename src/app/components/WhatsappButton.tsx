"use client";

import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";

export default function WhatsappButton() {
  return (
    <div
      className="fixed z-50"
      style={{
        right: "max(1rem, env(safe-area-inset-right))",
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <Link
        href="https://wa.me/5569999726369?text=Olá%2C+gostaria+de+fazer+um+pedido%21"
        className="flex items-center relative"
        aria-label="Abrir conversa no WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Anéis pulsantes para destacar o botão sem exageros */}
        <motion.span
          aria-hidden
          className="absolute inset-0 -m-2 rounded-full border-2 border-[#25D366] opacity-40"
          style={{ width: 84, height: 84 }}
          initial={{ scale: 0.9, opacity: 0.3 }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.35, 0, 0.35] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.span
          aria-hidden
          className="absolute inset-0 -m-2 rounded-full border-2 border-[#25D366] opacity-30"
          style={{ width: 84, height: 84 }}
          initial={{ scale: 1, opacity: 0.25 }}
          animate={{ scale: [1, 1.6, 1], opacity: [0.25, 0, 0.25] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.5, delay: 0.6 }}
        />
        {/* Ícone com flutuação sutil contínua + animações de hover/tap */}
        <motion.span
          className="z-20"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, -3, 0] }}
          transition={{ type: "spring", stiffness: 260, damping: 20, y: { duration: 2.5, repeat: Infinity } }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoLogoWhatsapp size={70} color="#25D366" />
        </motion.span>
      </Link>
    </div>
  );
}