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
  const [newComment, setNewComment] = useState("");
  const [sendComment, setSendComment] = useState<Response | null>(null);
  const [deleteCom, setDeleteCom] = useState<Response | null>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetch(`http://localhost:3310/api/artworks/${artworkId}/comments`)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        if (data) setComments(data);
      });
  }, [artworkId, sendComment, deleteCom]);

  function textAreaOn() {
    setTextAreaOpen(true);
  }

  function textAreaOff() {
    setTextAreaOpen(false);
  }

  function send() {
    const trimmed = newComment.trim();

    if (!trimmed) {
      alert("Vous ne pouvez pas envoyer de commentaire vide");
    } else {
      fetch("http://localhost:3310/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: trimmed,
          date: "2025-07-05",
          user_id: 2,
          artwork_id: 2,
        }),
      }).then((res) => setSendComment(res));
    }
  }

  function destroy() {
    if (newComment) {
      fetch(`http://localhost:3310/api/comments/${artworkId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: 2 }),
      }).then((res) => setDeleteCom(res));
    } else {
      ("aucun commentaire à supprimer");
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
            <textarea
              className="textarea"
              placeholder="Écris ton commentaire ici..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
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
            <span>
              <img src={comment.userPic} alt={comment.userName} />
              {comment.userName}
            </span>
            <p>{comment.text}</p>
            <button type="button" onClick={destroy}>
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default CommentList;
