import { Link } from "react-router-dom";
import "./Connexion.css"; // n'oublie pas ça

function Connexion() {
  return (
    <div className="welcome-page">
      <article className="connexion">
        <h1>Bienvenue sur L'Écrin</h1>
        <div>
          <h2>Tu as déjà un compte:</h2>
          <button type="submit" className="btn-connexion">
            Se connecter
          </button>
          <h2>Tu n’as pas encore de compte:</h2>
          <button type="submit" className="btn-connexion">
            Créer un compte
          </button>
        </div>
        <Link className="link-home" to="/">
          Continuer sans compte
        </Link>
      </article>
    </div>
  );
}

export default Connexion;
