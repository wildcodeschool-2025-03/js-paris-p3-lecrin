/// <reference types="vite/client" />

import { JSX } from "react/jsx-runtime";

// This provides types for the Vite-injected env variables on import.meta.env
// See https://vite.dev/guide/features.html#client-types
export type Artist = {
  artistName: ReactNode;
  id: number;
  name: string;
  photo: string;
  pays: string;
  description: string;
  birthday: string;
  death_date: string;
  movements: Movement[];
  artworkCount: number; //jointure a faire
  portrait: string;
  artworks: Artwork[];
  // autres champs si besoin
};

export type Movement = {
  id: number;
  name: string;
  description: string;
  photo: string;
  artworks: Artwork[];
  // autres champs si besoin
};

export type Artwork = {
  id: number;
  name: string;
  artist_id: number;
  movement_id: number;
  userId: number;
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
  artworkName: string;
  userName: string;
  userPhoto: string;
  countLike: number;
  // autres champs si besoin
};

export type User = {
  id: number;
  name: string;
  photo: string;
  birthday: string;
  date_inscription: string;
  mail: string;
  password: string;
  artworks?: Artwork[];
  admin?: string;
  artist_id?: Artist;
  token: string;
};

export type Comment = {
  id: number;
  text: string;
  date: string;
  artwork: Artwork;
  artist: Artist;
  userId: User;
  userName: string;
  userPic: string;
};

export type Collection = {
  id: number;
  name: string;
  photo: string;
  user_id: number;
};
