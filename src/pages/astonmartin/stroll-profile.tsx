import Lance from "../../assets/drivers/stroll.avif";
import LanceHelmet from "../../assets/helmets/stroll-helmet.avif";
import CanadaFlag from "../../assets/country/canada-flag.avif";
import { Header } from "../../components/header";

export function LanceStrollPage() {
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Lance}
                alt="Lance Stroll"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">18</p>
              <img
                src={CanadaFlag}
                alt="Cananda Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Lance Stroll</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img src={LanceHelmet} alt="Lance Helmet" className="w-60 p-5" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Aston Martin</p>
              <p className="font-bold">Country:</p>
              <p>Canada</p>
              <p className="font-bold">Podiums:</p>
              <p>3</p>
              <p className="font-bold">Points:</p>
              <p>292</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>157</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>3 (x3)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>1</p>
              <p className="font-bold">Date of birth:</p>
              <p>29/10/1998</p>
              <p className="font-bold">Place of birth:</p>
              <p>Montreal, Canada</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            There is no such thing as too much too soon for Stroll, a teenage
            sensation with a wet weather predilection. One of the cool kids on
            the grid, Stroll was unveiled shortly after his 18th birthday by
            Williams – before he finished high school and got his road licence.
            Stroll meant business in his debut 2017 season, setting records on
            the way. An opportunistic racer he bounded onto the podium in Baku,
            the youngest rookie to do so. As the son of a wealthy entrepreneur,
            Stroll is used to a champagne lifestyle but now he knows the fizz
            tastes all the sweeter on the rostrum. Then in Monza he mastered the
            downpours to become the youngest driver in history to line up on the
            front row. A single-minded starter, the Canadian loves to make up
            places on the opening lap and fight through to the points. Stroll
            has the potential to be a long-term fixture in Formula 1 – as amply
            illustrated by a maiden pole and another two podiums in 2020. Those
            came after his father Lawrence led the consortium that took over
            Force India midway through the 2018 season, and then transformed it
            from Racing Point to Aston Martin for 2021. The future looks bright
            for both the team and their young driver – and even if it rains then
            Stroll can keep on motoring at the sharp end of the pack.
          </p>
        </div>
      </main>
    </div>
  );
}
