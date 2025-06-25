/// <reference types="vite/client" />
// This provides types for the Vite-injected env variables on import.meta.env
// See https://vite.dev/guide/features.html#client-types
export type Artist = {
  id: number;
  name: string;
  birthday: string;
  death_date: string;
  movement: Movement[];
  artworksCount: number; //jointure a faire
  portrait: string;
  // autres champs si besoin
};

export type Movement = {
  id: number;
  name: string;
  description: string;
  photo: string;
  // autres champs si besoin
};

export type Artwork = {
  id: number;
  name: string;
  artist_id: number;
  movement_id: number;
  user_id?: number;
  photo: string;
  date_post: number;
  date_artwork: string;
  musee?: string;
  ville?: string;
  pays?: string;
  dimensions: string;
  description?: string;
  movements: Movement[];
  artistName: string;
  userName: string;
  countLike: number;
  // autres champs si besoin
};
