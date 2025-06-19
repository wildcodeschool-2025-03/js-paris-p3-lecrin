import "./Home.css";
import "../components/artworkCard";
import Searchbar from "../components/Searchbar";
import ArtworkCard from "../components/artworkCard";

function Home() {
  return (
    <>
      <main>
        <section className="hautHome">
          <Searchbar />
          <article className="divH1-btn">
            <h1 className="titreHome">À l'honneur (fil d'actualité)</h1>
            <p className="addBtn">Ajouter une oeuvre</p>
          </article>
        </section>

        <section className="sectionCardHome">
          <ArtworkCard />
        </section>
      </main>
    </>
  );
}

export default Home;
