import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import ArtworkList from "../components/Artwork/artworkList";
import { useUser } from "../contexts/user.context";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const { user } = useUser();

  return (
    <>
      <main>
        <section className="hautHome">
          <article className="divH1-btn">
            <h1 className="titreHome">À l'honneur (fil d'actualité)</h1>
            <button
              onClick={() => {
                if (user) navigate("/postArtwork");
                else
                  toast.warning(
                    "Vous devez être connecté pour ajouter une œuvre ",
                  );
              }}
              type="button"
              className="addBtn"
            >
              Ajouter une œuvre
            </button>
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
