import ArtworkList from "../components/Artwork/artworkList";
import "./Home.css";

function Home() {
  return (
    <>
      <main>
        <section className="hautHome">
          <article className="divH1-btn">
            <h1 className="titreHome">À l'honneur (fil d'actualité)</h1>
            <p className="addBtn">Ajouter une oeuvre</p>
          </article>
        </section>

        <section className="sectionCardHome">
          <ArtworkList />
        </section>
      </main>
    </>
  );
}

export default Home;
