import { createBrowserRouter } from "react-router";
import App from "./App";
import Artist from "./pages/Artist";
import Bienvenue from "./pages/Bienvenue";
import Home from "./pages/Home";
import Mouvement from "./pages/Mouvement";
import Profil from "./pages/Profile";
import SeConnecter from "./pages/SeConnecter";
import ProfileArt from "./pages/profileArt";

// Create router configuration with routes
// You can add more routes as you build out your app!
export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ProfilArtwork/:id",
        element: <ProfileArt />,
      },
      {
        path: "/Profil",
        element: <Profil />,
      },
      {
        path: "/Artiste",
        element: <Artist />,
      },
      {
        path: "/Bienvenue",
        element: <Bienvenue />,
      },
      {
        path: "/SeConnecter",
        element: <SeConnecter />,
      },
      {
        path: "/Mouvements",
        element: <Mouvement />,
      },
    ],
  },
]);
