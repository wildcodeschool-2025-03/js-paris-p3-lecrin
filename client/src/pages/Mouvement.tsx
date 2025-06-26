import MouvementList from "../components/MouvementList";
import "./Mouvement.css";

function Mouvement() {
  return (
    <>
      <article className="mouvement">
        <main className="sectionMouvementCard">
          <MouvementList />
        </main>
      </article>
    </>
  );
}

export default Mouvement;
