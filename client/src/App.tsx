import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Nav />
      <ToastContainer
        theme="dark"
        toastStyle={{
          background: "#000",
          color: "#fff",
        }}
      />

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
