import { useEffect } from "react";
import Esteban from "../../assets/drivers/ocon.avif";
import EstebanHelmet from "../../assets/helmets/ocon-helmet.avif";
import FranceFlag from "../../assets/country/france-flag.avif";
import { Header } from "../../components/header";

export function EstebanOconPage() {
  useEffect(() => {
    document.title = "Esteban Ocon - F1 Driver for Alpine";
  }, []);
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Esteban}
                alt="Esteban Ocon"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">31</p>
              <img
                src={FranceFlag}
                alt="France Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Esteban Ocon</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img
              src={EstebanHelmet}
              alt="Esteban Helmet"
              className="w-60 p-5"
            />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Alpine</p>
              <p className="font-bold">Country:</p>
              <p>France</p>
              <p className="font-bold">Podiums:</p>
              <p>3</p>
              <p className="font-bold">Points:</p>
              <p>427</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>147</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>1 (x1)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>3</p>
              <p className="font-bold">Date of birth:</p>
              <p>17/09/1996</p>
              <p className="font-bold">Place of birth:</p>
              <p>Évreux, Normandy</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            If there’s one word that dominates Esteban Ocon’s career, it’s
            ‘sacrifice’. Back when he was just a promising karter, Ocon’s
            parents sold their house, put their jobs on hold, and began a life
            on the road, living in a caravan and travelling from circuit to
            circuit to support their son’s burgeoning career. Sacrifice, see –
            but it worked. 2014 saw Ocon break through in the world of
            single-seaters, as he beat a certain Max Verstappen to the European
            F3 title. Backed by Mercedes, he won the GP3 title the following
            year and was halfway through a season of DTM in 2016 when he was
            offered the chance to replace Rio Haryanto at the minnow Manor team
            from the Belgian Grand Prix onwards. That opportunity led to a
            full-time seat the following year with Force India, where his
            wheel-to-wheel duels with highly-rated team mate Sergio Perez
            quickly marked him out as a rising star. But when Lawrence Stroll,
            father of racer Lance, stepped in midway through 2018 to secure the
            squad’s financial future, the writing was on the wall for Ocon, who
            was moved aside at the end of the year to allow Stroll Jnr to join
            from Williams. Ocon bided his time, though, and after a year on the
            sidelines as Mercedes’ reserve driver, he found his way back into a
            race seat for 2020 with Renault, who became Alpine for 2021 – when
            his wait finally paid off, as he scored his – and the famous French
            marque’s – first F1 win. Nothing in Ocon’s motorsport career has
            come easy – but if Ocon has managed to return to the F1 grid and
            step atop the podium, it’s through a combination of self-belief,
            determination and a talent that’s up there with the very best.
          </p>
        </div>
      </main>
    </div>
  );
}
