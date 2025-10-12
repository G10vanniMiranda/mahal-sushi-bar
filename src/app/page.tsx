
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center justify-center">

      {/* Section 1 */}
      <section className="bg-zinc-800 w-full h-screen flex flex-col items-center justify-center 
      md:items-end text-white p-2 pt-24 bg-[url(/fundo1.jpg)] bg-cover bg-center bg-no-repeat">

        <div className="bg-[rgba(0,0,0,0.2)] w-full md:w-[700px] h-[500px] md:h-[400px] flex flex-col items-center justify-center gap-12 md:mr-40 md:mt-4 p-4 rounded-2xl">

          <h1 className="text-3xl font-bold text-white text-center">
            Experiência japonesa autêntica, no conforto da sua casa.
          </h1>

          <p className="text-center text-2xl">
            Na MAHAL Sushi Bar, cada peça é criada com maestria, unindo ingredientes frescos, técnica refinada e apresentação impecável.
            Viva uma experiência gastronômica premium sem sair de casa.
          </p>

          <Link
            href="https://app.cardapioweb.com/mahal_sushi_bar"
            className="bg-yellow-500 hover:bg-yellow-700 cursor-pointer text-white font-bold py-2 px-4 rounded animate-pulse"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAÇA SEU PEDIDO AGORA
          </Link>

        </div>

      </section>

      {/* Section 2 */}


    </div>
  );
}
