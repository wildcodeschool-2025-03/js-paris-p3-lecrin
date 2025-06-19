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
        <article className="descArtist">
          <div className="bio">
            <p>Le Caravage</p>
            <p className="date">1571-1610</p>
          </div>
          <div className="mvtArtistCard">
            <p>Baroque</p>
            <p>Ténébrisme</p>
          </div>
          <p className="numberArts">178 oeuvres</p>
        </article>
      </article>
    </>
  );
}

export default ArtistCard;
