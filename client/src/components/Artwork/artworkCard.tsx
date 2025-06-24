// artworkCard.tsx
import { Link } from "react-router-dom";
import type { Artist, Artwork, Movement } from "../../types/vite-env";
import PictoComment from "../assets/images/pictos/picto-comment.svg";
import PictoLike from "../assets/images/pictos/picto-like.svg";
import PictoSave from "../assets/images/pictos/picto-save.svg";
import "./artworkCard.css";

type ArtworkCardProps = {
  artwork: Artwork;
  artist: Artist;
  movement: Movement;
};

function ArtworkCard({ artwork, artist, movement }: ArtworkCardProps) {
  // Protection pour éviter erreur si artwork ou user_id manquant
  if (!artwork || !artwork.user_id) {
    return <div>Artwork invalide ou données manquantes.</div>;
  }

  return (
    <main className="sectionCard">
      <div className="divUser">
        <div className="divImgUser">
          <img
            className="imgUser"
            src="https://i.pinimg.com/originals/54/72/d1/5472d1b09d3d724228109d381d617326.jpg"
            alt={`Avatar de l'utilisateur ${artwork.user_id}`}
          />
        </div>
        <p className="textPetit">
          <span className="spanUser">User {artwork.user_id}</span> a publié
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
            <h1 className="titreArtwork">{artwork.name}</h1>
            <h2 className="titreArtist">
              {artist.name} - {new Date(artwork.date_artwork).getFullYear()}
            </h2>
            <p className="infoArtwork">{artwork.place}</p>
            <p className="infoArtwork">221 x 332 cm</p>
            <p className="mvtArtwork">{movement.name}</p>
            <div className="saveArtwork">
              <img className="pictoSave" src={PictoSave} alt="" />
              <p className="infoArtwork">enregistrer</p>
            </div>
          </div>

          <div className="divDescArtwork">
            <p className="descArtwork">{artwork.description}</p>

            <Link to="/ProfilArtwork/:id" className="textPlus">
              EN VOIR PLUS
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ArtworkCard;
