import type { Artwork } from "../../types/vite-env";
import BisArtworkCard from "./bisArtworkCard";

function ListArtistBisArtworkCard({ artworks }: { artworks: Artwork[] }) {
  return (
    <>
      <div className="DivListBisArt">
        {artworks.map((artwork) => {
          return (
            <BisArtworkCard
              key={artwork.id}
              artwork={artwork}
              artist={artwork.artistName}
            />
          );
        })}
      </div>
    </>
  );
}

export default ListArtistBisArtworkCard;
