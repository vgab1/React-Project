import { useEffect } from "react";
import Daniel from "../../assets/drivers/ricciardo.avif";
import DanielHelmet from "../../assets/helmets/ricciardo-helmet.avif";
import AustraliaFlag from "../../assets/country/australia-flag.png";
import { Header } from "../../components/header";

export function DanielRicciardoPage() {
  useEffect(() => {
    document.title = "Daniel Ricciardo - F1 Driver for RB";
  }, []);
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Daniel}
                alt="Daniel Ricciardo"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">3</p>
              <img
                src={AustraliaFlag}
                alt="Australia Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Daniel Ricciardo</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img src={DanielHelmet} alt="Daniel Helmet" className="w-60 p-5" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>RB</p>
              <p className="font-bold">Country:</p>
              <p>Australia</p>
              <p className="font-bold">Podiums:</p>
              <p>32</p>
              <p className="font-bold">Points:</p>
              <p>1329</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>253</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>1 (x8)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>1</p>
              <p className="font-bold">Date of birth:</p>
              <p>01/07/1989</p>
              <p className="font-bold">Place of birth:</p>
              <p>Perth, Australia</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            The self-styled “Honey Badger” is fuzzy on the outside and feisty on
            the inside. Drivers beware because behind Ricciardo’s laidback
            persona and big grin is a razor-sharp racer with a bite. The
            Australian combines all-out speed with impressive race craft. Never
            afraid to push to the limits if it means pulling off a pass,
            Ricciardo is a proven race-winner, capable of consistently finishing
            at the business end of the championship table given the right
            machinery. A regular podium-finisher in his days with Red Bull,
            Ricciardo has christened the steps around the world with a dousing
            of Aussie culture – the ‘Shoey’ – as he quaffed champagne from a
            soggy racing boot. Yes it’s goofy, but the trademark celebration
            illustrates why he is loved for his sense of humour but never
            underestimated on track. His career’s next moves to Renault’s works
            team in 2019 and then McLaren for 2021 brought fresh challenges for
            the Perth pilot, but failed to deliver his dream of following Jack
            Brabham and Alan Jones as the next world champion from Down Under –
            and left him off the grid for the start of 2023. But he soon found a
            way back, rejoining Red Bull in a third driver role and impressing
            sufficiently to land a race seat with sister squad AlphaTauri, now
            RB, from mid-season. The comeback was initially short-lived – a
            broken hand from a practice crash ruled him out of five Grands Prix
            – but when he did return, the old speed was there. A future slot as
            Max Verstappen’s team mate will now be in his sights, but whatever
            happens next Ricciardo is sure to keep on smiling.
          </p>
        </div>
      </main>
    </div>
  );
}
