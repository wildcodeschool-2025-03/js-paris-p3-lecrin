import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

// router.get("/api/items", itemActions.browse);
// router.get("/api/items/:id", itemActions.read);
// router.post("/api/items", itemActions.add);

import artworkActions from "./modules/artwork/artworkActions";
router.get("/api/artworks", artworkActions.browse);

import userActions from "./modules/user/userActions";
router.get("/api/users", userActions.browse);

import artistActions from "./modules/artist/artistActions";
router.get("/api/artists", artistActions.browse);

import movementActions from "./modules/mouvement/movementActions";
router.get("/api/movements", movementActions.browse);

import collectionActions from "./modules/collection/collectionActions";
router.get("/api/collections", collectionActions.browse);

import commentActions from "./modules/comment/commentActions";
router.get("/api/comments", commentActions.browse);

/* ************************************************************************* */

export default router;
