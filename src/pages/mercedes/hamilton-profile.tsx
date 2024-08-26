import { useEffect } from "react";
import { Header } from "../../components/header";
import Lewis from "../../assets/drivers/hamilton.avif";
import UKFlag from "../../assets/country/united-kingdom-flag.avif";
import LewisHelmet from "../../assets/helmets/hamilton-helmet.avif";

export function LewisHamiltonPage() {
  useEffect(() => {
    document.title = "Lewis Hamilton - F1 Driver for Mercedes";
  }, []);
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Lewis}
                alt="Lewis Hamilton"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">44</p>
              <img
                src={UKFlag}
                alt="United Kingdom Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Lewis Hamilton</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img src={LewisHelmet} alt="Lewis Helmet" className="w-60 p-5" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Mercedes</p>
              <p className="font-bold">Country:</p>
              <p>United Kingdom</p>
              <p className="font-bold">Podiums:</p>
              <p>201</p>
              <p className="font-bold">Points:</p>
              <p>4789.5</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>346</p>
              <p className="font-bold">World Championships</p>
              <p>7</p>
              <p className="font-bold">Highest race finish:</p>
              <p>1 (x105)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>1</p>
              <p className="font-bold">Date of birth:</p>
              <p>07/01/1985</p>
              <p className="font-bold">Place of birth:</p>
              <p>Stevenage, England</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            ‘Still I Rise’ – these are the words emblazoned across the back of
            Lewis Hamilton’s helmet and tattooed across his shoulders, and ever
            since annihilating expectations with one of the greatest rookie
            performances in F1 history in 2007, that’s literally all he’s done:
            risen to the top of the all-time pole positions list ahead of his
            hero Ayrton Senna, surged into first place in the wins column
            surpassing the inimitable Michael Schumacher, and then matched the
            legendary German’s seven world titles. Is he the G.O.A.T? Few would
            deny that he’s in the conversation – and what’s more he’s got there
            his way, twinning his relentless speed with a refusal to conform to
            stereotypes for how a racing driver should think, dress or behave.
            Respect is hard earned in F1, but Hamilton – Sir Lewis Hamilton to
            be precise – has it from every one of his peers. Why? Because they
            know that whatever the track, whatever the conditions, whatever the
            situation, when his visor goes down and the lights go out, it’s
            Hammertime.
          </p>
        </div>
      </main>
    </div>
  );
}
