import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";

// Create router configuration with routes
// You can add more routes as you build out your app!
export const router = createBrowserRouter([
  {
    path: "/", // The root path
    element: <Home />, // Renders the Home component for the home page
  },

  // Try adding a new route! For example, "/about" with an About component
]);
