import "./Home.css";
import "../components/artworkCard";
import ArtworkCard from "../components/artworkCard";

function Home() {
  return (
    <>
      <main>
        <article className="divH1-btn">
          <h1 className="titreHome">À l'honneur (fil d'actualité)</h1>
          <div className="btnAddPost">
            <p className="textHome">Ajouter une oeuvre</p>
          </div>
        </article>

        <section className="sectionCardHome">
          <ArtworkCard />
        </section>
      </main>
    </>
  );
}

export default Home;
