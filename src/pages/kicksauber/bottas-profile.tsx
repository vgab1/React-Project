import Valtteri from "../../assets/drivers/bottas.avif";
import ValtterisHelmet from "../../assets/helmets/bottas-helmet.avif";
import FinlandFlag from "../../assets/country/finland-flag.avif";
import { Header } from "../../components/header";

export function ValtteriBottasPage() {
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Valtteri}
                alt="Valtteri Bottas"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">77</p>
              <img
                src={FinlandFlag}
                alt="Finland Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Valtteri Bottas</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img
              src={ValtterisHelmet}
              alt="Valtteri Helmet"
              className="w-60 p-5"
            />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Kick Sauber</p>
              <p className="font-bold">Country:</p>
              <p>Finland</p>
              <p className="font-bold">Podiums:</p>
              <p>67</p>
              <p className="font-bold">Points:</p>
              <p>1797</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>236</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>1 (x10)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>1</p>
              <p className="font-bold">Date of birth:</p>
              <p>28/08/1989</p>
              <p className="font-bold">Place of birth:</p>
              <p>Nastola, Finland</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            Learning his craft on Finnish roads of ice and snow, he was born to
            be a Grand Prix racer. Bottas explains that if you can drive on the
            frozen roads of his homeland then you can drive anywhere. Then
            there’s the Finnish mentality –reserved, diligent and calm the fast
            lane of F1 doesn’t faze him. Making his F1 debut with Williams in
            2013, Bottas soon became part of the family. Points and podiums
            followed with the reliable racer even amassing the most points
            without a win, a record he resented but that showcased his ability.
            The fact the Finn was such a points machine saw him suddenly
            promoted to the most coveted seat in F1 - Nico Rosberg’s vacant
            championship-winning seat at Mercedes. Bottas blossomed at the
            Silver Arrows in 2017, unleashing his pace to clock up personal pole
            positions and victories as well as a team championship for the
            famous Mercedes marque alongside Lewis Hamilton. He even tied with
            Hamilton and Sebastian Vettel with 13 podiums. For a shy guy, it
            brought a confidence boost and a new swagger – albeit in a very
            demur Finnish fashion. He would need all that confidence in 2018 – a
            season Bottas described as his worst in F1, as he took zero wins to
            Hamilton’s 11. That, though, was a reflection more of his team
            mate’s brilliance than of any shortcomings on his own part. Bottas
            stepped it up a level in 2019, four victories securing a convincing
            second in the championship behind Hamilton, but that dropped to two
            wins to his team mate's 11 in 2020 and then just one in 2021,
            prompting Mercedes to drop him after five seasons. In 2022 he
            started a new chapter in his F1 career, replacing compatriot Kimi
            Raikkonen to lead an all-new line-up at Alfa Romeo, now Kick Sauber,
            and taking Chinese rookie Zhou Guanyu under his wing.
          </p>
        </div>
      </main>
    </div>
  );
}
