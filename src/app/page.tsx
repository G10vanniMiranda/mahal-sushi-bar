import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center justify-center pt-24">

      {/* Section 1 */}
      <section className="bg-zinc-800 w-full h-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-white p-4">

        <Image
          src="/logo-semfundo.png"
          alt="Delicious sushi platter"
          width={200}
          height={400}
        />

        <div className="flex flex-col items-center justify-center gap-4">

          <h1 className="text-3xl font-bold text-white text-center">O melhor sushi delivery da sua região</h1>

          <p className="text-center text-2xl">Sabor e qualidade no seu pedido</p>

          <Link href="https://wa.me/5569999726369?text=Olá%2C+gostaria+de+fazer+um+pedido%21" className="bg-yellow-500 hover:bg-yellow-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
            Faça seu pedido agora
          </Link>

        </div>

      </section>

      {/* Section 2 */}


    </div>
  );
}
