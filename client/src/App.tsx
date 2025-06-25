import { Outlet } from "react-router";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
