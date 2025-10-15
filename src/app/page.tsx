
import Image from "next/image";
import Link from "next/link";
import WhatsappButton from "./components/WhatsappButton";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center justify-center bg-gold">

      {/* Section 1 */}
      <section className="bg-zinc-800 w-full min-h-screen flex flex-col items-center justify-center md:items-end text-white px-2 pt-24 bg-[url(/fundomobile1.jpg)] md:bg-[url(/fundo1.jpg)] bg-cover bg-center bg-no-repeat">

        <div className="bg-black/50 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto md:h-[400px] flex flex-col items-center justify-center gap-8 md:gap-12 md:mr-32 md:mt-4 p-4 sm:p-8 rounded-2xl">

          <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
            Experiência japonesa autêntica, no conforto da sua casa.
          </h1>

          <p className="text-center text-base md:text-2xl">
            No MAHAL Sushi Bar, cada peça é criada com maestria, unindo ingredientes frescos, técnica refinada e apresentação impecável.
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
      <section className="w-full min-h-[400px] flex flex-col md:flex-row items-center justify-center py-16 px-4">

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

          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
            Sobre o Mahal Sushi Bar
          </h2>

          <p className="text-white text-center text-base sm:text-lg md:text-xl">
            O Mahal Sushi Bar nasceu da paixão pela culinária japonesa e do desejo de proporcionar uma experiência única aos nossos clientes.
            Utilizamos ingredientes frescos, selecionados com rigor, e prezamos pela excelência em cada detalhe, do preparo à apresentação dos pratos.
            Nosso compromisso é levar até você o verdadeiro sabor do Japão, com qualidade, tradição e um toque especial de criatividade.
          </p>

        </div>

      </section>

      {/* Section 3 */}
      <section className="w-full py-16 px-4 bg-white flex flex-col items-center">

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-800 text-center mb-10">
          Destaques do Mahal Sushi Bar
        </h2>

        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {/* Frescor */}
          <div className="flex flex-col items-center text-center">

            {/* Ícone de folha */}
            <span className="text-green-500 mb-3">

              <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.03 2 2.73 6.11 2.05 11.02c-.09.67.45 1.25 1.13 1.25h.01c.56 0 1.04-.42 1.12-.97C4.98 7.36 8.13 4.5 12 4.5s7.02 2.86 7.69 6.8c.08.55.56.97 1.12.97h.01c.68 0 1.22-.58 1.13-1.25C21.27 6.11 16.97 2 12 2Z" /></svg>

            </span>

            <p className="font-semibold text-zinc-800">Frescura Garantida</p>

            <span className="text-zinc-600 text-sm">Ingredientes sempre frescos e selecionados.</span>

          </div>

          {/* Ingredientes importados */}
          <div className="flex flex-col items-center text-center">

            {/* Ícone de globo */}
            <span className="text-blue-500 mb-3">

              <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2c1.38 0 2.63.35 3.72.97C14.5 6.1 13.34 8.5 13.07 12h-2.14C10.66 8.5 9.5 6.1 8.28 4.97A7.97 7.97 0 0112 4zm-7.93 8c.2-1.19.65-2.29 1.3-3.24C7.1 10.5 8.5 13.5 8.93 20.07A8.01 8.01 0 014.07 12zm2.23 6.24C9.5 17.9 10.66 15.5 10.93 12h2.14c.27 3.5 1.43 5.9 3.65 6.24A7.97 7.97 0 0112 20a7.97 7.97 0 01-5.7-1.76zM12 20c1.38 0 2.63-.35 3.72-.97C14.5 17.9 13.34 15.5 13.07 12h-2.14c-.27 3.5-1.43 5.9-3.65 6.24A7.97 7.97 0 0012 20zm7.93-8a8.01 8.01 0 01-4.86 8.07C16.9 13.5 15.5 10.5 15.07 4.93A8.01 8.01 0 0119.93 12z" /></svg>

            </span>

            <p className="font-semibold text-zinc-800">Ingredientes Importados</p>

            <span className="text-zinc-600 text-sm">Produtos exclusivos do Japão e do mundo.</span>

          </div>

          {/* Entrega rápida */}
          <div className="flex flex-col items-center text-center">

            {/* Ícone de relâmpago */}
            <span className="text-yellow-500 mb-3">

              <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2v13h3v7l7-12h-4l4-8z" /></svg>

            </span>

            <p className="font-semibold text-zinc-800">Entrega Rápida</p>

            <span className="text-zinc-600 text-sm">Seu pedido chega quentinho e no tempo certo.</span>

          </div>

          {/* Montagem artesanal */}
          <div className="flex flex-col items-center text-center">

            {/* Ícone de mão */}
            <span className="text-pink-500 mb-3">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7 11V7a5 5 0 0110 0v4h1a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2h1zm2-4a3 3 0 016 0v4H9V7z" /></svg>
            </span>

            <p className="font-semibold text-zinc-800">Montagem Artesanal</p>

            <span className="text-zinc-600 text-sm">Cada peça feita com cuidado e dedicação.</span>

          </div>

          {/* Atendimento personalizado */}
          <div className="flex flex-col items-center text-center">

            {/* Ícone de coração */}
            <span className="text-purple-500 mb-3">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
            </span>

            <p className="font-semibold text-zinc-800">Atendimento Personalizado</p>

            <span className="text-zinc-600 text-sm">Equipe pronta para te surpreender.</span>

          </div>

        </div>

      </section>

      {/* Section 4 */}
      <section className="w-full py-16 px-4 bg-zinc-100 flex flex-col items-center">

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-800 text-center mb-10">
          Depoimentos de Clientes
        </h2>

        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Depoimento 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">

            <Image
              src="/clientes/cliente1.jpg"
              alt="Foto do cliente Ana Souza"
              width={80}
              height={80}
              className="rounded-full mb-4 object-cover"
            />

            <div className="flex mb-2">

              {/* 5 estrelas */}
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}
            </div>

            <p className="font-semibold text-zinc-800">Ana Souza</p>

            <span className="text-zinc-600 text-sm mb-2">"O melhor sushi da cidade! Ingredientes frescos e entrega super rápida."</span>

          </div>

          {/* Depoimento 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">

            <Image
              src="/clientes/cliente2.jpg"
              alt="Foto do cliente Carlos Lima"
              width={80}
              height={80}
              className="rounded-full mb-4 object-cover"
            />

            <div className="flex mb-2">

              {/* 5 estrelas */}
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}

            </div>

            <p className="font-semibold text-zinc-800">Carlos Lima</p>

            <span className="text-zinc-600 text-sm mb-2">"Atendimento personalizado e pratos montados com muito capricho. Recomendo!"</span>

          </div>

          {/* Depoimento 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">

            <Image
              src="/clientes/cliente3.jpg"
              alt="Foto do cliente Fernanda Dias"
              width={80}
              height={80}
              className="rounded-full mb-4 object-cover"
            />

            <div className="flex mb-2">

              {/* 5 estrelas */}
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}

            </div>

            <p className="font-semibold text-zinc-800">Fernanda Dias</p>

            <span className="text-zinc-600 text-sm mb-2">"Sabor incrível e apresentação impecável. Voltarei a pedir com certeza!"</span>

          </div>

        </div>

      </section>

      {/* Section 5 */}
      <section className="w-full py-16 px-4 bg-white flex flex-col items-center">

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
      </section>

      <WhatsappButton />

    </div>
  );
}
