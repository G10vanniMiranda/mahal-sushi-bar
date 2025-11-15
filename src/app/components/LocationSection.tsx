"use client";

// Seção Localização: informações e mapa do Google
import MotionSection from "./MotionSection";

export default function LocationSection() {
  return (
    <MotionSection id="localizacao" className="w-full py-16 px-4 bg-white flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-zinc-800 text-center mb-8">Localização & Horário de Funcionamento</h2>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-2">Endereço</h3>
            <p className="text-zinc-700">
              R. Estácio De Sá, 6693 - Cuniã
              <br />
              Porto Velho - RO
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-2">Áreas de Entrega</h3>
            <p className="text-zinc-700">
              Entregamos em toda Porto Velho e bairros próximos. Consulte disponibilidade para sua região e aproveite nosso delivery de comida japonesa.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-800 mb-2">Horário de Funcionamento</h3>
            <p className="text-zinc-700">Segunda a Domingo: 19h às 23h</p>
          </div>
        </div>
        <div className="flex-1 w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=R.%20Est%C3%A1cio%20De%20S%C3%A1%2C%206693%20-%20Cuni%C3%A3%2C%20Porto%20Velho%20-%20RO&output=embed"
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
  );
}
