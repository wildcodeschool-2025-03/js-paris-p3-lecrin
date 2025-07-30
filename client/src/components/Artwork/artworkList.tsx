import { useEffect, useState } from "react";
import { useArtwork } from "../../contexts/artwork.context";
import Searchbar from "../Searchbar/Searchbar";
import ArtworkCard from "./artworkCard";

function ArtworkList() {
  const [search, setSearch] = useState("");
  const { artwork, refreshArtwork } = useArtwork();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    refreshArtwork();
  }, []);

  const filteredartworks = artwork.filter((artwork) =>
    artwork.artworkName?.toLowerCase().includes(search?.toLowerCase()),
  );

  if (artwork.length < 1) {
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
