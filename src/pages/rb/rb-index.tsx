import { Header } from "../../components/header";
import { RbDrivers } from "./rb-drivers";
import { RbProfile } from "./rb-profile";
import { RbTeam } from "./rb-team";

export function RbPage() {
  return (
    <div>
      <Header />

      <h1 className="text-5xl italic p-9">RB</h1>

      <main className="bg-white mx-auto p-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <RbTeam />
          <RbDrivers />
        </div>

        <RbProfile />
      </main>
    </div>
  );
}
