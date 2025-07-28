import { createContext, useContext, useEffect, useState } from "react";
import type { Artwork } from "../types/vite-env";

interface ArtworkContextType {
  artwork: Artwork[];
  setArtwork: React.Dispatch<React.SetStateAction<Artwork[]>>;
}

const ArtworkContext = createContext<ArtworkContextType | null>(null);

export const ArtworkProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [artwork, setArtwork] = useState<Artwork[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/artworks")
      .then((res) => res.json())
      .then(setArtwork)
      .catch((err) => console.error("Erreur lors du fetch Artwork:", err));
  }, []);

  return (
    <ArtworkContext.Provider value={{ artwork, setArtwork }}>
      {children}
    </ArtworkContext.Provider>
  );
};

export const useArtwork = () => {
  const context = useContext(ArtworkContext);

  if (!context)
    throw new Error("useArtwork doit être utilisé dans un ArtworkProvider");
  return context;
};
