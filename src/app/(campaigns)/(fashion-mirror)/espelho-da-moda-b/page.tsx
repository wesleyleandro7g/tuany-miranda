"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Countdown from "@/components/countdown";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function FashionMirrorV1() {
  return (
    <main className={montserrat.className}>
      <section className="min-h-screen md:w-full relative flex flex-col items-center lg-[1200px]">
        <Image src="/banner.png" alt="Closet" fill className="-z-10" />
        <Countdown />

        <div className="flex flex-col items-center gap-8 px-4 py-8 md:py-12 md:max-w-[900px]">
          <h1 className="text-2xl text-white text-center font-bold lg:text-4xl">
            Aprenda como transmitir todo o seu potencial através da sua imagem e{" "}
            <span className="text-violet-web">
              torne-se uma mulher segura e confiante
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
          <button className="px-8 py-4 rounded-xl bg-violet-web text-xl text-white uppercase font-bold max-w-fit">
            Eu quero começar já
          </button>
        </div>
      </section>
      <section className="min-h-screen relative bg-violet-web flex justify-center items-center w-full">
        <div className="p-8 w-1/2">
          <iframe
            src="https://app.mymonitor.io/"
            className="w-full h-screen rounded-2xl"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
