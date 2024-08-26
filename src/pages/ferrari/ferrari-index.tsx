import { useEffect } from "react";
import { Header } from "../../components/header";
import { FerrariDrivers } from "./ferrari-drivers";
import { FerrariProfile } from "./ferrari-profile";
import { FerrariTeam } from "./ferrari-team";

export function FerrariPage() {
  useEffect(() => {
    document.title = "Ferrari - F1 Racing Team";
  }, []);
  return (
    <div>
      <Header />

      <h1 className="text-5xl italic p-9">Ferrari</h1>

      <main className="bg-white mx-auto p-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <FerrariTeam />
          <FerrariDrivers />
        </div>

        <FerrariProfile />
      </main>
    </div>
  );
}
