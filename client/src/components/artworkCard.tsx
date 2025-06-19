import "./artworkCard.css";
import PictoComment from "../assets/images/pictos/picto-comment.svg";
import PictoLike from "../assets/images/pictos/picto-like.svg";
import PictoSave from "../assets/images/pictos/picto-save.svg";

function ArtworkCard() {
  return (
    <main className="sectionCard">
      <div className="divUser">
        <div className="divImgUser">
          <img
            className="imgUser"
            src="https://i.pinimg.com/originals/54/72/d1/5472d1b09d3d724228109d381d617326.jpg"
            alt=""
          />
        </div>
        <p className="textPetit">
          <span className="spanUser">User 1</span> a publié
        </p>
      </div>

      <section className="divCard">
        <div className="divImg">
          <img
            className="imgArt"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hovhannes_Aivazovsky_-_The_Ninth_Wave_-_Google_Art_Project.jpg/2560px-Hovhannes_Aivazovsky_-_The_Ninth_Wave_-_Google_Art_Project.jpg"
            alt=""
          />

          <div className="divInfoCard">
            <p className="datePost">jeu.-12:12</p>

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
            <h1 className="titreArtwork">La Neuvième Vague</h1>
            <h2 className="titreArtist">Ivan Machin - 1850</h2>
            <p className="infoArtwork">Musée Russe - ville, pays</p>
            <p className="infoArtwork">221 x 332 cm</p>
            <p className="mvtArtwork">Romantisme</p>
            <div className="saveArtwork">
              <img className="pictoSave" src={PictoSave} alt="" />
              <p className="infoArtwork">enregistrer</p>
            </div>
          </div>

          <div className="divDescArtwork">
            <p className="descArtwork">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged...
            </p>

            <p className="textPlus">EN VOIR PLUS</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ArtworkCard;
