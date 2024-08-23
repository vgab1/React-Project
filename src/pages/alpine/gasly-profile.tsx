import Pierre from "../../assets/drivers/gasly.avif";
import PierreHelmet from "../../assets/helmets/gasly-helmet.avif";
import FranceFlag from "../../assets/country/france-flag.avif";
import { Header } from "../../components/header";

export function PierreGaslyPage() {
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Pierre}
                alt="Pierre Gasly"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">10</p>
              <img
                src={FranceFlag}
                alt="France Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Pierre Gasly</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img
              src={PierreHelmet}
              alt="Pierre Helmet"
              className="w-60 p-5"
            />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Alpine</p>
              <p className="font-bold">Country:</p>
              <p>France</p>
              <p className="font-bold">Podiums:</p>
              <p>4</p>
              <p className="font-bold">Points:</p>
              <p>400</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>144</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>1 (x1)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>2</p>
              <p className="font-bold">Date of birth:</p>
              <p>07/02/1996</p>
              <p className="font-bold">Place of birth:</p>
              <p>Rouen, France</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            If there’s one man who knows how big a rollercoaster ride an F1
            driver’s career can be, it’s Pierre Gasly! The flying Frenchman was
            called up to make his 2017 debut in Malaysia in place of Daniil
            Kvyat and, after proving his mettle, he was named a Toro Rosso
            driver the following year. A further 21 races into his fledgling
            career, Gasly was moved up again – this time to replace Red Bull big
            gun Daniel Ricciardo. Gasly seemed to have a knack of being in the
            right place at the right time – a quality that’s equally handy on
            track. A series of impressive 2018 performances for Toro Rosso –
            including a brilliant fourth place in Bahrain – showed exciting
            promise for what he might do with the ‘A’ team in 2019.
            Unfortunately that promise only appeared in flashes – and he quickly
            suffered from unfavourable comparisons with superstar team mate Max
            Verstappen. So much so that after the summer break, he was sent back
            to Toro Rosso, with another young up-and-comer – Alex Albon – being
            given a shot in the ‘senior’ Red Bull seat. But Gasly bounced back,
            as only Gasly can. In the season’s remaining nine races he scored
            almost as many points as team mate Kvyat managed over the entire
            year – and secured his best-ever race result with P2 in Brazil. That
            trajectory continued in 2020, peaking with an emotional maiden win
            at the renamed AlphaTauri team’s home race in Italy, and didn’t let
            up in 2021 when he was back on the podium and scored 110 of the
            squad’s 142 points. When AlphaTauri’s momentum stalled in 2022,
            Gasly decided it was time for a change – in the form of French team
            Alpine, with fellow Frenchman – and old adversary – Esteban Ocon as
            team mate. The question now is can he regain momentum and get
            himself another shot at the F1 bigtime…
          </p>
        </div>
      </main>
    </div>
  );
}
