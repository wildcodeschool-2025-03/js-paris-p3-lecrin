import "./App.css";
import { Outlet } from "react-router";
import Nav from "./components/Nav";
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
