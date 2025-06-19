import "./Mouvement.css";
import Nav from "../components/Nav";
import Searchbar from "../components/Searchbar";

function Mouvement() {
  return (
    <>
      <Nav />
      <Searchbar />
      <section className="list-mouvements">
        <div className="separation" />
        <article className="mouvement">
          <div className="desc-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Otto_freundlich%2C_composizione%2C_1911.jpg/250px-Otto_freundlich%2C_composizione%2C_1911.jpg"
              alt="abstrait-representation"
            />
            <div className="desc-text">
              <h1>Abstrait</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim dipiscing elit, sed do eiusmod tempor incididunt ut labore
                et ...
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Mouvement;
