import Fernando from "../../assets/drivers/alonso.avif";
import FernandoHelmet from "../../assets/helmets/alonso-helmet.avif";
import SpainFlag from "../../assets/country/spain-flag.avif";
import { Header } from "../../components/header";

export function FernandoAlonsoPage() {
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Fernando}
                alt="Fernando Alonso"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">14</p>
              <img
                src={SpainFlag}
                alt="Spain Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Fernando Alonso</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img
              src={FernandoHelmet}
              alt="Fernando Helmet"
              className="w-60 p-5"
            />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Aston Martin</p>
              <p className="font-bold">Country:</p>
              <p>Spain</p>
              <p className="font-bold">Podiums:</p>
              <p>106</p>
              <p className="font-bold">Points:</p>
              <p>2316</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>394</p>
              <p className="font-bold">World Championships</p>
              <p>2</p>
              <p className="font-bold">Highest race finish:</p>
              <p>1 (x32)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>1</p>
              <p className="font-bold">Date of birth:</p>
              <p>29/07/1981</p>
              <p className="font-bold">Place of birth:</p>
              <p>Oviedo, Spain</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            Michael Schumacher was the undisputed king of Formula 1 in the early
            2000s, picking up wins and championships at a rate that was simply
            unheard of at the time. It was going to take someone very special to
            topple the Ferrari legend from his throne – and that it was Fernando
            Alonso who did it, tells you all you need to know about the
            Spaniard. Fiercely competitive, Alonso is not shy about his talent,
            rating himself as 9/10 “in everything”, and few in the know would
            disagree, with his performances in F1 characterised by blistering
            speed, brilliant tactical thinking, exemplary race craft, a
            razor-sharp eye for detail and a relentless determination to win. A
            serial record breaker in his early days, he was – at one time – F1’s
            youngest polesitter, race winner, world champion and double world
            champion as he gobbled up success with the Renault team. Even Alonso
            couldn’t continue that amazing run in his later career though,
            failing to add another title to his collection despite spells at
            McLaren and Ferrari. But after two years away from Formula 1 racing
            – and with two Le Mans wins in his pocket – Alonso returned with
            Alpine in 2021. His speed and determination undiminished, he was
            back on the podium that year, but frustrated by poor reliability –
            and the lack of a long-term contract – the following season, he
            opted to jump ship once more. And after eight podiums in his first
            season with Aston Martin, Alonso now hopes it will be with the team
            in green that he finally returns to winning ways, as he has
            unfinished business with F1…
          </p>
        </div>
      </main>
    </div>
  );
}
