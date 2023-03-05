"use client";

import { useEffect, useState } from "react";

const defaultTime = {
  minutes: "18",
  seconds: "36",
};

export default function Countdown() {
  const [time, setTime] = useState(defaultTime);
  let intervalId: NodeJS.Timeout;

  useEffect(() => {
    intervalId = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function updateCountdown() {
    setTime((oldTime) => {
      if (Number(oldTime.minutes) === 0 && Number(oldTime.seconds) === 1) {
        clearInterval(intervalId);
      }

      if (Number(oldTime.seconds) === 0) {
        const minutes = `${Number(oldTime.minutes) - 1}`;

        return {
          seconds: "59",
          minutes: minutes.length < 2 ? `0${minutes}` : minutes,
        };
      }

      const seconds = `${Number(oldTime.seconds) - 1}`;

      return {
        seconds: seconds.length < 2 ? `0${seconds}` : seconds,
        minutes: oldTime.minutes,
      };
    });
  }

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
          {time.minutes}
        </h1>
        <span className="text-[10px] md:text-xs text-dark-sienna font-bold uppercase">
          minutos
        </span>
      </div>
      <div className="text-center">
        <h1 className="text-[24px] md:text-[42px] text-dark-sienna font-extrabold leading-4 md:leading-8">
          {time.seconds}
        </h1>
        <span className="text-[10px] md:text-xs text-dark-sienna font-bold uppercase">
          Segundos
        </span>
      </div>
    </div>
  );
}
