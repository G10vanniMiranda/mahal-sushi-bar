import WhatsappButton from "../components/WhatsappButton";
import MotionSection from "../components/MotionSection";
import CtaButton from "../components/CtaButton";

export default function Delivery() {
    return (
        <div className="h-screen flex flex-col items-center justify-center pt-20">

            {/* Section 1 */}
            <MotionSection id="delivery" className="w-full h-screen flex flex-col items-center justify-center gap-4 text-white p-4 bg-[url(/fundo.avif)] bg-cover bg-center bg-no-repeat">
                <div className="flex flex-col items-center justify-center gap-6 bg-white/80 bg-opacity-60 p-10 rounded-2xl shadow-lg">
                    <h1 className="text-3xl font-bold text-center text-black">Explore nosso cardápio</h1>
                    <div className="flex flex-col items-center gap-2">
                        <CtaButton href="https://www.ifood.com.br/delivery/porto-velho-ro/mahal-sushi-bar-sao-cristovao/a3bd4f6c-414c-47ea-afb6-c1a6d5229e9c?utm_medium=share" className="w-48">
                            iFood
                        </CtaButton>
                        <p className="text-sm text-black/80 text-center max-w-xs">
                            Faça seu pedido pelo iFood e aproveite nossa entrega rápida e segura.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <CtaButton href="https://app.cardapioweb.com/mahal_sushi_bar?fbclid=PAZXh0bgNhZW0CMTEAAadMyiEMxduuKwAt3C9QiWZHvG5PzedLdr8xvkVoEW6w_DXTRnaKHO-Ruqnq3w_aem_eGD739mmgHzNMtQuqBttcA" className="w-48">
                            Cardápio Web
                        </CtaButton>
                        <p className="text-sm text-black/90 text-center max-w-xs">
                            <span className="font-semibold">Promoção:</span> Hot por <span className="font-semibold">R$ 1,00</span> a unidade em pedidos a partir de <span className="font-semibold">20 unidades</span> pelo Cardápio Web.
                        </p>
                    </div>
                </div>
            </MotionSection>

            {/* Section 2 */}

            <WhatsappButton />

        </div>
    );
}
