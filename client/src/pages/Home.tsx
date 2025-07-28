import ArtworkList from "../components/Artwork/artworkList";
import "./Home.css";
import { useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import { useUser } from "../contexts/user.context";

function Home() {
  // const context = useContext(UserContext);
  const navigate = useNavigate();
  // const { user } = useUser();

  return (
    <>
      <main>
        <section className="hautHome">
          <article className="divH1-btn">
            <h1 className="titreHome">À l'honneur (fil d'actualité)</h1>
            <button
              onClick={() => {
                navigate("/postArtwork");
                // if (user) navigate("/postArtwork")
                // else toast.warning("Tu dois être connecté pour poster une anecdote !");
              }}
              type="button"
              className="addBtn"
            >
              Ajouter une oeuvre
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
