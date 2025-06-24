import ArtistCard from "../components/Artist/ArtistCard";
import Nav from "../components/Nav/Nav";
import Searchbar from "../components/Searchbar/Searchbar";
import "./Artist.css";

function Artist() {
  return (
    <>
      <article>
        <Nav />
      </article>
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
