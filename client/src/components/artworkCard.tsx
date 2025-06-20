// artworkCard.tsx
import "./artworkCard.css";
import { Link } from "react-router-dom";
import PictoComment from "../assets/images/pictos/picto-comment.svg";
import PictoLike from "../assets/images/pictos/picto-like.svg";
import PictoSave from "../assets/images/pictos/picto-save.svg";
import type { Artwork, Movement } from "../types/vite-env";

type ArtworkCardProps = {
  artwork: Artwork;
};

function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <>
      <main key={artwork.id} className="sectionCard">
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
                {new Date(artwork.date_post).toLocaleDateString()}
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
                  <p key={movement.id} className="mvtArtwork">
                    {movement.name}
                  </p>
                ))}
              </div>

              <div className="saveArtwork">
                <img className="pictoSave" src={PictoSave} alt="" />
                <p className="infoArtwork">enregistrer</p>
              </div>
            </div>

            <div className="divDescArtwork">
              <p className="descArtwork">{artwork.description}</p>

              <Link to={`/ProfilArtwork/${artwork.id}`} className="textPlus">
                EN VOIR PLUS
              </Link>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default ArtworkCard;
