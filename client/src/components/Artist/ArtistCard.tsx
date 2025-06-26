import "./ArtistCard.css";
import { Link } from "react-router";
import type { Artist, Movement } from "../../types/vite-env";

type ArtistCardProps = {
  artist: Artist;
};

function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <>
      <Link className="LinkToArtistProf" to={`/artist/${artist.id}`}>
        <article className="artistCard">
          <div className="imagecard">
            <img className="portrait" src={artist.photo} alt={artist.name} />
          </div>

          <div className="infoArtist">
            <h2 className="nameArtistCard">
              {artist.artistName}
              <span className="dateArtistCard">
                {" "}
                {new Date(artist.birthday).getFullYear()} -{" "}
                {new Date(artist.death_date).getFullYear()}
              </span>
            </h2>
            <div className="divMvt">
              {artist.movements.map((movement: Movement) => (
                <p key={movement.id} className="mvtArtwork">
                  {movement.name}
                </p>
              ))}
            </div>
            <p className="nbreOeuvre">{artist.artworkCount} oeuvres</p>
          </div>
        </article>
      </Link>
    </>
  );
}

export default ArtistCard;
