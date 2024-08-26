import { useEffect } from "react";
import Kevin from "../../assets/drivers/magnussen.avif";
import KevinHelmet from "../../assets/helmets/magnussen-helmet.avif";
import DenmarkFlag from "../../assets/country/denmark-flag.avif";
import { Header } from "../../components/header";

export function KevinMagnussenPage() {
  useEffect(() => {
    document.title = "Kevin Magnussen - F1 Driver for Haas";
  }, []);
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Kevin}
                alt="Kevin Magnussen"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">20</p>
              <img
                src={DenmarkFlag}
                alt="Denmark Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Kevin Magnussen</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img src={KevinHelmet} alt="Kevin Helmet" className="w-60 p-5" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Haas</p>
              <p className="font-bold">Country:</p>
              <p>Denmark</p>
              <p className="font-bold">Podiums:</p>
              <p>1</p>
              <p className="font-bold">Points:</p>
              <p>191</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>178</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>2 (x1)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>4</p>
              <p className="font-bold">Date of birth:</p>
              <p>05/10/1992</p>
              <p className="font-bold">Place of birth:</p>
              <p>Roskilde, Denmark</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            Call him a lone ranger or a maverick, but Magnussen is in Formula 1
            for one reason only – to race. He may be a second-generation F1
            driver – following his father, Jan, onto the grid – but Magnussen’s
            idols are from the ‘golden era’ of Grand Prix racing when the likes
            of Juan Manuel Fangio and Stirling Moss risked it all for the love
            of the sport. The Roskilde racer’s own prowess was proven on debut
            for McLaren, who guided him through the junior ranks, when he
            cruised into the top-three at the 2014 Australian Grand Prix,
            becoming the first Dane to claim a podium in F1. Other champagne
            moments were more difficult to find, as he left McLaren behind for a
            season with Renault, before settling in for four among kindred
            spirits at Haas. And after a year away in the States, racing Indy
            and sportscars among other things, he returned to the American team
            in 2022, securing their first-ever pole position at the Brazilian
            Grand Prix. His meaty manoeuvres and elbows-out approach have earned
            him a bad-boy reputation on track, something that still leaves him
            baffled. Out of the car Magnussen is laidback and affable. After all
            he has his dream job – and he is only here to race.
          </p>
        </div>
      </main>
    </div>
  );
}
