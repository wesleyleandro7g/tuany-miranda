"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Countdown from "@/components/countdown";
import ReactPlayer from "react-player";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function FashionMirrorV1() {
  const [playing, setPlaying] = useState(false);

  const playPause = () => setPlaying(!playing);

  return (
    <main className={montserrat.className}>
      <section className="min-h-screen md:w-[900px] relative flex flex-col items-center lg-[1200px]">
        <Image src="/banner.png" alt="Closet" fill className="-z-10" />
        <Countdown />

        <div className="flex flex-col items-center gap-8 px-4 py-8 md:py-12 md:max-w-[900px]">
          <h1>AQUI!</h1>
          <h1 className="text-2xl text-white text-center font-bold lg:text-4xl">
            Aprenda como transmitir todo o seu potencial através da sua imagem e{" "}
            <span className="text-violet-web">
              torne-se uma mulher segura e confiante
            </span>
          </h1>

          <div className="relative w-[840px] aspect-video rounded-xl md:rounded-2xl border-vermilion border-2 md:border-4 overflow-hidden">
            <ReactPlayer
              url="/espelho-da-moda-vsl-v1.mp4"
              width="100%"
              height="100%"
              className="absolute"
              playing={playing}
              muted={false}
            />

            <Image
              src="/img01.svg"
              alt="Closet"
              fill
              className={`absolute z-10 opacity-${playing ? 0 : 1}`}
            />
            <button
              onClick={playPause}
              className={`w-full h-full bg-black absolute z-20 flex justify-center items-center opacity-${
                playing ? 0 : 50
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                className="w-24 h-24 cursor-pointer animate-pulse"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

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
      <section className="min-h-screen relative">
        <h1>Outra coisa</h1>
      </section>
    </main>
  );
}
