import { useEffect } from "react";
import Franco from "../../assets/drivers/colapinto.avif";
import FrancoHelmet from "../../assets/helmets/colapinto-helmet.png";
import ArgentinaFlag from "../../assets/country/argentina-flag.avif";
import { Header } from "../../components/header";

export function FrancoColapintoPage() {
  useEffect(() => {
    document.title = "Franco Colapinto - F1 Driver for Williams";
  }, []);
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Franco}
                alt="Franco Colapinto"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">43</p>
              <img
                src={ArgentinaFlag}
                alt="Argentina Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Franco Colapinto</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img src={FrancoHelmet} alt="Colapinto Helmet" className="w-60 p-5" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Williams</p>
              <p className="font-bold">Country:</p>
              <p>Argentina</p>
              <p className="font-bold">Podiums:</p>
              <p>0</p>
              <p className="font-bold">Points:</p>
              <p>4</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>2</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>8 (x1)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>8</p>
              <p className="font-bold">Date of birth:</p>
              <p>27/05/2003</p>
              <p className="font-bold">Place of birth:</p>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            At the end of August, Williams announced that their academy driver
            and F2 racer Franco Colapinto will contest the remainder of the 2024
            season with the squad, replacing Logan Sargeant as Alex Albon’s team
            mate from the Italian Grand Prix. Colapinto joined the Williams
            Racing Driver Academy in early 2023 and made his FP1 debut with the
            F1 team at this year’s British Grand Prix – giving him an initial
            taste of the FW46. A race winner in an array of categories on the
            junior single-seater scene, the 21-year-old had been contesting his
            second season in the F2 feeder championship, holding sixth in the
            2024 standings with a race win and two second-place finishes to his
            name. He is the first Argentine driver in F1 for 23 years, after
            Gaston Mazzacane’s last appearances for Prost back in 2001, and only
            the second Argentine to drive for Williams, following on from his
            countryman Carlos Reutemann.
          </p>
        </div>
      </main>
    </div>
  );
}
