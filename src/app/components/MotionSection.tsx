"use client";

import { motion, Variants } from "framer-motion";
import { PropsWithChildren } from "react";

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
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
  };

  return (
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
