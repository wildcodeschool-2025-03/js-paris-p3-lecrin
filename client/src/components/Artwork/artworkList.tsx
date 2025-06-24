import artists from "../../data/dataArtist.json";
import artworks from "../../data/dataArtwork.json";
import movements from "../../data/dataMovement.json";
import ArtworkCard from "./artworkCard";

function ArtworkList() {
  console.log("artworks.length =", artworks.length);

  return (
    <div>
      {artworks.slice(0, 6).map((artwork) => {
        const artist = artists.find((a) => a.id === artwork.artist_id);
        const movement = movements.find((m) => m.id === artwork.movement_id);

        if (!artist || !movement || !artwork.user_id) {
          console.log("Artwork filtré :", artwork);
          return null;
        }

        return (
          <ArtworkCard
            key={artwork.id}
            artwork={artwork}
            artist={artist}
            movement={movement}
          />
        );
      })}
    </div>
  );
}

export default ArtworkList;
