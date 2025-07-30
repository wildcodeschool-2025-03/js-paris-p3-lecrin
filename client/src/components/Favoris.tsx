import { useEffect, useState } from "react";
import ArtworkCard from "../components/Artwork/artworkCard";
import { useArtwork } from "../contexts/artwork.context";
import { useUser } from "../contexts/user.context";
import type { Artwork } from "../types/vite-env";

function Favoris() {
  const { user } = useUser();
  const { artwork } = useArtwork();
  const [likedArtworksIds, setLikedArtworksIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3310/api/user/${user?.id}/likes`)
      .then((res) => res.json())
      .then((data) => {
        const ids = data.map((item: Artwork) => item.id);
        setLikedArtworksIds(ids);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur fetch likes :", err);
        setLoading(false);
      });
  }, [user?.id]);

  if (loading) return <p>Chargement des favoris...</p>;

  const filtered = artwork.filter((art) => likedArtworksIds.includes(art.id));

  return (
    <section>
      <h2>Mes favoris</h2>
      {filtered.length > 0 ? (
        filtered.map((art) => <ArtworkCard key={art.id} artwork={art} />)
      ) : (
        <p>Tu n’as pas encore liké d’œuvres.</p>
      )}
    </section>
  );
}

export default Favoris;
