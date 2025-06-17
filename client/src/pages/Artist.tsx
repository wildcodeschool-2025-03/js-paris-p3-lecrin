import ArtistCard from "../components/ArtistCard";
import Nav from "../components/Nav";
import Searchbar from "../components/Searchbar";
import "./Artist.css"

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
