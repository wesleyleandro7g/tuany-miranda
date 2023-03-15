"use client";

import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import ReactPlayer from "react-player";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export default function Sort() {
  const [playing, setPlaying] = useState(false);
  const [maxNumber, setMaxNumber] = useState("");
  const [winningNumber, setWinningNumber] = useState<null | number>(0);

  function sortNumber() {
    const minNumber = 1;

    setWinningNumber(
      Math.floor(Math.random() * (Number(maxNumber) - minNumber + 1)) +
        minNumber
    );

    setPlaying(false);
  }

  function startContdown() {
    setPlaying(true);
  }

  return (
    <main className={poppins.className}>
      <div className="flex flex-1 flex-col justify-center items-center w-full h-screen bg-black">
        {!playing && (
          <div className="py-4">
            <Image
              src="/tuany-logo-light.svg"
              alt="Tuany Logo"
              width={200}
              height={250}
            />
          </div>
        )}

        {!playing && (
          <div className="flex flex-1 flex-col justify-center items-center">
            {winningNumber ? (
              <div className="text-center">
                <h1 className="text-white text-8xl">{winningNumber}</h1>
                <h1 className="text-white text-2xl">Número sorteado</h1>

                <button
                  className="w-80 h-12 rounded-md bg-white mt-4 lowercase"
                  onClick={() => setWinningNumber(null)}
                >
                  Sortear Novamente
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <input
                  type="number"
                  placeholder="Quantidade de participantes"
                  className="w-full h-12 rounded-lg text-center"
                  onChange={(e) => setMaxNumber(e.target.value)}
                />
                <button
                  className="w-80 h-12 rounded-md bg-white lowercase"
                  onClick={startContdown}
                >
                  Sortear
                </button>
              </div>
            )}
          </div>
        )}
        {playing && (
          <div className="w-full h-full relative">
            <ReactPlayer
              url="/contagem-regressiva.mp4"
              width="100%"
              height="100%"
              className="absolute object-fill"
              playing={playing}
              onEnded={sortNumber}
              muted
            />
          </div>
        )}
      </div>
    </main>
  );
}
