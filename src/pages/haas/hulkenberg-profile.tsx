import Nico from "../../assets/drivers/hulkenberg.avif";
import NicoHelmet from "../../assets/helmets/hulkenberg-helmet.avif";
import GermanyFlag from "../../assets/country/germany-flag.avif";
import { Header } from "../../components/header";

export function NicoHulkenbergPage() {
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Nico}
                alt="Nico Hulkenberg"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">27</p>
              <img
                src={GermanyFlag}
                alt="Germany Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Nico Hulkenberg</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img src={NicoHelmet} alt="Nico Helmet" className="w-60 p-5" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Haas</p>
              <p className="font-bold">Country:</p>
              <p>Germany</p>
              <p className="font-bold">Podiums:</p>
              <p>0</p>
              <p className="font-bold">Points:</p>
              <p>552</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>220</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>4 (x3)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>1</p>
              <p className="font-bold">Date of birth:</p>
              <p>19/08/1987</p>
              <p className="font-bold">Place of birth:</p>
              <p>Emmerich am Rhein, Germany</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            He’s the Superhero with the talent to become a racing superstar – if
            only he could get to flex his muscles with a top team. F1’s 'Hulk'
            has shown incredible strength and stamina as a midfield marauder for
            Williams, Force India, Sauber, Renault, Racing Point, Aston Martin
            and Haas during a career spanning back to 2010. In that rookie
            season, Hulkenberg mastered changing track conditions to take a
            brilliant pole position in Brazil, showing he had brains as well as
            brawn. Since then his ability to consistently hoover up the points
            has made him a highly valued team player. In 2015, his reputation
            grew once more when, on a weekend away from his day job, he won the
            classic Le Mans 24 Hours race for Porsche at the first time of
            asking. Hulkenberg’s off-track alter ego is down to earth – he’s the
            sort of driver who holds his own umbrella when it’s raining on the
            way to the grid – with a cheeky sense of humour. When he reached the
            unwanted record of most race starts without a podium finish he
            laughed it off as the start of the 'Hulkenberg era'. Thankfully,
            even after being dropped by Renault at the end of 2019, the popular
            German’s era continued with some stand-in (and stand-out) drives in
            2020 and 2022, and after landing a full-time F1 return with Haas,
            the ‘Hulk’ has embraced another chance to set the record straight.
          </p>
        </div>
      </main>
    </div>
  );
}
