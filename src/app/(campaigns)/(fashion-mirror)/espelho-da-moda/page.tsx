import Image from "next/image";
import Countdown from "@/components/countdown";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function FashionMirrorV1() {
  return (
    <main className={montserrat.className}>
      <section className="min-h-screen relative flex flex-col items-center">
        <Image src="/banner.png" alt="Closet" fill className="-z-10" />
        <Countdown />

        <div className="flex flex-col gap-8 px-4 py-8 md:py-12 md:max-w-[900px]">
          <h1 className="text-2xl text-white text-center font-bold lg:text-4xl">
            Aprenda como transmitir todo o seu potencial através da sua imagem e{" "}
            <span className="text-violet-web">
              torne-se uma mulher segura e confiante
            </span>
          </h1>

          <iframe
            src="https://www.youtube.com/embed/PO_d169ibZ8"
            title="YouTube video player"
            className="rounded-xl md:rounded-2xl border-vermilion border-2 md:border-4 aspect-video w-full md:w-[800px]"
          ></iframe>

          <h1 className="text-xl text-white text-center font-medium">
            Descubra as técnicas por trás de uma{" "}
            <span className="text-violet-web">imagem pessoal de sucesso </span>e
            desperte todo o seu potencial. Chegou a hora de se tornar a
            <span className="text-violet-web">protagonista da sua vida!</span>
          </h1>
          <button className="px-8 py-4 rounded-xl bg-violet-web text-xl text-white uppercase font-bold">
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
