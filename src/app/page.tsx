
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center justify-center">

      {/* Section 1 */}
      <section className="bg-zinc-800 w-full min-h-screen flex flex-col items-center justify-center md:items-end text-white px-2 pt-24 bg-[url(/fundo1.jpg)] bg-cover bg-center bg-no-repeat">

        <div className="bg-[rgba(0,0,0,0.2)] w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto md:h-[400px] flex flex-col items-center justify-center gap-8 md:gap-12 md:mr-32 md:mt-4 p-4 sm:p-8 rounded-2xl">

          <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
            Experiência japonesa autêntica, no conforto da sua casa.
          </h1>

          <p className="text-center text-base md:text-2xl">
            Na MAHAL Sushi Bar, cada peça é criada com maestria, unindo ingredientes frescos, técnica refinada e apresentação impecável.
            Viva uma experiência gastronômica premium sem sair de casa.
          </p>

          <Link
            href="https://app.cardapioweb.com/mahal_sushi_bar"
            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-700 cursor-pointer text-white font-bold py-2 px-4 rounded animate-pulse text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAÇA SEU PEDIDO AGORA
          </Link>

        </div>

      </section>

      {/* Section 2 */}
      <section className="w-full min-h-[400px] flex flex-col md:flex-row items-center justify-center bg-white py-16 px-4">

        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image
            src="/combo.jpeg"
            alt="Sobre o Mahal Sushi Bar"
            width={400}
            height={300}
            className="rounded-2xl object-cover w-full max-w-xs md:max-w-md"
            priority
          />
        </div>

        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-800 text-center">
            Sobre o Mahal Sushi Bar
          </h2>
          <p className="text-zinc-700 text-center text-base sm:text-lg md:text-xl">
            O Mahal Sushi Bar nasceu da paixão pela culinária japonesa e do desejo de proporcionar uma experiência única aos nossos clientes.
            Utilizamos ingredientes frescos, selecionados com rigor, e prezamos pela excelência em cada detalhe, do preparo à apresentação dos pratos.
            Nosso compromisso é levar até você o verdadeiro sabor do Japão, com qualidade, tradição e um toque especial de criatividade.
          </p>
        </div>

      </section>


    </div>
  );
}
