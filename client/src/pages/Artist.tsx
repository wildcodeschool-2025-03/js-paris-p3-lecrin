import ArtistCard from "../components/ArtistCard";
import Searchbar from "../components/Searchbar";
import "./Artist.css";

function Artist() {
  return (
    <>
      <article>
        <Searchbar />
      </article>
      <article>
        <ArtistCard />
      </article>
    </>
  );
}

export default Artist;
