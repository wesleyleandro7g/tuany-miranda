"use client";

import { useEffect, useState } from "react";

const INITIAL_TIME_IN_SECONDS = 19 * 60 - 24; // 18 minutes and 36 seconds

export default function Countdown() {
  const [time, setTime] = useState(INITIAL_TIME_IN_SECONDS);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    setTimeout(() => {
      if (time < 1) return;

      setTime((state) => state - 1);
    }, 1000);
  }, [time]);

  return (
    <div className="flex justify-center items-center gap-4 md:gap-6 w-full h-16 bg-violet-web">
      <div className="text-center">
        <h1 className="text-[24px] md:text-[42px] text-dark-sienna font-extrabold leading-4 md:leading-8">
          00
        </h1>
        <span className="text-[10px] md:text-xs text-dark-sienna font-bold uppercase">
          Dias
        </span>
      </div>
      <div className="text-center">
        <h1 className="text-[24px] md:text-[42px] text-dark-sienna font-extrabold leading-4 md:leading-8">
          00
        </h1>
        <span className="text-[10px] md:text-xs text-dark-sienna font-bold uppercase">
          Horas
        </span>
      </div>
      <div className="text-center">
        <h1 className="text-[24px] md:text-[42px] text-dark-sienna font-extrabold leading-4 md:leading-8">
          {String(minutes).padStart(2, "0")}
        </h1>
        <span className="text-[10px] md:text-xs text-dark-sienna font-bold uppercase">
          minutos
        </span>
      </div>
      <div className="text-center">
        <h1 className="text-[24px] md:text-[42px] text-dark-sienna font-extrabold leading-4 md:leading-8">
          {String(seconds).padStart(2, "0")}
        </h1>
        <span className="text-[10px] md:text-xs text-dark-sienna font-bold uppercase">
          Segundos
        </span>
      </div>
    </div>
  );
}
