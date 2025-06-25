import { useEffect, useState } from "react";
import { data } from "react-router";
import type { Artist } from "../types/vite-env";
import ArtistCard from "./Artist/ArtistCard";

function ArtistList() {
  const [artists, setArtists] = useState<Artist[]>([]);

  //const filteredArtists = artists.filter((artist) =>
  //artist.name.toLowerCase().includes(artist.name.()),
  //); //voir si on recherche avec d'autres parametres que le nom de l'artiste

  useEffect(() => {
    fetch("http://localhost:3310/api/artists")
      .then((response) => response.json())
      .then((data) => setArtists(data));
    console.log(data);
  }, []);

  return (
    <>
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </>
  );
}

export default ArtistList;
