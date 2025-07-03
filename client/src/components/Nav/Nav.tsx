import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="logo">
          <h1>L'Écrin</h1>
          <h2>GALERIE D'ART</h2>
        </Link>
        <div className="navigation">
          <Link to="/Artist">Artistes</Link>
          <Link to="/Mouvements">Mouvements</Link>
          <Link to="/Profil">Profil</Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
