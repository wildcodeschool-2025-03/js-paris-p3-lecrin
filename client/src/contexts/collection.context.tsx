import { type ReactNode, createContext, useContext, useState } from "react";
import type { Collection } from "../types/vite-env";

interface CollectionContextType {
  collections: Collection[] | null;
  setCollections: React.Dispatch<React.SetStateAction<Collection[] | null>>;
}

export const CollectionContext = createContext<CollectionContextType | null>(
  null,
);

export const CollectionProvider = ({ children }: { children: ReactNode }) => {
  const [collections, setCollections] = useState<Collection[] | null>(null);

  return (
    <CollectionContext.Provider value={{ collections, setCollections }}>
      {children}
    </CollectionContext.Provider>
  );
};

export function useCollections() {
  const value = useContext(CollectionContext);

  if (value === null) {
    throw new Error("useCollections devrait être utiliser dans un provider");
  }
  return value;
}
