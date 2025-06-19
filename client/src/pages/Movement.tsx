import "../components/Searchbar";
import Searchbar from "../components/Searchbar";
import MovementCard from "../components/movementCard";

function Movement() {
  return (
    <>
      <main>
        <section className="Recherche">
          <Searchbar />
        </section>
        <section className="movementCard">
          <MovementCard />
        </section>
      </main>
    </>
  );
}

export default Movement;
