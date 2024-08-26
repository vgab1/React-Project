import { useEffect } from "react";
import { Header } from "../components/header";
import Oscar from "../assets/drivers/piastri.avif";
import OscarHelmet from "../assets/helmets/piastri-helmet.avif";
import AustraliaFlag from "../assets/country/australia-flag.png";


export function OscarPiastriPage() {
  useEffect(() => {
    document.title = "Oscar Piastri - F1 Driver for McLaren";
  }, []);
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Oscar}
                alt="Oscar Piastri"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">81</p>
              <img
                src={AustraliaFlag}
                alt="Australia Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Oscar Piastri</h1>
          </div>

          <div className="flex flex-col md:w-1/2">
            <img src={OscarHelmet} alt="Oscar Helmet" className="w-60 p-5" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>McLaren</p>
              <p className="font-bold">Country:</p>
              <p>Australia</p>
              <p className="font-bold">Podiums:</p>
              <p>6</p>
              <p className="font-bold">Points:</p>
              <p>264</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>36</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>1 (x1)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>2</p>
              <p className="font-bold">Date of birth:</p>
              <p>06/04/2001</p>
              <p className="font-bold">Place of birth:</p>
              <p>Melbourne, Victoria</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            Born in Melbourne, just a stone’s throw away from the Australian
            Grand Prix venue, a young Oscar Piastri’s dreams of one day racing
            in Formula 1 were ignited by the sport’s star drivers roaring around
            his local streets, otherwise known as Albert Park. But it would take
            huge commitment and sacrifice to turn that dream into a reality,
            with a move to Europe – made by the likes of fellow countrymen Mark
            Webber and Daniel Ricciardo before him – the only way to go up
            against the best and catch the attention of the sport’s
            decision-makers. Using success on the Australian karting scene as a
            springboard, Piastri continued to learn the craft in championships
            across Europe, before getting his first taste of single-seater
            competition as a 15-year-old – two podium finishes in F4 UAE a sign
            of things to come. From there, success flowed. British F4 runner-up.
            Formula Renault champion. F3 champion. F2 champion (by more than 50
            points). Piastri did not simply climb the junior single-seater
            ladder, he charged up it to knock loudly on the F1 door. So
            impressive was Piastri that two F1 teams squabbled over his services
            for 2023, adding a new dimension to the driver market and so-called
            ‘silly season’. McLaren, and not long-time backers Alpine, won out
            and their rookie repaid them in spades, taking two podiums in a
            highly impressive debut campaign.
          </p>
        </div>
      </main>
    </div>
  );
}
