import "./artworkCard.css";
import PictoSave from "../assets/images/pictos/picto-save.svg";
import PictoLike from "../assets/images/pictos/picto-like.svg";
import PictoComment from "../assets/images/pictos/picto-comment.svg";

function ArtworkCard() {
  return (
    <main className="sectionCard">
      <div className="divUser">
        <div className="divImgUser">
          <img className="imgUser" src="" alt="" />
        </div>
        <p className="textPetit">User 1 a publié</p>
      </div>

      <section className="divCard">
        <div className="divImg">
          <img className="imgArt" src="" alt="" />

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

            <p className="textPlus">Voir plus</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ArtworkCard;
