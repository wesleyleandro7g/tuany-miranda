import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={montserrat.className}>
      <h1 className="text-2xl text-red-500 font-bold">Tuany Miranda</h1>
      <div className="w-full h-[40px] bg-red-400">
        <h6 className="text-sm">teste</h6>
      </div>
    </main>
  );
}
