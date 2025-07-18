import { useParams } from "react-router-dom";
import "./profileArt.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PictoComment from "../assets/images/pictos/picto-comment.svg";
import PictoLike from "../assets/images/pictos/picto-like.svg";
import PictoSave from "../assets/images/pictos/picto-save.svg";
import type { Artwork, Movement } from "../types/vite-env";

function ProfileArt() {
  const { id } = useParams();

  const [artwork, setArtwork] = useState<Artwork>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3310/api/artworks/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setArtwork(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur :", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="msgErr">Le tableau arrive !</p>;
  if (!artwork || !artwork.userName) {
    // Protection pour éviter erreur si artwork ou user_id manquant
    return (
      <div className="msgErr">Artwork invalide ou données manquantes.</div>
    );
  }

  return (
    <main className="sectionCard">
      <div className="divUser">
        <div className="divImgUser">
          <img
            className="imgUser"
            src="https://i.pinimg.com/originals/54/72/d1/5472d1b09d3d724228109d381d617326.jpg"
            alt={`Avatar de l'utilisateur ${artwork.userName}`}
          />
        </div>
        <p className="textPetit">
          <span className="spanUser">{artwork.userName}</span> a publié
        </p>
      </div>

      <section className="divCard">
        <div className="divImg">
          <img className="imgArt" src={artwork.photo} alt={artwork.name} />

          <div className="divInfoCard">
            <p className="datePost">
              {new Date(artwork.date_artwork).toLocaleDateString()}
            </p>

            <div className="divLike">
              <img className="pictoLike" src={PictoLike} alt="" />
              <p className="textPicto">28</p>
            </div>

            <div className="divLike">
              <img className="pictoComment" src={PictoComment} alt="" />
              <p className="textPicto">4</p>
            </div>
          </div>
        </div>

        <article className="infoCard">
          <div className="firstDivCard">
            <h1 className="titreArtwork">{artwork.artworkName}</h1>
            <h2 className="titreArtist">
              {artwork.artistName} -{" "}
              {new Date(artwork.date_artwork).getFullYear()}
            </h2>
            {artwork.musee && artwork.ville && artwork.pays ? (
              <p className="infoArtwork">
                {artwork.musee} - {artwork.ville}, {artwork.pays}
              </p>
            ) : null}
            <p className="infoArtwork">{artwork.dimensions}</p>
            <div className="divMvt">
              {artwork.movements.map((movement: Movement) => (
                <Link key={movement.id} to={`/Mouvements/${movement.id}`}>
                  <p key={movement.id} className="mvtArtwork">
                    {movement.name}
                  </p>
                </Link>
              ))}
            </div>

            <div className="saveArtwork">
              <img className="pictoSave" src={PictoSave} alt="" />
              <p className="infoArtwork">enregistrer</p>
            </div>
          </div>

          <div className="divDescArtwork">
            <p className="descArtwork">{artwork.description}</p>
            <p className="textPlus">EN VOIR PLUS</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ProfileArt;
