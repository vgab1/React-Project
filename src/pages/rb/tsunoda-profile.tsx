import { useEffect } from "react";
import Yuki from "../../assets/drivers/tsunoda.avif";
import YukiHelmet from "../../assets/helmets/tsunoda-helmet.avif";
import JapanFlag from "../../assets/country/japan-flag.avif";
import { Header } from "../../components/header";

export function YukiTsunodaPage() {
  useEffect(() => {
    document.title = "Yuki Tsunoda - F1 Driver for RB";
  }, []);
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Yuki}
                alt="Yuki Tsunoda"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">22</p>
              <img
                src={JapanFlag}
                alt="Japan Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Yuki Tsunoda</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img src={YukiHelmet} alt="Yuki Helmet" className="w-60 p-5" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>RB</p>
              <p className="font-bold">Country:</p>
              <p>Japan</p>
              <p className="font-bold">Podiums:</p>
              <p>0</p>
              <p className="font-bold">Points:</p>
              <p>83</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>80</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>4 (x1)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>6</p>
              <p className="font-bold">Date of birth:</p>
              <p>11/05/2000</p>
              <p className="font-bold">Place of birth:</p>
              <p>Sagamihara, Japan</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            In the entire history of Formula 1, no Japanese driver has ever won
            a World Championship Grand Prix. Could Yuki Tsunoda be the first?
            Red Bull certainly think so, with the youngster very much on the
            path to their senior team if he continues to impress as he has done
            over the past few years. Tsunoda's ascent to the top tier of
            motorsport was astonishingly rapid: he went from racing in Japanese
            F4 to a Formula 1 seat with AlphaTauri, now RB, in just over three
            years, having arrived in Europe in 2019 with no knowledge of the
            circuits. But after a slow start in F3, followed by a hugely
            impressive debut F2 campaign that saw him finish third in the
            championship and pick up three wins along the way, Tsunoda proved he
            had the speed and the race craft to force his way on to the F1 grid.
            He may not have adapted to Grand Prix racing quite as quickly as he
            did to F2, but having now firmly established himself in Formula 1,
            he could yet find himself battling at the very sharp end in a Red
            Bull.
          </p>
        </div>
      </main>
    </div>
  );
}
