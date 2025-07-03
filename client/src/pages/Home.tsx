// import { useContext } from "react";
import ArtworkList from "../components/Artwork/artworkList";
// import { UserContext } from "../contexts/user.context";
import "./Home.css";

function Home() {
  // const context = useContext(UserContext);
  return (
    <>
      <main>
        <section className="hautHome">
          <article className="divH1-btn">
            {/* <h3 className="bjr">Bonjour {context?.user?.name}</h3> */}
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
