import { useParams } from "react-router-dom";
import "./ProfilArtist.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListArtistBisArtworkCard from "../components/Artwork/ListBisArtwork";
import type { Artist, Movement } from "../types/vite-env";

function ProfilArtist() {
  const { id } = useParams();
  const [artist, setArtist] = useState<Artist>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3310/api/artists/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setArtist(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur :", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>L'artiste arrive !</p>;
  if (!artist) {
    // Protection pour éviter erreur si artwork ou user_id manquant
    return <div>Artiste invalide ou données manquantes.</div>;
  }
  return (
    <>
      <main className="sectionCard">
        <section className="divCard">
          <div className="divImageProfil">
            <img
              className="imgProfilArtist"
              src={artist.photo}
              alt={artist.name}
            />
          </div>

          <article className="infoCard">
            <div className="firstDivCard">
              <h1 className="titreArtwork">{artist.name}</h1>
              <h2 className="titreArtist">
                {new Date(artist.birthday).getFullYear()} -{" "}
                {new Date(artist.death_date).getFullYear()}
              </h2>

              <p className="titreArtist">{artist.pays}</p>

              <div className="divMvt">
                {artist.movements.map((movement: Movement) => (
                  <Link key={movement.id} to={`/Mouvements/${movement.id}`}>
                    <p key={movement.id} className="mvtArtwork">
                      {movement.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="divDescArtwork">
              <p className="descArtwork">{artist.description}</p>
              <p className="textPlus">EN VOIR PLUS</p>
            </div>
          </article>
        </section>
        <section className="ProfilArtistCardList">
          <h1 className="oeuvresAssociées">Oeuvres Associées</h1>
          <ListArtistBisArtworkCard artworks={artist.artworks} />
        </section>
      </main>
    </>
  );
}

export default ProfilArtist;
