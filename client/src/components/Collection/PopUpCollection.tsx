import { useState } from "react";
import Modal from "react-modal";
import "./Collection.css";

Modal.setAppElement("#root");

type PopUpCollectionProps = {
  artworkId: number; // ou string selon ton usage
  artworkImage: string;
  onClose: () => void;
  popUpIsOpen: boolean;
};

function PopUpCollection({
  // artworkId,
  artworkImage,
  onClose,
  popUpIsOpen,
}: PopUpCollectionProps) {
  const [view, setView] = useState("menu");
  const handleBack = () => setView("menu");

  return (
    <Modal
      isOpen={popUpIsOpen}
      onRequestClose={() => {
        setView("menu");
        onClose;
      }}
      contentLabel="Collections"
      className="react-modal-content-popup"
      overlayClassName="react-modal-overlay"
    >
      <img className="popup-image" src={artworkImage} alt="" />

      {view === "menu" && (
        <article className="divBtnPP">
          <button
            type="button"
            className="BtnPP"
            onClick={() => setView("add")}
          >
            Ajouter à une collection
          </button>
          <button
            type="button"
            className="BtnPP"
            onClick={() => setView("create")}
          >
            Créer une nouvelle collection
          </button>
        </article>
      )}

      {view === "add" && (
        <article className="divBtnPP">
          <h2 className="titrePopUp">Ajouter à une collection</h2>
          {/* Ici tu mets ta logique pour afficher les collections existantes */}
          <p>Liste des collections disponibles ici...</p>
          <button type="button" className="BtnPP" onClick={handleBack}>
            Retour
          </button>
        </article>
      )}

      {view === "create" && (
        <article className="divBtnPP">
          <h2 className="titrePopUp">Créer une nouvelle collection</h2>

          <form className="formPopUp">
            Nom de la collection :
            <input
              placeholder="Entrez le nom de la collection..."
              className="DivNavBar"
              type="text"
              name="collectionName"
            />
            <button type="submit" className="BtnPP">
              Créer
            </button>
          </form>

          <button type="button" className="BtnPP" onClick={handleBack}>
            Retour
          </button>
        </article>
      )}
    </Modal>
  );
}

export default PopUpCollection;

// 1 Créer une collection - Cotés front= Faire le formulaire, avec ces infos, il les envoie au backend via un post
// 2 Injecter cette nouvelle collection dans le context coté front, via le setter (setCollections)
// 3 Pour ajouter à une collection, recupérer id de la collec, rajouter un élkément dans la collection, mettre a j la collect, via une requete post ou put (possiblement)
// 4 Garce au setter, MAJ la collec
