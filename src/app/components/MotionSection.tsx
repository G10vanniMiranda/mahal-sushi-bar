"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import { PropsWithChildren } from "react";

/**
 * Componente de seção com animação suave ao entrar na viewport.
 * - Deve ser usado em Client Components.
 * - Respeita prefers-reduced-motion e rendeiza sem animações quando o usuário prefere menos movimento.
 */
type MotionSectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}>;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MotionSection({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  id,
}: MotionSectionProps) {
  // Detecta usuários que preferem menos movimento e desabilita animações nesses casos
  const prefersReducedMotion = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
  };

  if (prefersReducedMotion) {
    // Sem animação: renderiza uma <section> comum
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    // Com animação de entrada ao ficar visível na tela
    <motion.section
      id={id}
      className={className}
      variants={variants || fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </motion.section>
  );
}
