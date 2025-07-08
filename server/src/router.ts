import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

// router.get("/api/items", itemActions.browse);
// router.get("/api/items/:id", itemActions.read);
// router.post("/api/items", itemActions.add);

// --- USER --- //

import userActions from "./modules/user/userActions";
router.get("/api/users", userActions.browse);
router.post("/api/users", userActions.ValidateUser, userActions.create);
router.post("/api/users/login", userActions.login);
router.delete("/api/users/:id", userActions.isAuth, userActions.destroy);
router.put("/api/users/:id",userActions.isAuth, userActions.edit);

// --- ARTWORK --- //

import artworkActions from "./modules/artwork/artworkActions";
router.get("/api/artworks", artworkActions.browse);
router.get("/api/artworks/:id", artworkActions.read);
router.get("/api/artworks/:id/comments", commentActions.ReadCommentByArtworkId);
router.post(
  "/api/artworks",
  userActions.isAuth, artworkActions.ValidateArtwork,
  artworkActions.add,
);
router.delete("/api/artworks/:id",userActions.isAuth, artworkActions.destroy);
router.put("/api/artworks/:id",userActions.isAuth, artworkActions.edit);



// --- ARTIST --- //

import artistActions from "./modules/artist/artistActions";
router.get("/api/artists", artistActions.browse);
router.get("/api/artists/:id", artistActions.read);
router.put("/api/artists/:id",userActions.isAuth, userActions.isAdmin, artistActions.edit);
router.post("/api/artists",userActions.isAuth, userActions.isAdmin, artistActions.ValidateArtist, artistActions.add);
router.delete("/api/artists/:id",userActions.isAuth, userActions.isAdmin, artistActions.destroy);

// --- MOVEMENT --- //

import movementActions from "./modules/mouvement/movementActions";
router.get("/api/movements", movementActions.browse);
router.get("/api/movements/:id", movementActions.read);
router.post(
  "/api/movements", userActions.isAuth, userActions.isAdmin,
  movementActions.ValidateMovement,
  movementActions.add,
);
router.delete("/api/movements/:id",userActions.isAuth, userActions.isAdmin, movementActions.destroy);
router.put("/api/movements/:id",userActions.isAuth, userActions.isAdmin, movementActions.edit);

// --- COLLECTION --- //

import collectionActions from "./modules/collection/collectionActions";
router.get("/api/collections", collectionActions.browse);
router.get("/api/collections/:id", collectionActions.read);
router.put("/api/collections/:id",userActions.isAuth, collectionActions.edit);
router.post(
  "/api/collections", userActions.isAuth,
  collectionActions.Validatecollection,
  collectionActions.add,
);
router.delete("/api/collections/:id",userActions.isAuth, collectionActions.destroy);

// --- COMMENT --- //

import commentActions from "./modules/comment/commentActions";
router.get("/api/comments", commentActions.browse);
router.get("/api/comments/:id", commentActions.read);
router.put("/api/comments/:id",userActions.isAuth, commentActions.edit);
router.post(
  "/api/comments",userActions.isAuth,
  commentActions.ValidateComment,
  commentActions.add,
);
router.delete("/api/comments/:id",userActions.isAuth, commentActions.destroy);

// --- USER_LIKED_ARTWORKS --- //

import userLikeArtworkAction from "./modules/user_like_artwork/userLikeArtworkAction";

router.get("/api/artworks/:id/like", userLikeArtworkAction.read);
router.post("/api/artworks/like",userActions.isAuth, userLikeArtworkAction.add);
router.delete("/api/artworks/:id/like",userActions.isAuth, userLikeArtworkAction.destroy);

/* ************************************************************************* */

export default router;
