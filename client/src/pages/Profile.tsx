import "./Profile.css";
import { useState } from "react";
import pictoProfil from "../assets/images/pictos/picto-profil.svg";
import Favoris from "../components/Favoris";
import { useUser } from "../contexts/user.context";

function Profil() {
  const { user } = useUser();
  const [ongletActif, setOngletActif] = useState("Publications");

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
                <h1 className="nomProfil">{user?.name}</h1>
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
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <p
              className={`btnNavProf ${ongletActif === "Favoris" ? "actif" : ""}`}
              onClick={() => setOngletActif("Favoris")}
            >
              Favoris
            </p>
          </nav>
          <div className="contenuProfil">
            {ongletActif === "Publications" && (
              <p>Affichage des publications ici</p>
            )}
            {ongletActif === "Collections" && (
              <p>Affichage des collections ici</p>
            )}
            {ongletActif === "Favoris" && <Favoris />}
          </div>
        </section>
      </main>
    </>
  );
}

export default Profil;
