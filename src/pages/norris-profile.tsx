import { Header } from "../components/header";
import Lando from "../assets/norris.avif";
import LandoHelmet from "../assets/norris-helmet.avif";
import UKFlag from "../assets/united-kingdom-flag.avif";

export function LandoNorrisPage() {
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Lando}
                alt="Lando Norris"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-400 text-5xl font-bold font-mono">4</p>
              <img
                src={UKFlag}
                alt="United Kingdom Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Lando Norris</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img src={LandoHelmet} alt="Oscar Helmet" className="w-60 p-5" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>McLaren</p>
              <p className="font-bold">Country:</p>
              <p>United Kingdom</p>
              <p className="font-bold">Podiums:</p>
              <p>21</p>
              <p className="font-bold">Points:</p>
              <p>832</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>118</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>1 (x1)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>1</p>
              <p className="font-bold">Date of birth:</p>
              <p>13/11/1999</p>
              <p className="font-bold">Place of birth:</p>
              <p>Bristol, England</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            Lando Norris may not be named after Star Wars rebel Lando Calrissian
            - his Mum just liked the moniker - but he has flair and fighting
            spirit in bountiful supply. McLaren had the British teenager on
            their books for two years before fast-tracking him into F1’s galaxy
            of stars in 2019. A firecracker in his junior career, with a
            penchant for pole positions and wheel-to-wheel tussles, Norris
            didn’t let them down. Paired with the highly-rated – and far more
            experienced – Carlos Sainz, his rookie season was impressive, Norris
            edging the Spaniard in their head-to-head qualifying battle, scoring
            points 11 times, and only narrowly missing out on a top-10
            championship placing. A maiden podium came in 2020, with more
            following in the subsequent two seasons – he narrowly missed out on
            a win at Russia 2021 – as he dominated another more senior team
            mate, Daniel Ricciardo, to firmly establish himself in F1’s top
            tier. Away from the track, Norris brims with a modest charm and an
            artistic side sees him design and paint his own race gear as a
            hobby. The focus for the future is allying artistry and ambition on
            track as McLaren rely on the promise of youth to take them back to
            the top. Norris hopes the downforce will be with him…
          </p>
        </div>
      </main>
    </div>
  );
}
