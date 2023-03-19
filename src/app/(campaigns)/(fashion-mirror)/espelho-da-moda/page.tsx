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
    </main>
  );
}
