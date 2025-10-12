import Link from "next/link";

export default function Delivery() {
    return (
        <div className="h-screen flex flex-col items-center justify-center pt-20">

            {/* Section 1 */}
            <section className="w-full h-screen flex flex-col items-center justify-center gap-4 text-white p-4 bg-[url(/fundo.avif)] bg-cover bg-center bg-no-repeat">

                <div className="flex flex-col items-center justify-center gap-4 bg-white/80 bg-opacity-60 p-10 rounded">

                    <h1 className="text-3xl font-bold text-center text-black">Explore nosso cardápio</h1>

                    <Link
                        href="https://www.ifood.com.br/delivery/porto-velho-ro/mahal-sushi-bar-sao-cristovao/a3bd4f6c-414c-47ea-afb6-c1a6d5229e9c?utm_medium=share"
                        className="w-48 text-center bg-yellow-300 hover:bg-transparent hover:border-2 cursor-pointer text-white hover:text-black font-bold py-2 px-4 rounded"
                        target="_blank"
                    >
                        Ifood
                    </Link>

                    <Link
                        href="https://app.cardapioweb.com/mahal_sushi_bar?fbclid=PAZXh0bgNhZW0CMTEAAadMyiEMxduuKwAt3C9QiWZHvG5PzedLdr8xvkVoEW6w_DXTRnaKHO-Ruqnq3w_aem_eGD739mmgHzNMtQuqBttcA"
                        className="w-48 text-center bg-yellow-300 hover:bg-transparent hover:border-2 cursor-pointer text-white hover:text-black font-bold py-2 px-4 rounded"
                        target="_blank"
                    >
                        Cardapio Web
                    </Link>

                </div>

            </section>

            {/* Section 2 */}

        </div>
    );
}
