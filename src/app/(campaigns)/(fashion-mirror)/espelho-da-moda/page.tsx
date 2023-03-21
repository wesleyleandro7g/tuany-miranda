"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Countdown from "@/components/countdown";
import Accordion from "@/components/accordion";

import { FREQUENT_QUESTIONS } from "./utils";
import Popup from "@/components/popup";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function FashionMirrorV1() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const sendMensage = () => {
    router.push(
      "https://wa.me/5538998739798?text=Oi+Tuany%2C+estou+com+d%C3%BAvidas+sobre+o+seu+curso%2C+voc%C3%AA+pode+me+ajudar%3F"
    );
  };

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
            desperte todo o seu potencial. Chegou a hora de se tornar a{" "}
            <span className="text-violet-web">protagonista da sua vida!</span>
          </h1>
          <button
            onClick={openPopup}
            className="flex items-center gap-4 px-8 py-4 rounded-full bg-violet-web text-lg text-white uppercase font-bold max-w-fit whitespace-nowrap"
          >
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
        <h1 className="text-4xl font-extrabold text-center text-claret mb-4 lg:max-w-screen-sm">
          Confira o que você vai aprender
        </h1>

        <div className="flex flex-col gap-4 w-full lg:grid lg:grid-cols-5">
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
        </div>

        <h1 className="text-4xl font-extrabold text-center text-claret mt-8 mb-4 lg:max-w-screen-sm">
          E você ainda terá acesso há um módulo bônus!
        </h1>

        <div className="w-full md:max-w-xs">
          <Image
            src="/modules/compras-inteligentes.jpg"
            alt="Visagismo foco no seu rosto"
            width={1000}
            height={1000}
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      <section className="flex flex-col items-center relative px-4 py-8 gap-4 bg-claret">
        <h1 className="text-4xl font-extrabold text-center text-white mt-8 mb-4 lg:max-w-screen-sm">
          E qual o investimento para ter acesso a tudo isso
        </h1>

        <div className="flex flex-col w-full h-auto items-center px-4 py-12 gap-4 rounded-2xl bg-magenta-crayola lg:max-w-md">
          <span className="flex-nowrap text-white font-medium text-center">
            De <span className="text-dark-sienna line-through">R$1247,00</span>{" "}
            por
          </span>

          <div className="flex items-end">
            <span className="text-dark-sienna font-bold">10x de</span>
            <h3 className="text-dark-sienna text-6xl font-bold">R$39,70</h3>
          </div>

          <span className="text-white font-medium text-center">
            ou R$397 à vista
          </span>

          <div className="flex flex-col w-full text-left gap-4 my-4">
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

          <button
            onClick={openPopup}
            className="flex w-full justify-center items-center gap-4 px-8 py-4 rounded-full text-lg text-white uppercase font-bold whitespace-nowrap bg-gradient-to-r from-[#06B169] to-[#05693E]"
          >
            Eu quero começar já
          </button>

          <Image
            src="/payment-group.png"
            alt="Métodos de pagamento"
            width={1000}
            height={1000}
            className="w-[90%] h-auto object-contain"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full py-8 lg:flex-row">
          <Image
            src="/selo-garantia.png"
            alt="sete dias de garantia"
            width={1000}
            height={1000}
            className="w-full h-auto object-contain lg:max-w-sm"
          />

          <div className="lg:max-w-md">
            <h4 className="text-4xl font-extrabold text-center text-white mt-8 mb-4 uppercase lg:text-left">
              Risco zero <br /> por 7 dias
            </h4>

            <p className="text-white font-bold text-justify mt-4 ">
              Se dentro de 7 dias após a sua inscrição, você sentir que o curso
              não atendeu às suas expectativas ou que não era aquilo que estava
              procurando, basta entrar em contato comigo que devolverei 100% do
              valor que você investiu!
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center relative py-8 gap-4 bg-magenta-crayola">
        <h3 className="text-4xl font-extrabold text-left text-white mt-8 mb-4 hidden lg:block lg:max-w-screen-sm">
          Quem é <span className="text-claret">Tuany Miranda</span> e porque
          você deveria me ouvir
        </h3>
        <div className="w-full lg:min-w-[600px] lg:max-w-4xl lg:flex lg:px-8 lg:items-start">
          <Image
            src="/tuany-miranda.png"
            alt="Tuany miranda"
            width={1200}
            height={1200}
            className="w-full h-auto object-contain lg:w-[500px]"
          />

          <p className="text-white text-xs font-bold text-justify mt-4 hidden lg:block">
            Meu nome é Tuany Miranda, sou designer de moda formada pela UFMG,
            sou consultora de imagem e estilo, sou formada em Coloração Pessoal
            e já ajudei centenas de mulheres a transformarem a sua imagem
            pessoal e a mostrarem o seu real potencial através da sua imagem.{" "}
            <br />
            <br /> Eu passei a infância e a adolescência me sentindo feia,
            deslocada, invisível, sem confiança e sem amor próprio. Eu sei o
            quanto não gostar de quem se é machuca e te leva ao fundo do poço,
            sei o quanto estar no fundo do poço pode te deixar acreditando que
            não tem saída e que com o passar dos anos as coisas só pioram ainda
            mais. <br />
            <br /> Mas eu estou aqui pra te dizer que existe saída do fundo do
            poço, que existe esse tal de amor próprio e que o cuidado e zelo com
            a sua aparência física pode te ajudar a resgatar toda a segurança e
            autoconfiança que com o passar dos anos foram perdidos. Eu estou
            aqui pra te dizer que eu não quero te transformar em outra pessoa,
            que eu não quero que você se torne escrava da moda e que eu não
            quero te moldar em um padrão. Estou aqui pra te dizer que eu posso
            te ajudar através de conhecimentos de moda, imagem e estilo, a se
            encontrar, a se conhecer e a entender quem você é e o que você
            realmente gosta. A transmitir às pessoas ao seu redor o melhor de
            você mesma! Acredito que você tem um potencial incrível que está
            adormecido e que eu sou capaz de te ajudar a revelar a pessoa
            maravilhosa que você é através de uma imagem pessoal assertiva com
            você mesmo, com sua profissão, suas qualidades, seu temperamento e
            com quem você deseja ser! <br />
            <br />
            Eu acredito que você consegue e que você está preparada para essa
            mudança! caso contrário não teria chegado até aqui. Vem comigo!
            deixe eu ser sua fada madrinha. Transforme a sua imagem pessoal no
            melhor de você mesma. Estou te esperando!
          </p>
        </div>

        <div className="px-4">
          <h3 className="text-4xl font-extrabold text-left text-white mt-8 mb-4 lg:hidden">
            Quem é <span className="text-claret">Tuany Miranda</span> e porque
            você deveria me ouvir
          </h3>

          <p className="text-white font-bold text-justify mt-4 lg:hidden">
            Meu nome é Tuany Miranda, sou designer de moda formada pela UFMG,
            sou consultora de imagem e estilo, sou formada em Coloração Pessoal
            e já ajudei centenas de mulheres a transformarem a sua imagem
            pessoal e a mostrarem o seu real potencial através da sua imagem.{" "}
            <br />
            <br /> Eu passei a infância e a adolescência me sentindo feia,
            deslocada, invisível, sem confiança e sem amor próprio. Eu sei o
            quanto não gostar de quem se é machuca e te leva ao fundo do poço,
            sei o quanto estar no fundo do poço pode te deixar acreditando que
            não tem saída e que com o passar dos anos as coisas só pioram ainda
            mais. <br />
            <br /> Mas eu estou aqui pra te dizer que existe saída do fundo do
            poço, que existe esse tal de amor próprio e que o cuidado e zelo com
            a sua aparência física pode te ajudar a resgatar toda a segurança e
            autoconfiança que com o passar dos anos foram perdidos. Eu estou
            aqui pra te dizer que eu não quero te transformar em outra pessoa,
            que eu não quero que você se torne escrava da moda e que eu não
            quero te moldar em um padrão. Estou aqui pra te dizer que eu posso
            te ajudar através de conhecimentos de moda, imagem e estilo, a se
            encontrar, a se conhecer e a entender quem você é e o que você
            realmente gosta. A transmitir às pessoas ao seu redor o melhor de
            você mesma! Acredito que você tem um potencial incrível que está
            adormecido e que eu sou capaz de te ajudar a revelar a pessoa
            maravilhosa que você é através de uma imagem pessoal assertiva com
            você mesmo, com sua profissão, suas qualidades, seu temperamento e
            com quem você deseja ser! <br />
            <br />
            Eu acredito que você consegue e que você está preparada para essa
            mudança! caso contrário não teria chegado até aqui. Vem comigo!
            deixe eu ser sua fada madrinha. Transforme a sua imagem pessoal no
            melhor de você mesma. Estou te esperando!
          </p>
        </div>
      </section>

      <section className="flex flex-col w-full items-center relative py-8 px-4 gap-4 bg-white">
        <h1 className="text-4xl font-extrabold text-center text-magenta-crayola mt-8 mb-4">
          Perguntas Frequentes
        </h1>

        <Accordion data={FREQUENT_QUESTIONS} />

        <h1 className="text-4xl font-extrabold text-center text-magenta-crayola mt-12 lg:max-w-screen-sm">
          Ficou com alguma dúvida ou precisa de ajuda?
        </h1>

        <p className="text-rick-black font-bold text-center">
          Fale com o nosso time de suporte agora mesmo
        </p>

        <button
          onClick={sendMensage}
          className="flex w-full max-w-fit justify-center items-center gap-4 px-8 py-4 rounded-full text-lg text-white uppercase font-bold whitespace-nowrap bg-gradient-to-r from-[#06B169] to-[#05693E]"
        >
          <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.5712 4.32395C20.4529 3.20514 19.1244 2.31856 17.6621 1.71526C16.1998 1.11195 14.6326 0.803838 13.0507 0.808649C6.41215 0.808649 1.00797 6.18582 1.00527 12.7963C1.00234 14.9013 1.55719 16.9694 2.61335 18.7902L0.904297 25L7.28963 23.3331C9.05712 24.2906 11.0357 24.7917 13.0459 24.791H13.0507C19.6888 24.791 25.0924 19.4133 25.0956 12.8033C25.0997 11.2269 24.7901 9.66537 24.1851 8.20966C23.58 6.75394 22.6915 5.43309 21.5712 4.32395ZM13.0507 22.7677H13.0464C11.2544 22.7682 9.49498 22.2887 7.95111 21.3789L7.58554 21.1629L3.79646 22.1521L4.80785 18.4754L4.56972 18.0974C3.56771 16.511 3.03683 14.6727 3.03886 12.7963C3.03886 7.30305 7.53208 2.83359 13.0545 2.83359C15.7037 2.82886 18.2462 3.8766 20.123 5.74634C21.9997 7.61609 23.0569 10.1547 23.0621 12.8039C23.0599 18.2977 18.5688 22.7677 13.0507 22.7677ZM18.5418 15.3056C18.2411 15.1555 16.7599 14.4309 16.4856 14.331C16.2113 14.2311 16.0088 14.1809 15.8084 14.4811C15.6081 14.7813 15.0309 15.4531 14.8554 15.6556C14.6799 15.858 14.5044 15.8802 14.2036 15.7301C13.9028 15.58 12.9325 15.2641 11.7828 14.2435C10.8881 13.4492 10.2844 12.4686 10.1089 12.1689C9.93339 11.8692 10.09 11.7066 10.2406 11.5576C10.3762 11.4231 10.5414 11.2077 10.6921 11.0327C10.8427 10.8578 10.8929 10.7325 10.9928 10.5327C11.0927 10.3329 11.0431 10.158 10.968 10.0084C10.8929 9.85881 10.2909 8.3841 10.0403 7.78418C9.7957 7.19992 9.54784 7.2793 9.36317 7.27012C9.18767 7.26148 8.98518 7.25932 8.78593 7.25932C8.6336 7.26328 8.48373 7.2986 8.34567 7.36308C8.20761 7.42756 8.08432 7.51981 7.98351 7.63407C7.70757 7.9343 6.92999 8.66004 6.92999 10.1331C6.92999 11.6062 8.00997 13.0318 8.159 13.2316C8.30804 13.4313 10.2811 16.4569 13.3002 17.7545C13.8608 17.9946 14.4336 18.2051 15.0163 18.3852C15.7372 18.6131 16.3932 18.5812 16.9116 18.504C17.49 18.4181 18.6936 17.7793 18.9436 17.0795C19.1936 16.3797 19.1941 15.7803 19.1191 15.6556C19.044 15.5308 18.8432 15.4552 18.5418 15.3056Z"
              fill="white"
            />
          </svg>
          Preciso de ajuda
        </button>
      </section>

      <section className="flex flex-col w-full items-center relative py-8 px-4 gap-4 bg-rick-black">
        <h1 className="text-3xl font-extrabold text-center text-white mt-8 mb-4 lg:max-w-screen-sm">
          Clique no botão abaixo e comece a sua transformação agora! Chegou a
          hora de ser a{" "}
          <span className="text-magenta-crayola">protagonista da sua vida</span>
          .
        </h1>

        <button
          onClick={openPopup}
          className="flex items-center gap-4 px-8 py-4 rounded-full bg-violet-web text-lg text-white uppercase font-bold max-w-fit whitespace-nowrap"
        >
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
        <Image
          src="/assets/payment02.png"
          alt="Métodos de pagamento"
          width={1000}
          height={1000}
          className="w-[90%] lg:max-w-[200px] h-auto object-contain"
        />
      </section>

      <section className="flex justify-center items-center text-center w-full p-4 bg-[#080808]">
        <span className="text-white text-sm">
          © Copyright 2023 - Todos os direitos reservados
        </span>
      </section>

      <Popup isOpen={isOpen} onClose={closePopup} />
    </main>
  );
}
