import Alexander from "../../assets/drivers/albon.avif";
import AlexanderHelmet from "../../assets/helmets/albon-helmet.avif";
import ThailandFlag from "../../assets/country/thailand-flag.png";
import { Header } from "../../components/header";

export function AlexanderAlbonPage() {
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Alexander}
                alt="Alexander Albon"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">23</p>
              <img
                src={ThailandFlag}
                alt="Thailand Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Alexander Albon</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img
              src={AlexanderHelmet}
              alt="Alexander Helmet"
              className="w-60 p-5"
            />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Williams</p>
              <p className="font-bold">Country:</p>
              <p>Thailand</p>
              <p className="font-bold">Podiums:</p>
              <p>2</p>
              <p className="font-bold">Points:</p>
              <p>232</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>95</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>3 (x2)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>4</p>
              <p className="font-bold">Date of birth:</p>
              <p>23/03/1996</p>
              <p className="font-bold">Place of birth:</p>
              <p>London, England</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            Born in London but racing under the flag of Thailand, Alexander
            Albon’s first word was in fact Italian. That word was Ferrari –
            though it was with another Italian team that he got his big F1
            break. Idolising Michael Schumacher and dreaming of one day racing
            in Formula 1, the junior Albon was pipped to the 2016 GP3 title by a
            certain Charles Leclerc. He then left his great friendship with
            George Russell trackside as he took the 2018 Formula 2 title fight
            down to the wire. Graduating to the F1 big league along with yet
            another contemporary – Lando Norris – in 2019, Albon did his talking
            on track with Toro Rosso in the opening races, earning a mid-season
            promotion to Red Bull Racing. A stylish overtaker with a
            championship mentality, Albon was unfazed by partnering Max
            Verstappen for the second half of his rookie season, taking top-six
            finishes in eight of his nine 2019 races with Red Bull. Staying in
            touch with the future champion proved tougher in 2020 and Red Bull
            dropped him from their race line-up. Crucially, though, Albon was
            retained as test and reserve driver, keeping him very much on team
            bosses’ radar, leading to his 2022 return to the grid with Williams,
            where he has established a reputation as a fast qualifier and mature
            racer. Laidback and cheerful with a cheeky grin, the Thai driver is
            popular among his peers – not always easy in motorsport’s cauldron
            of competition – but you don’t succeed in Formula 1 by being
            popular. Albon’s challenge remains a big one – to make the most of a
            rare second F1 opportunity.
          </p>
        </div>
      </main>
    </div>
  );
}
