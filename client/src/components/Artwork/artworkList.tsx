import { useEffect, useState } from "react";
import { useArtwork } from "../../contexts/artwork.context";
import Searchbar from "../Searchbar/Searchbar";
import ArtworkCard from "./artworkCard";

function ArtworkList() {
  // const [artworksData, setData] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { artwork } = useArtwork();

  const filteredartworks = artwork.filter((artwork) =>
    artwork.artworkName?.toLowerCase().includes(search?.toLowerCase()),
  );

  useEffect(() => {
    fetch("http://localhost:3310/api/artworks")
      .then((res) => {
        res.json();
        setLoading(false);
      })
      // .then((json) => {
      //   // setData(json);

      //   setLoading(false);
      // })
      .catch((err) => {
        console.error("Erreur :", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="msgErr">Les tableaux arrivent !</p>;
  if (artwork.length < 1) {
    // Protection pour éviter erreur si artwork ou user_id manquant
    return (
      <div className="msgErr">Artwork invalide ou données manquantes.</div>
    );
  }

  return (
    <div>
      <Searchbar search={search} setSearch={setSearch} />
      {filteredartworks.map((artwork) => {
        return <ArtworkCard key={artwork.id} artwork={artwork} />;
      })}
    </div>
  );
}

export default ArtworkList;
