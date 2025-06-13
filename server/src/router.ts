import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

// router.get("/api/items", itemActions.browse);
// router.get("/api/items/:id", itemActions.read);
// router.post("/api/items", itemActions.add);

// --- ARTWORK --- //
import artworkActions from "./modules/artwork/artworkActions";
router.get("/api/artworks", artworkActions.browse);
router.get("/api/artworks/:id", artworkActions.read);
router.post("/api/artworks", artworkActions.add);
router.delete("/api/artworks/:id", artworkActions.destroy);
router.put("/api/artworks/:id", artworkActions.edit);

// --- USER --- //

import userActions from "./modules/user/userActions";
router.get("/api/users", userActions.browse);
router.get("/api/users/:id", userActions.read);
router.post("/api/users", userActions.add);
router.delete("/api/users/:id", userActions.destroy);
router.put("/api/users/:id", userActions.edit);

// --- ARTIST --- //

import artistActions from "./modules/artist/artistActions";
router.get("/api/artists", artistActions.browse);
router.get("/api/artists/:id", artistActions.read);
router.put("/api/artists/:id", artistActions.edit);
router.post("/api/artists", artistActions.add);
router.delete("/api/artists/:id", artistActions.destroy);

// --- MOVEMENT --- //

import movementActions from "./modules/mouvement/movementActions";
router.get("/api/movements", movementActions.browse);
router.get("/api/movements/:id", movementActions.read);
router.post("/api/movements", movementActions.add);
router.delete("/api/movements/:id", movementActions.destroy);
router.put("/api/movements/:id", movementActions.edit);

// --- COLLECTION --- //

import collectionActions from "./modules/collection/collectionActions";
router.get("/api/collections", collectionActions.browse);

// --- COMMENT --- //

import artistRepository from "./modules/artist/artistRepository";
import commentActions from "./modules/comment/commentActions";
router.get("/api/comments", commentActions.browse);

/* ************************************************************************* */

export default router;
