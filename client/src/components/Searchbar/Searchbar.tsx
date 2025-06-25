import "./Searchbar.css";
import PictoSearch from "../assets/images/pictos/picto-search.svg";

function Searchbar() {
  return (
    <article className="DivNavBarFiltre">
      <div className="DivNavBar">
        <img className="searchIcon" src={PictoSearch} alt="search" />
        <input
          className="searchBar"
          type="text"
          placeholder="Recherchez une œuvre"
        />
      </div>

      <div className="divFiltre">
        <p>picto filtre</p>
      </div>
    </article>
  );
}

export default Searchbar;
