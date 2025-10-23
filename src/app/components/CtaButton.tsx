"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  href: string;
  className?: string;
  newTab?: boolean;
  ariaLabel?: string;
}>;

export default function CtaButton({ href, className, children, newTab = true, ariaLabel }: Props) {
  const external = newTab || href.startsWith("http");
  const target = external ? "_blank" : undefined;
  const rel = external ? "noopener noreferrer" : undefined;

  const base = [
    "inline-flex items-center justify-center rounded-lg font-semibold shadow-md",
    "bg-yellow-400 text-black hover:bg-yellow-500",
    "transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400",
    "px-5 py-3",
  ].join(" ");

  const classes = className ? `${base} ${className}` : base;

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={classes}
      initial={{ scale: 0.98, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      animate={{
        y: [0, -2, 0],
        boxShadow: [
          "0 8px 20px rgba(234,179,8,0.15)",
          "0 10px 24px rgba(234,179,8,0.25)",
          "0 8px 20px rgba(234,179,8,0.15)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
    >
      {children}
    </motion.a>
  );
}
