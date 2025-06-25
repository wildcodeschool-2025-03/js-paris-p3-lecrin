import Searchbar from "../components/Searchbar/Searchbar";
import MouvementList from "../components/MouvementList";
import Searchbar from "../components/Searchbar";
import "./Mouvement.css";

function Mouvement() {
  return (
    <>
      <Searchbar />
      <article className="mouvement">
        <main className="sectionMouvementCard">
          <MouvementList />
        </main>
      </article>
    </>
  );
}

export default Mouvement;
