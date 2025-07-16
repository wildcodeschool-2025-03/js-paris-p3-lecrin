import { useCollections } from "../../contexts/collection.context";
import "./Collection.css";

function Collections() {
  const { collections } = useCollections();

  return (
    <>
      <h1>Collections</h1>

      {collections ? (
        collections?.map((collection) => (
          <div key={collection.id}>
            <img src={collection.photo} alt={collection.name} />
            <h2>{collection.name}</h2>
          </div>
        ))
      ) : (
        <p className="msgErr">Vous n'avez pas encore de collections</p>
      )}
    </>
  );
}

export default Collections;
