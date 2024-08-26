import { useEffect } from "react";
import { Header } from "../../components/header";
import Sergio from "../../assets/drivers/perez.avif";
import MexicoFlag from "../../assets/country/mexico-flag.avif";
import SergioHelmet from "../../assets/helmets/perez-helmet.avif";

export function SergioPerezPage() {
  useEffect(() => {
    document.title = "Sergio Perez - F1 Driver for Red Bull Racing";
  }, []);
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Sergio}
                alt="Sergio Perez"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">11</p>
              <img
                src={MexicoFlag}
                alt="Netherlands Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Sergio Perez</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img src={SergioHelmet} alt="Max Helmet" className="w-60 p-5" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Red Bull Racing</p>
              <p className="font-bold">Country:</p>
              <p>Mexico</p>
              <p className="font-bold">Podiums:</p>
              <p>39</p>
              <p className="font-bold">Points:</p>
              <p>1617</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>272</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>1 (x6)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>1</p>
              <p className="font-bold">Date of birth:</p>
              <p>26/01/1990</p>
              <p className="font-bold">Place of birth:</p>
              <p>Guadalajara, Mexico</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            He’s the fighter with a gentle touch from the land of the Lucha
            Libre. Perez’s reputation in F1 has been built on opposite
            approaches to Grand Prix racing. On the one hand, he is a punchy
            combatant who wrestles his way through the pack and into the points.
            Never afraid to add a bit of spice to his on-track encounters, even
            his team mates don’t always escape the Mexican’s heat. Then on the
            other hand, Perez is a smooth operator, a master at managing tyres
            to eke out extra performance and give him the upper hand on
            strategy. A firm favourite on the grid after his time with Sauber,
            McLaren, Force India and Racing Point, Perez has matured into an
            analytical racer and team player. A proud countryman, the
            Guadalajara gunslinger has amassed more points than any other
            Mexican in the history of F1. In Sakhir 2020 he also matched hero
            and compatriot Pedro Rodriguez by taking the chequered flag in first
            – a performance that landed him a seat with title contenders Red
            Bull. There he provided a supporting role to Max Verstappen’s
            2021/22/23 championship-winning campaigns, also adding a further
            five victories to his personal tally. His own title challenge may
            not be assured, especially with Verstappen as team mate, but Perez
            working hard and racing with his heart are.
          </p>
        </div>
      </main>
    </div>
  );
}
