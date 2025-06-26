import "./Profile.css";
import pictoProfil from "../assets/images/pictos/picto-profil.svg";
import ListBisArtworkCard from "../components/Artwork/ListBisArtwork";

function Profil() {
  return (
    <>
      <main>
        <header className="headerProfil">
          <article className="firstDivProf">
            <div className="divImgProfil">
              <img className="imgProfil" src={pictoProfil} alt="" />
            </div>

            <div className="div">
              <div className="divNomBadge">
                <h1 className="nomProfil">Omaya</h1>
                <p className="badge">administrateur</p>
              </div>

              <p className="editBtn">Éditer le Profil</p>
            </div>
          </article>

          <article className="divAbonne">
            <div>
              <p>14</p>
              <p className="greyProfil">collections</p>
            </div>
            <div>
              <p>12</p>
              <p className="greyProfil">abonnés</p>
            </div>
            <div>
              <p>25</p>
              <p className="greyProfil">abonnements</p>
            </div>
          </article>
        </header>
        <section className="sectionProfil">
          <nav className="navProfil">
            <p className="btnNavProf">Publications</p>
            <p className="btnNavProf">Collections</p>
            <p className="btnNavProf">Favoris</p>
          </nav>
        </section>

        <ListBisArtworkCard />
      </main>
    </>
  );
}

export default Profil;
