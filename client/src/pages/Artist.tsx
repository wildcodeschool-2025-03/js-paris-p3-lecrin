import ArtistCard from "../components/Artist/ArtistCard";
import Searchbar from "../components/Searchbar/Searchbar";
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
