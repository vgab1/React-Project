import Car from "../../assets/cars/kick-sauber-car.avif";

export function SauberProfile() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">In profile</h2>
      <p className="text-md text-gray-700 mb-4 leading-10">
        Having enjoyed considerable success in world sportscars, where he helped
        nurture the emerging talents of future F1 stars Michael Schumacher and
        Heinz-Harald Frentzen, Peter Sauber guided his eponymous squad into F1
        in 1993. The team has since established itself as a mainstay of the
        grid, becoming race winners under BMW’s brief ownership, and developing
        a well-earned reputation not only for producing competitive cars, but
        also for developing young drivers. In recent seasons they raced under
        the Alfa Romeo name - and in 2026 will become the works Audi squad - but
        for 2024 a new title sponsor brings a new identity to the famous Swiss
        team.
      </p>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4">Kick Sauber Car</h3>
        <img src={Car} alt="McLaren Car" className="w-full max-w-screen-lg" />
      </div>
    </div>
  );
}
