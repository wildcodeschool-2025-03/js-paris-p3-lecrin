import "./bisArtworkCard.css";
import { Link } from "react-router";
import PictoLike from "../../assets/images/pictos/picto-like.svg";
import type { Artwork } from "../../types/vite-env";

type ArtworkCardProps = {
  artwork: Artwork;
};

function BisArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <>
      <Link to={`/ProfilArtwork/${artwork.id}`}>
        <main key={artwork.id} className="cardArt">
          <div className="divUserCard">
            <div className="divImgUserCard">
              <img
                className="imgUserCard"
                src="https://i.pinimg.com/originals/54/72/d1/5472d1b09d3d724228109d381d617326.jpg"
                alt={`Avatar de l'utilisateur ${artwork.userName}`}
              />
            </div>

            <p className="textPetitCard">
              <span className="spanUserCard">{artwork.userName}</span> a publié
              <span className="heurePost">
                {new Date(artwork.date_post).toLocaleDateString()}
              </span>
            </p>
          </div>
          <img
            className="imgCardBis"
            src={artwork.photo}
            alt={artwork.artworkName}
          />
          <article className="infoCardBis">
            <div>
              <p className="nameArtworkBis">{artwork.artworkName}</p>
              <p className="nameArtistCard">
                {artwork.artistName}
                <span className="dateArtCard">
                  {" "}
                  - {new Date(artwork.date_artwork).getFullYear()}
                </span>
              </p>
            </div>
            <img src={PictoLike} alt="pictolike" />
          </article>
        </main>
      </Link>
    </>
  );
}

export default BisArtworkCard;
