import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./CommentList.css";
import type { Comment } from "../../types/vite-env";

Modal.setAppElement("#root");

interface CommentListProps {
  artworkId: number;
  onClose: () => void;
  modalIsOpen: boolean;
  artworkImage: string;
}

function CommentList({
  artworkId,
  onClose,
  modalIsOpen,
  artworkImage,
}: CommentListProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [textAreaOpen, setTextAreaOpen] = useState(false);
  const [newComment] = useState("");
  const [, setSendComment] = useState<Response | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3310/api/artworks/${artworkId}/comments`)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data) setComments(data);
      });
  }, [artworkId]);

  function textAreaOn() {
    console.log("boutonok");
    setTextAreaOpen(true);
  }

  function textAreaOff() {
    setTextAreaOpen(false);
  }

  const empty = "";

  function send() {
    if (newComment === empty) {
      alert("Vous ne pouvez pas envoyer de commentaire vide");
    } else {
      fetch("http://localhost:3310/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: newComment,
          date: "2025-07-05",
          user_id: 1,
          artwork_id: 2,
        }),
      }).then((res) => setSendComment(res));
    }
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onClose}
      contentLabel="Commentaires"
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <img src={artworkImage} alt="Artwork" className="comment-image" />
      <div className="comment-section">
        {!textAreaOpen ? (
          <button type="button" onClick={textAreaOn}>
            Ajouter un commentaire
          </button>
        ) : (
          <>
            <textarea placeholder="Écris ton commentaire ici..." />
            <button type="button" onClick={textAreaOff}>
              Annuler
            </button>
            <button type="button" onClick={send}>
              Envoyer
            </button>
          </>
        )}

        {comments.length === 0 && <p>Aucun commentaire pour le moment.</p>}
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <span>{comment.userName}</span>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default CommentList;
