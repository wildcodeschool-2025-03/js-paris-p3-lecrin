import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import artworkAction from "./modules/artwork/artworkAction";

// router.get("/api/items", itemActions.browse);
// router.get("/api/items/:id", itemActions.read);
// router.post("/api/items", itemActions.add);

router.get("/api/artworks", artworkAction.getAll);

/* ************************************************************************* */

export default router;
