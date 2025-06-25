import "./ArtistCard.css";
import type { Artist } from "../../types/vite-env";

type ArtistCardProps = {
  artist: Artist;
};

function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <>
      <article className="artistCard">
        <div className="imagecard">
          <img
            className="portrait"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bild-Ottavio_Leoni%2C_Caravaggio.jpg/500px-Bild-Ottavio_Leoni%2C_Caravaggio.jpg"
            alt={artist.name}
          />
        </div>

        <div className="infoArtist">
          <h2 className="nameArtistCard">
            {artist.name}
            <span className="dateArtistCard">
              {" "}
              {artist.birthday} - {artist.death_date}
            </span>
          </h2>
          {/* <div className="mvtArtistCard"> */}
          {/* {artist.movement.map((movement: Movement) => ( */}
          {/* <p key={movement.id} className="mvtArtist"> */}
          {/* {movement.name} */}
          {/* </p> */}
          {/* ))} */}
          {/* </div> */}
          <p className="nbreOeuvre">178 oeuvres</p>
        </div>
      </article>
    </>
  );
}

export default ArtistCard;
