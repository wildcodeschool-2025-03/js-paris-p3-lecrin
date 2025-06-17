import "./Nav.css"
import { Link } from "react-router-dom";


function Nav () {

    
    return (
        <>
        <div className="logo">
        <h1>L'ECRIN</h1>
        <h2>GALERIE D'ART</h2>
        </div>
        <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/Accueil">Accueil</Link>
        <Link to="/Artist">Artistes</Link>
        <Link to="/Mouvements">Mouvements</Link>
        <Link to="/Profil">Profil</Link>
        </div>
        </>
    )
}

export default Nav