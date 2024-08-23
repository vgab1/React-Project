import Logan from "../../assets/drivers/sargeant.avif";
import LoganHelmet from "../../assets/helmets/sargeant-helmet.avif";
import USFlag from "../../assets/country/united-states-flag.avif";
import { Header } from "../../components/header";

export function LoganSargeantPage() {
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Logan}
                alt="Logan Sargeant"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">2</p>
              <img
                src={USFlag}
                alt="United States Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Logan Sargeant</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img src={LoganHelmet} alt="Logan Helmet" className="w-60 p-5" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Williams</p>
              <p className="font-bold">Country:</p>
              <p>United States</p>
              <p className="font-bold">Podiums:</p>
              <p>0</p>
              <p className="font-bold">Points:</p>
              <p>1</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>35</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>10 (x1)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>6</p>
              <p className="font-bold">Date of birth:</p>
              <p>31/12/2000</p>
              <p className="font-bold">Place of birth:</p>
              <p>Fort Lauderdale, Florida</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            Logan Sargeant became F1’s first American driver in almost eight
            years as he took to the grid for the 2023 season, giving the country
            a home favourite to cheer once more. A prolific title winner in
            karting, championship glory eluded Sargeant after he made the
            transition to single-seater racing, but pole positions and race
            victories in almost every category he contested underlined his raw
            speed and potential. Indeed, finishing runner-up in F4 UAE, third in
            British F4 and third in F3 (having also made the podium at the
            prestigious Macau Grand Prix) showed he could be there or
            thereabouts in a variety of championships, with plenty of potential
            still to be untapped. It also convinced Williams to add the
            youngster to their books as he reached F2, where more race wins and
            another top-three classification in 2022 secured the Super Licence
            points required to complete the journey and graduate to F1 with the
            Grove team for 2023. Not since Alexander Rossi’s quintet of
            appearances with backmarkers Manor at the tail-end of the 2015
            season had an American graced the F1 grid, and Sargeant relished
            changing that across his first season, even if on paper a solitary
            point was his only reward. And with three races in the US now on the
            Formula 1 calendar – Miami, Austin and Las Vegas – America’s latest
            F1 star knows he will be spurred on by plenty of home support.
          </p>
        </div>
      </main>
    </div>
  );
}
