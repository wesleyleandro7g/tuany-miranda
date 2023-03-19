"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Countdown from "@/components/countdown";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function FashionMirrorV1() {
  return (
    <main className={poppins.className}>
      <section className="min-h-screen md:w-full relative flex flex-col items-center lg-[1200px]">
        <Image src="/banner.png" alt="Closet" fill className="-z-10" />
        <Countdown />

        <div className="flex flex-col items-center gap-8 px-4 py-8 md:py-12 md:max-w-[900px]">
          <h1 className="text-2xl text-white text-center font-bold lg:text-4xl">
            Aprenda como transmitir todo o seu potencial através da sua imagem e{" "}
            <span className="text-violet-web">
              se torne uma mulher segura e confiante
            </span>
          </h1>

          <iframe
            id="panda-24825bd7-5f4d-47f1-adc6-dc11b9bf45ab"
            src="https://player-vz-010c908f-347.tv.pandavideo.com.br/embed/?v=24825bd7-5f4d-47f1-adc6-dc11b9bf45ab"
            className="border-none rounded-xl aspect-video w-full md:w-[720px] shadow-xl"
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
            allowFullScreen={true}
          ></iframe>

          <h1 className="text-xl text-white text-center font-medium">
            Descubra as técnicas por trás de uma{" "}
            <span className="text-violet-web">imagem pessoal de sucesso </span>e
            desperte todo o seu potencial. Chegou a hora de se tornar a
            <span className="text-violet-web">protagonista da sua vida!</span>
          </h1>
          <button className="flex items-center gap-4 px-8 py-4 rounded-full bg-violet-web text-lg text-white uppercase font-bold max-w-fit whitespace-nowrap">
            Eu quero começar já
            <svg
              width="30"
              height="19"
              viewBox="0 0 30 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3909 2.20721L27.9927 9.80897L20.3909 17.4107M26.9369 9.80897H2.02002"
                stroke="white"
                stroke-width="2.53392"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      <section className="flex flex-col items-center min-h-screen px-4 py-8 gap-4 bg-white">
        <h1 className="text-4xl font-extrabold text-center text-claret mb-4">
          Confira o que você vai aprender
        </h1>

        <Image
          src="/modules/aprenda-a-se-vestir-para-o-seu-corpo.jpg"
          alt="Aprenda a se vestir para os eu tipo de corpo"
          width={1000}
          height={1000}
          className="w-full h-auto object-contain"
        />
        <Image
          src="/modules/estilo-pessoal.jpg"
          alt="Descubra o seu estilo pessoal"
          width={1000}
          height={1000}
          className="w-full h-auto object-contain"
        />
        <Image
          src="/modules/aprenda-a-combinar-cores-e-estampas.jpg"
          alt="Aprenda a combinar cores e estampas"
          width={1000}
          height={1000}
          className="w-full h-auto object-contain"
        />
        <Image
          src="/modules/guarda-roupa-dos-sonhos.jpg"
          alt="Aprenda a montar o seu guarda roupa dos sonhos"
          width={1000}
          height={1000}
          className="w-full h-auto object-contain"
        />
        <Image
          src="/modules/visagismo.jpg"
          alt="Visagismo foco no seu rosto"
          width={1000}
          height={1000}
          className="w-full h-auto object-contain"
        />

        <h1 className="text-4xl font-extrabold text-center text-claret mt-8 mb-4">
          E você ainda terá acesso há um módulo bônus!
        </h1>

        <Image
          src="/modules/compras-inteligentes.jpg"
          alt="Visagismo foco no seu rosto"
          width={1000}
          height={1000}
          className="w-full h-auto object-contain"
        />
      </section>

      <section className="flex flex-col items-center  bg-claret">
        <Image src="/background1.png" alt="Background" fill />
        <div className="flex flex-col w-full h-full absolute z-10 px-4 py-8 gap-4">
          <h1 className="text-4xl font-extrabold text-center text-white mt-8 mb-4">
            E qual o investimento para ter acesso a tudo isso
          </h1>

          <div className="flex flex-col w-full h-auto items-center px-4 py-12 gap-4 rounded-2xl bg-magenta-crayola">
            <span className="flex-nowrap text-white font-medium text-center">
              De{" "}
              <span className="text-dark-sienna line-through">R$1247,00</span>{" "}
              por
            </span>

            <div className="flex items-end">
              <span className="text-dark-sienna font-bold">12x de</span>
              <h3 className="text-dark-sienna text-6xl font-bold">R$39,70</h3>
            </div>

            <span className="text-white font-medium text-center">
              ou R$397 à vista
            </span>

            <div className="flex flex-col gap-4 my-4">
              <div className="flex justify-start items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="white"
                    stroke-width="2.0695"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M15.334 11.9998L10.334 8.6665V15.3332L15.334 11.9998Z"
                    stroke="white"
                    stroke-width="2.0695"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="flex-nowrap text-sm text-white font-medium">
                  Acesso imediato a todas as aulas
                </span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8.06671V2.0633C2 1.8463 2.0862 1.6382 2.23964 1.48476C2.39308 1.33132 2.60119 1.24512 2.81818 1.24512H19.1818C19.3988 1.24512 19.6069 1.33132 19.7604 1.48476C19.9138 1.6382 20 1.8463 20 2.0633V8.06671C20 16.6576 12.708 19.5008 11.2557 19.9815C11.0907 20.0426 10.9093 20.0426 10.7443 19.9815C9.29205 19.5008 2 16.6576 2 8.06671Z"
                    stroke="white"
                    stroke-width="2.0053"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.5005 6.97168L9.49708 12.699L6.50049 9.83532"
                    stroke="white"
                    stroke-width="2.0053"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="flex-nowrap text-sm text-white font-medium">
                  Pagamento seguro
                </span>
              </div>

              <div className="flex justify-start items-center gap-2">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.93269 18.6694C3.04808 17.7847 3.63462 15.929 3.18269 14.8424C2.73077 13.7559 1 12.804 1 11.6021C1 10.4001 2.71154 9.48667 3.18269 8.36167C3.65385 7.23667 3.04808 5.41936 3.93269 4.53474C4.81731 3.65013 6.67308 4.23667 7.75962 3.78474C8.84615 3.33282 9.79808 1.60205 11 1.60205C12.2019 1.60205 13.1154 3.31359 14.2404 3.78474C15.3654 4.2559 17.1827 3.65013 18.0673 4.53474C18.9519 5.41936 18.3654 7.27513 18.8173 8.36167C19.2692 9.44821 21 10.4001 21 11.6021C21 12.804 19.2885 13.7174 18.8173 14.8424C18.3462 15.9674 18.9519 17.7847 18.0673 18.6694C17.1827 19.554 15.3269 18.9674 14.2404 19.4194C13.1538 19.8713 12.2019 21.6021 11 21.6021C9.79808 21.6021 8.88462 19.8905 7.75962 19.4194C6.63462 18.9482 4.81731 19.554 3.93269 18.6694Z"
                    stroke="white"
                    stroke-width="1.88679"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.2311 9.29492L9.58684 14.6795L6.76953 11.9872"
                    stroke="white"
                    stroke-width="1.88679"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="flex-nowrap text-sm text-white font-medium">
                  Garantia incondicional de 7 dias
                </span>
              </div>
            </div>

            <button className="flex w-full items-center gap-4 px-8 py-4 rounded-full text-lg text-white uppercase font-bold whitespace-nowrap bg-gradient-to-r from-[#06B169] to-[#05693E]">
              Eu quero começar já
            </button>

            <Image
              src="/payment-group.png"
              alt="Background"
              width={1000}
              height={1000}
              className="w-[90%] h-auto object-contain"
            />
          </div>

          <div className="flex flex-col w-full py-8">
            <Image
              src="/selo-garantia.png"
              alt="sete dias de garantia"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain"
            />

            <h4 className="text-4xl font-extrabold text-center text-white mt-8 mb-4 uppercase">
              Risco zero <br /> por 7 dias
            </h4>

            <p className="text-white font-bold text-justify mt-4">
              Se dentro de 7 dias após a sua inscrição, você sentir que o curso
              não atendeu às suas expectativas ou que não era aquilo que estava
              procurando, basta entrar em contato comigo que devolverei 100% do
              valor que você investiu!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
