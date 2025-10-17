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
        <motion.span
          className="z-20"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoLogoWhatsapp size={70} color="#25D366" />
        </motion.span>
      </Link>
    </div>
  );
}