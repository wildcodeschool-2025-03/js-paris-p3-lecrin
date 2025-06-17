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
        <p>Le Caravage</p>
        <p>Baroque</p>
        <p>178 oeuvres</p>
      </article>
    </>
  );
}

export default ArtistCard;
