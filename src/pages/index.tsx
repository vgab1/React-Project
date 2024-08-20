import { Drivers } from "../components/drivers";
import { Header } from "../components/header";
import { TeamInfo } from "../components/team-info";
import { TeamProfile } from "../components/team-profile";

export function McLarenPage() {
  return (
    <div>
      <Header />

      <h1 className="text-5xl italic p-9">McLaren</h1>

      <main className="bg-white mx-auto p-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <TeamInfo />
          <Drivers />
        </div>

        <TeamProfile />
      </main>
    </div>
  );
}
