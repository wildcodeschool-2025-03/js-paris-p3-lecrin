import { useEffect, useState } from "react";
import type { Artist } from "../../types/vite-env";
import ArtistCard from "./ArtistCard";
import "./ArtistList.css";

function ArtistList() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  //const filteredArtists = artists.filter((artist) =>
  //artist.name.toLowerCase().includes(artist.name.()),
  //); //voir si on recherche avec d'autres parametres que le nom de l'artiste

  useEffect(() => {
    fetch("http://localhost:3310/api/artists")
      .then((res) => res.json())
      .then((json) => {
        setArtists(json);
        console.log(json);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur :", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Les artistes arrivent !</p>;
  if (artists.length < 1) {
    // Protection pour éviter erreur si artwork ou user_id manquant
    return <div>Artiste invalide ou données manquantes.</div>;
  }

  return (
    <>
      <div className="artistlist">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </>
  );
}

export default ArtistList;
