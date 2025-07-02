import { useParams } from "react-router-dom";
import "./ProfilUser.css";
import { useEffect, useState } from "react";
import type { User } from "../types/vite-env";

function ProfilUser() {
  const { id } = useParams();

  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3310/api/users/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setUser(json);
        console.log(json);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur :", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="msgErr">L'utilisateur arrive !</p>;
  if (!user || !user.name) {
    // Protection pour éviter erreur si artwork ou user_id manquant
    return (
      <div className="msgErr">Utilisateur invalide ou données manquantes.</div>
    );
  }

  return (
    <>
      <main>
        <header className="headerProfil">
          <article className="firstDivProf">
            <div className="divImgProfil">
              <img className="imgProfil" src={user.photo} alt="" />
            </div>

            <div className="div">
              <div className="divNomBadge">
                <h1 className="nomProfil">{user.name}</h1>
                {user.admin ? <p className="badge">administrateur</p> : null}
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
      </main>
    </>
  );
}

export default ProfilUser;
