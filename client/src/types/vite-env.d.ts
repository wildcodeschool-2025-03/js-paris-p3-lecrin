/// <reference types="vite/client" />
// This provides types for the Vite-injected env variables on import.meta.env
// See https://vite.dev/guide/features.html#client-types
export type Artist = {
  id: number;
  name: string;
  // autres champs si besoin
};

export type Artwork = {
  id: number;
  name: string;
  artist_id: number;
  movement_id: number;
  user_id?: number;
  photo: string;
  date_artwork: string;
  place?: string;
  description?: string;
  // autres champs si besoin
};

export type Movement = {
  id: number;
  name: string;
  // autres champs si besoin
};
