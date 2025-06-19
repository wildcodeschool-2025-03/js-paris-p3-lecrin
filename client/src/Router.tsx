import { createBrowserRouter } from "react-router";
import App from "./App";
import Artist from "./pages/Artist";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";
import Profil from "./pages/Profile";

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
        path: "/Profil",
        element: <Profil />,
      },
      {
        path: "/Artiste",
        element: <Artist />,
      },
      {
        path: "/Connexion",
        element: <Connexion />,
      },
    ],
  },
]);
