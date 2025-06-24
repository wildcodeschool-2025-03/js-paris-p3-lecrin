import "./SeConnecter.css";
import { Link } from "react-router";

function SeConnecter() {
  return (
    <div className="connexion-page">
      <article className="login">
        <h1>Se Connecter</h1>
        <div>
          <h2>Nom d'utilisateur:</h2>
          <button type="submit" className="btn-login">
            Nom d'utilisateur...{" "}
          </button>
          <h2>Mot de passe:</h2>
          <button type="submit" className="btn-login">
            Mot de passe...{" "}
          </button>
        </div>
        <div className="seco">
          <Link className="btn-seco" to="/">
            Se Connecter{" "}
          </Link>
        </div>
      </article>
    </div>
  );
}

export default SeConnecter;
