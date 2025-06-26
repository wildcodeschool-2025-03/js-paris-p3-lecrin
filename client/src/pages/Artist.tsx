import Searchbar from "../components/Searchbar/Searchbar";
import "./Artist.css";
import ArtistList from "../components/Artist/ArtistList";

function Artist() {
  return (
    <>
      <article>
        <Searchbar />
      </article>
      <article>
        <ArtistList />
      </article>
    </>
  );
}

export default Artist;
