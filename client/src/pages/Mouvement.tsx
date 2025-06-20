import "./Mouvement.css";
import MouvementCard from "../components/MouvementCard";
import Nav from "../components/Nav";
import Searchbar from "../components/Searchbar";

function Mouvement() {
  return (
    <>
      <Nav />
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
