import "./bisArtworkCard.css";

function BisArtworkCard() {
  return (
    <>
      <main className="cardArt">
        <div className="divUserCard">
          <div className="divImgUserCard">
            <img
              className="imgUserCard"
              src="https://i.pinimg.com/originals/54/72/d1/5472d1b09d3d724228109d381d617326.jpg"
              alt=""
            />
          </div>

          <p className="textPetitCard">
            <span className="spanUserCard">User 1</span> a publié
            <span className="heurePost"> - il y a 1h</span>
          </p>
        </div>
        <img
          className="imgCardBis"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Bard.jpg/960px-The_Bard.jpg"
          alt=""
        />
        <article className="infoCardBis">
          <p className="nameArtworkBis">Le barde</p>
          <p className="nameArtistCard">
            John Martin
            <span className="dateArtCard"> - 1817</span>
          </p>
        </article>
      </main>
    </>
  );
}

export default BisArtworkCard;
