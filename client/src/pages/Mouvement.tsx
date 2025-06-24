import MouvementCard from "../components/MouvementCard";
import Searchbar from "../components/Searchbar";
import "./Mouvement.css";

function Mouvement() {
  return (
    <>
      <Searchbar />
      <article className="mouvement">
        <main className="sectionMouvementCard">
          <MouvementCard />
          <MouvementCard />
          <MouvementCard />
          <MouvementCard />
        </main>
      </article>
    </>
  );
}

export default Mouvement;
