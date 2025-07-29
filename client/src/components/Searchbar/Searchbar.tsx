import "./Searchbar.css";
import PictoSearch from "../../assets/images/pictos/picto-search.svg";

type SearchbarProps = {
  search: string;
  setSearch: (value: string) => void;
};

function Searchbar({ search, setSearch }: SearchbarProps) {
  return (
    <article className="DivNavBarFiltre">
      <div className="DivNavBar">
        <img className="searchIcon" src={PictoSearch} alt="search" />
        <input
          className="searchBar"
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </article>
  );
}

export default Searchbar;
