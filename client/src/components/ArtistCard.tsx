import "./ArtistCard.css";

function ArtistCard() {
  return (
    <>
      <article className="artistCard">
        <div className="imagecard">
          <img
            className="portrait"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bild-Ottavio_Leoni%2C_Caravaggio.jpg/500px-Bild-Ottavio_Leoni%2C_Caravaggio.jpg"
            alt="artiste"
          />
        </div>

        <div className="infoArtist">
          <h2 className="nameArtistCard">
            Caravage
            <span className="dateArtistCard"> Birth - Death</span>
          </h2>
          <p className="mvtArtwork">movement</p>
          <p className="nbreOeuvre">178 oeuvres</p>
        </div>
      </article>
    </>
  );
}

export default ArtistCard;
