import { useEffect } from "react";
import { Header } from "../../components/header";
import { RedBullDrivers } from "./redbull-drivers";
import { RedBullProfile } from "./redbull-profile";
import { RedBullTeam } from "./redbull-team";

export function RedBullPage() {
  useEffect(() => {
    document.title = "Red Bull - F1 Racing Team";
  }, []);
  return (
    <div>
      <Header />

      <h1 className="text-5xl italic p-9">Red Bull Racing</h1>

      <main className="bg-white mx-auto p-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <RedBullTeam />
          <RedBullDrivers />
        </div>
        <RedBullProfile />
      </main>
    </div>
  );
}
