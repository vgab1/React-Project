import { Header } from "../../components/header";
import { AlpineDrivers } from "./alpine-drivers";
import { AlpineProfile } from "./alpine-profile";
import { AlpineTeam } from "./alpine-team";

export function AlpinePage() {
  return (
    <div>
      <Header />

      <h1 className="text-5xl italic p-9">Alpine</h1>

      <main className="bg-white mx-auto p-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <AlpineTeam />
          <AlpineDrivers />
        </div>

        <AlpineProfile />
      </main>
    </div>
  );
}
