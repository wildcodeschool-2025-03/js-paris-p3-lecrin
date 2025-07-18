import "./bisArtworkCard.css";
import { Link } from "react-router";
import PictoLike from "../../assets/images/pictos/picto-like.svg";
import type { Artwork } from "../../types/vite-env";

type ArtworkCardProps = {
  artwork: Artwork;
  artist: string;
};

function BisArtworkCard({ artwork, artist }: ArtworkCardProps) {
  return (
    <>
      <Link to={`/ProfilArtwork/${artwork.id}`}>
        <main key={artwork.id} className="cardArt">
          <div className="divUserCard">
            <div className="divImgUserCard">
              <img
                className="imgUserCard"
                src={artwork.userPhoto}
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
              <p className="nameArtworkBis">{artwork.name}</p>
              <p className="nameArtistCard">
                {artist}
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
