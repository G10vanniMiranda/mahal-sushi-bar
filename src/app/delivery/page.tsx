import Link from "next/link";

export default function Delivery() {
    return (
        <div className="h-screen flex flex-col items-center justify-center pt-20">

            {/* Section 1 */}
            <section className="w-full h-auto flex flex-col items-center justify-center gap-4 text-white p-4">

                <Link href="/" className="bg-yellow-500 hover:bg-yellow-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
                    Ifood
                </Link>

                <Link href="/" className="bg-yellow-500 hover:bg-yellow-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
                    Cardapio Web
                </Link>

            </section>

        </div>
    );
}
