import { Header } from "../../components/header";
import Max from "../../assets/drivers/verstappen.avif";
import NetherlandsFlag from "../../assets/country/netherlands-flag.avif";
import MaxHelmet from "../../assets/helmets/verstappen-helmet.avif";

export function MaxVerstappenPage() {
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={Max}
                alt="Max Verstappen"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">1</p>
              <img
                src={NetherlandsFlag}
                alt="Netherlands Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">Max Verstappen</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img src={MaxHelmet} alt="Max Helmet" className="w-60 p-5" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Red Bull Racing</p>
              <p className="font-bold">Country:</p>
              <p>Netherlands</p>
              <p className="font-bold">Podiums:</p>
              <p>107</p>
              <p className="font-bold">Points:</p>
              <p>2863.5</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>199</p>
              <p className="font-bold">World Championships</p>
              <p>3</p>
              <p className="font-bold">Highest race finish:</p>
              <p>1 (x61)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>1</p>
              <p className="font-bold">Date of birth:</p>
              <p>30/09/1997</p>
              <p className="font-bold">Place of birth:</p>
              <p>Hasselt, Belgium</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            He’s Max by name, and max by nature. Arriving as Formula 1’s
            youngest ever competitor at just 17 years old, Verstappen pushed his
            car, his rivals and the sport’s record books to the limit. The
            baby-faced Dutchman with the heart of a lion took the Toro Rosso –
            and then the Red Bull – by the horns with his instinctive racing
            style. F1’s youngest points scorer soon became its youngest race
            winner – at the age of 18 years and 228 days – with an opportunistic
            but controlled drive on debut for Red Bull in Barcelona 2016. A true
            wheel-to-wheel racer, another stunning drive in Brazil from the back
            of the pack to the podium on a treacherous wet track kept the
            plaudits coming. Verstappen’s no-holds-barred attitude and hard
            defending have sometimes landed him in hot water with his peers and
            paymasters. But the mistakes that initially marred his potential
            have given way to maturity, while the bravado and energy that make
            him a blockbuster talent have remained – and the victories have kept
            on coming. They led to his first F1 drivers’ crown after that now
            legendary, final-round showdown with Lewis Hamilton in 2021. He
            followed that up with a powerhouse title defence in 2022, before an
            epic third successive championship triumph, featuring a record 19
            wins from 23 Grands Prix. The son of former F1 driver Jos Verstappen
            and super-quick karting Mum Sophie Kumpen, racing runs through his
            genes. Despite moving out of Dad’s house to live in Monaco,
            Verstappen remains close to his family, and though he’s not afraid
            to speak his mind, he can still be surprisingly shy. Having become
            the Netherlands' first world champion aged just 24, the expectations
            for the new generation’s leading light are sky high – but with
            Verstappen there’s a feeling that the sky’s the limit.
          </p>
        </div>
      </main>
    </div>
  );
}
