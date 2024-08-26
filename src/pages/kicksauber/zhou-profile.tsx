import { useEffect } from "react";
import Zhou from "../../assets/drivers/zhou.avif";
import ZhouHelmet from "../../assets/helmets/zhou-helmet.avif";
import ChinaFlag from "../../assets/country/china-flag.avif";
import { Header } from "../../components/header";

export function ZhouGuanyuPage() {
  useEffect(() => {
    document.title = "Zhou Guanyu - F1 Driver for Stake F1 Team Kick Sauber";
  }, []);
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Zhou}
                alt="Zhou Guanyu"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">24</p>
              <img
                src={ChinaFlag}
                alt="China Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Zhou Guanyu</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img src={ZhouHelmet} alt="Zhou Helmet" className="w-60 p-5" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Kick Sauber</p>
              <p className="font-bold">Country:</p>
              <p>China</p>
              <p className="font-bold">Podiums:</p>
              <p>0</p>
              <p className="font-bold">Points:</p>
              <p>12</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>58</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>8 (x1)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>5</p>
              <p className="font-bold">Date of birth:</p>
              <p>30/05/1999</p>
              <p className="font-bold">Place of birth:</p>
              <p>Shanghai, China</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            China had never boasted a Grand Prix starter among its citizens –
            until Zhou Guanyu changed that state of affairs, after receiving the
            call-up to make his F1 debut for Alfa Romeo, now Kick Sauber, in
            2022. The Shanghai-born racer attended his home city’s inaugural
            Grand Prix in 2004 at the age of five, cheering on his hero Fernando
            Alonso. But having caught the racing bug, the Chinese driver then
            set himself the ambitious goal of becoming his country’s first-ever
            F1 racer – achieving a feat that Ma Qinghua, the only other Chinese
            driver to take part in a Formula 1 weekend, never managed. Showing
            boldness and dedication, Zhou put his plan into action by moving to
            England with his family aged just 12 to pursue his motorsport
            ambitions. A second-place finish in the 2015 Italian F4 championship
            proved Zhou was possessed of the right stuff – a fact already noted
            by Ferrari, who’d signed him to their driver academy a year earlier.
            A move to Renault’s academy for 2019 coincided with his debut in
            Formula 2, with Zhou building his confidence in the series via
            multiple wins and pole positions across three seasons, leading to
            him challenging for the drivers’ title in 2021. That was enough to
            convince Team Principal Fred Vasseur to put his faith in Zhou for
            2022 and field him alongside ex-Mercedes racer Valtteri Bottas –
            allowing Zhou to achieve his dream of racing in F1, and even to see
            how he fares against his own childhood hero, Fernando Alonso.
          </p>
        </div>
      </main>
    </div>
  );
}
