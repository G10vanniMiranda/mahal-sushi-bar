"use client";

// Seção Hero: imagem de fundo, título, descrição e CTA
import MotionSection from "./MotionSection";
import CtaButton from "./CtaButton";

export default function HeroSection() {
  return (
    <MotionSection
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center md:items-end text-white px-2 pt-24 bg-[url(/fundomobile1.jpg)] md:bg-[url(/fundo1.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div className="backdrop-blur-sm bg-black/55 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto md:h-[420px] flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 md:mr-32 md:mt-4 p-5 sm:p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center">
          Mahal Sushi Bar culinária japonesa autêntica em Porto Velho.
        </h1>
        <p className="text-center text-base sm:text-lg md:text-xl text-zinc-100/90">
          Experimente o melhor da culinária japonesa com {" "}
          <strong className="font-semibold">ingredientes frescos</strong>, apresentação impecável e {" "}
          <strong className="font-semibold">delivery em Porto Velho</strong>. No MAHAL Sushi Bar, cada peça é criada com maestria para você viver uma experiência gastronômica premium no conforto da sua casa.
        </p>
        <CtaButton href="https://app.cardapioweb.com/mahal_sushi_bar" className="w-full sm:w-auto">
          Faça seu pedido agora
        </CtaButton>
        <p className="text-xs sm:text-sm text-zinc-200/80 text-center">
          Sushi, combinados e pratos japoneses com entrega rápida em Porto Velho – RO.
        </p>
      </div>
    </MotionSection>
  );
}
