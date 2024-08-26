import { useEffect } from "react";
import { Header } from "../../components/header";
import George from "../../assets/drivers/russell.avif";
import UKFlag from "../../assets/country/united-kingdom-flag.avif";
import RussellHelmet from "../../assets/helmets/russell-helmet.avif";

export function GeorgeRussellPage() {
  useEffect(() => {
    document.title = "George Russell - F1 Driver for Mercedes";
  }, []);
  return (
    <div>
      <Header />

      <main className="bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full h-96 overflow-hidden">
              <img
                src={George}
                alt="George Russell"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <p className="text-zinc-500 text-5xl font-bold font-mono">63</p>
              <img
                src={UKFlag}
                alt="United Kingdom Flag"
                className="w-14 border border-gray-400 rounded-md"
              />
            </div>
            <h1 className="text-5xl font-bold mt-2">George Russell</h1>
          </div>
          <div className="flex flex-col md:w-1/2">
            <img src={RussellHelmet} alt="Max Helmet" className="w-60 p-5" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
              <p className="font-bold">Team:</p>
              <p>Mercedes</p>
              <p className="font-bold">Country:</p>
              <p>United Kingdom</p>
              <p className="font-bold">Podiums:</p>
              <p>13</p>
              <p className="font-bold">Points:</p>
              <p>585</p>
              <p className="font-bold">Grands Prix entered:</p>
              <p>118</p>
              <p className="font-bold">World Championships</p>
              <p>0</p>
              <p className="font-bold">Highest race finish:</p>
              <p>1 (x2)</p>
              <p className="font-bold">Highest grid position:</p>
              <p>1</p>
              <p className="font-bold">Date of birth:</p>
              <p>15/02/1998</p>
              <p className="font-bold">Place of birth:</p>
              <p>King's Lynn, England</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-10">
          <h2 className="text-3xl font-bold">Biography</h2>
          <p className="mt-4 text-lg leading-10">
            He’s the driver with the motto: “If in doubt, go flat out”. George
            Russell has lived by it throughout his F1 career to date,
            out-qualifying seasoned team mate Robert Kubica at all 21 Grands
            Prix in his rookie season, putting Williams back on the podium in
            2021, and landing his first race win with Mercedes in 2022. That
            brilliant baseline speed served Russell well as he totted up titles
            on his way to Formula 1. The Briton stormed to the 2017 GP3
            championship and delivered the 2018 Formula 2 crown under immense
            pressure. Spotting his potential, world champions Mercedes swooped
            to sign him to their junior programme in 2017, when Russell already
            had a DTM deal on the table. He banked more experience with practice
            sessions with Force India and tests for the Silver Arrows, before
            landing his Mercedes-powered Williams race drive. A refusal to cede
            ground to his rivals - and commitment to a tricky pass – underpins
            Russell’s winning mentality. And it’s what got him the call-up to
            replace Lewis Hamilton for a one-off Mercedes appearance for Sakhir
            2020 when the reigning champ was struck down by Covid-19. That star
            turn saw Russell miss out on pole by just 0.026s and then outrace
            Mercedes stalwart Valtteri Bottas. Only a bungled pit stop and a
            heart-breaking late puncture prevented a near-certain maiden win for
            the up-and-coming super-sub. He kept his head down at Williams in
            2021, scoring his first points and podium, all the while keeping his
            eye on the bigger prize. Having proved himself a hard worker and a
            tenacious talent, that prize arrived in the form of a chance to take
            on compatriot and seven-time champion Hamilton in identical
            machinery. It was an opportunity Russell has relished, and he took
            his first F1 win – and Mercedes’ only 2022 victory – in Brazil. The
            2023 season proved tougher, but if the Silver Arrows can bounce back
            and provide a truly competitive car, a title bid surely beckons. A
            huge challenge, but as always, ‘Russell the Rocket’ will be going
            flat out.
          </p>
        </div>
      </main>
    </div>
  );
}
