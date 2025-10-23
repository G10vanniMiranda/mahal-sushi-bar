import Image from "next/image";
import WhatsappButton from "./components/WhatsappButton";
import ReviewsSection from "./components/ReviewsSection";
import MotionSection from "./components/MotionSection";
import HighlightsSection from "./components/HighlightsSection";
import CtaButton from "./components/CtaButton";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center justify-center bg-[#2A2218]">

      {/* Section 1 */}
      <MotionSection
        id="home"
        className="w-full min-h-screen flex flex-col items-center justify-center md:items-end text-white px-2 pt-24 bg-[url(/fundomobile1.jpg)] md:bg-[url(/fundo1.jpg)] bg-cover bg-center bg-no-repeat"
      >
        <div className="backdrop-blur-sm bg-black/55 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto md:h-[420px] flex flex-col items-center justify-center gap-6 md:gap-10 md:mr-32 md:mt-4 p-5 sm:p-8 rounded-2xl shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center">
            Experiência japonesa autêntica, no conforto da sua casa.
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl text-zinc-100/90">
            No MAHAL Sushi Bar, cada peça é criada com maestria, unindo ingredientes frescos, técnica refinada e apresentação impecável.
            Viva uma experiência gastronômica premium sem sair de casa.
          </p>
          <CtaButton href="https://app.cardapioweb.com/mahal_sushi_bar" className="w-full sm:w-auto">
            Faça seu pedido agora
          </CtaButton>
        </div>
      </MotionSection>

      {/* Section 2 */}
      <MotionSection id="sobre" className="w-full min-h-[400px] flex flex-col md:flex-row items-center justify-center py-16 px-4">

        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image
            src="/combo.jpeg"
            alt="Peças de sushi selecionadas do Mahal Sushi Bar"
            width={400}
            height={300}
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
            className="rounded-2xl object-cover w-full max-w-xs md:max-w-md"
          />
        </div>

        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col items-center gap-6">

          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
            Sobre o Mahal Sushi Bar
          </h2>

          <p className="text-white/95 text-center text-base sm:text-lg md:text-xl leading-relaxed">
            O Mahal Sushi Bar nasceu da paixão pela culinária japonesa e do desejo de proporcionar uma experiência única aos nossos clientes.
            Utilizamos ingredientes frescos, selecionados com rigor, e prezamos pela excelência em cada detalhe, do preparo à apresentação dos pratos.
            Nosso compromisso é levar até você o verdadeiro sabor do Japão, com qualidade, tradição e um toque especial de criatividade.
          </p>

        </div>

      </MotionSection>

      {/* Section 3 - Destaques */}
      <HighlightsSection />

      {/* Section 4 - Depoimentos (dinâmico) */}
      <ReviewsSection />

      {/* Section 5 */}
      <MotionSection id="localizacao" className="w-full py-16 px-4 bg-white flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-800 text-center mb-8">
          Localização & Horário de Funcionamento
        </h2>

        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 items-center justify-center">

          {/* Informações */}
          <div className="flex-1 flex flex-col gap-4">

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">Endereço</h3>
              <p className="text-zinc-700">
                Rua Duque de Caxias, 2586<br />
                São Cristóvão, Porto Velho - RO<br />
                CEP: 76820-832
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">Áreas de Entrega</h3>
              <p className="text-zinc-700">
                Entregamos em toda Porto Velho e bairros próximos. Consulte disponibilidade para sua região!
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">Horário de Funcionamento</h3>
              <p className="text-zinc-700">
                Segunda a Domingo: 19h às 23h
              </p>
            </div>

          </div>

          {/* Mapa */}
          <div className="flex-1 w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.825840295568!2d-63.89012483046204!3d-8.757501673985878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325cc7debb0803%3A0x66d79b755e3dd3e1!2sR.%20Duque%20de%20Caxias%2C%202586%20-%20S%C3%A3o%20Crist%C3%B3v%C3%A3o%2C%20Porto%20Velho%20-%20RO%2C%2076820-832!5e0!3m2!1spt-BR!2sbr!4v1760500858250!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Mahal Sushi Bar"
            ></iframe>

          </div>

        </div>
      </MotionSection>

      <WhatsappButton />

    </div>
  );
}
