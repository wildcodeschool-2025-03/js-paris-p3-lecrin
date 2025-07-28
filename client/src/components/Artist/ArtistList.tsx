import { useEffect, useState } from "react";
import type { Artist } from "../../types/vite-env";
import ArtistCard from "./ArtistCard";
import "./ArtistList.css";
import Searchbar from "../Searchbar/Searchbar";

function ArtistList() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const filteredArtists = artists.filter((artist) =>
    artist.artistName?.toLowerCase().includes(search?.toLowerCase()),
  );

  useEffect(() => {
    fetch("http://localhost:3310/api/artists")
      .then((res) => res.json())
      .then((json) => {
        setArtists(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur :", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="msgErr">Les artistes arrivent !</p>;
  if (artists.length < 1) {
    // Protection pour éviter erreur si artwork ou user_id manquant
    return (
      <div className="msgErr">Artiste invalide ou données manquantes.</div>
    );
  }

  return (
    <>
      <Searchbar search={search} setSearch={setSearch} />
      <div className="artistlist">
        {filteredArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </>
  );
}

export default ArtistList;
