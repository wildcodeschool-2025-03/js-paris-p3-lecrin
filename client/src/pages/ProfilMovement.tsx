import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Movement } from "../types/vite-env";
import "./ProfilMovement.css";

function ProfilMovement() {
  const { id } = useParams();

  const [movement, setMovement] = useState<Movement>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3310/api/movements/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setMovement(json);
        console.log(json);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur :", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="msgErr">L'artiste arrive !</p>;
  if (!movement) {
    // Protection pour éviter erreur si artwork ou user_id manquant
    return (
      <div className="msgErr">Artiste invalide ou données manquantes.</div>
    );
  }
  return (
    <>
      <main className="sectionCard">
        <section className="divCard">
          <div className="divImageProfil">
            <img
              className="imgProfilArtist"
              src={movement.photo}
              alt={movement.name}
            />
          </div>

          <article className="infoCard">
            <h1 className="titreArtwork">{movement.name}</h1>

            <div className="divDescArtwork">
              <p className="descArtwork">{movement.description}</p>
              <p className="textPlus">EN VOIR PLUS</p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default ProfilMovement;
