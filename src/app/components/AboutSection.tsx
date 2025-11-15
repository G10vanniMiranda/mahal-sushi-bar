"use client";

// Seção Sobre: imagem + texto institucional
import MotionSection from "./MotionSection";
import Image from "next/image";

export default function AboutSection() {
  return (
    <MotionSection id="sobre" className="w-full min-h-[400px] flex flex-col md:flex-row items-center justify-center py-16 px-4">
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <Image
          src="/combo.jpeg"
          alt="Peças de sushi selecionadas do Mahal Sushi Bar em Porto Velho"
          width={400}
          height={300}
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          className="rounded-2xl object-cover w-full max-w-xs md:max-w-md"
        />
      </div>

      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col items-center gap-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Sobre o Mahal Sushi Bar</h2>
        <p className="text-white/95 text-center text-base sm:text-lg md:text-xl leading-relaxed">
          O Mahal Sushi Bar nasceu da paixão pela culinária japonesa e do desejo de proporcionar uma experiência única aos nossos clientes em Porto Velho. Utilizamos ingredientes frescos, selecionados com rigor, e prezamos pela excelência em cada detalhe, do preparo à apresentação dos pratos. Nosso compromisso é levar até você o verdadeiro sabor do Japão, com qualidade, tradição e um toque especial de criatividade.
        </p>
      </div>
    </MotionSection>
  );
}
