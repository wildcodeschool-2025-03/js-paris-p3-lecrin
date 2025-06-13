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

// --- USER --- //

import userActions from "./modules/user/userActions";
router.get("/api/users", userActions.browse);

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

// --- COLLECTION --- //

import collectionActions from "./modules/collection/collectionActions";
router.get("/api/collections", collectionActions.browse);

// --- COMMENT --- //

import artistRepository from "./modules/artist/artistRepository";
import commentActions from "./modules/comment/commentActions";
router.get("/api/comments", commentActions.browse);
router.get("/api/comments/:id", commentActions.read);
router.put("/api/comments/:id", commentActions.edit);
router.post("/api/comments", commentActions.add);
router.delete("/api/comments/:id", commentActions.destroy);

/* ************************************************************************* */

export default router;
