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
  const [deleteCom, setDeleteCom] = useState<Response | null>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    console.log("comments", comments);
    fetch(`http://localhost:3310/api/artworks/${artworkId}/comments`)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        if (data) setComments(data);
      })
      .catch((error) =>
        console.error(
          "une erreur est survenue lors de la récupération des commentaires",
          error,
        ),
      );
  }, [artworkId, deleteCom]); // <= quand est ce que le code useEffect va etre executé

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
        headers: { "Content-Type": "application/json" }, // RAJOUTER AUTORIZATION /!\
        body: JSON.stringify({
          text: trimmed,
          date: "2025-07-05",
          user_id: 7,
          artwork_id: artworkId,
        }),
      })
        .then((res) => {
          if (res.ok) {
            setNewComment("");

            return fetch(
              `http://localhost:3310/api/artworks/${artworkId}/comments`,
            );
          }
        })
        .then((res) => res?.json())
        .then((data) => {
          if (data) {
            setComments(data);
          }
        });
      // RAJOUTER UN .CATCH /!\
    }
  }

  function destroy(commentId: number) {
    fetch(`http://localhost:3310/api/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, //voir si le token a bien été mis dans le TOKEN
      },
    }).then((res) => {
      setDeleteCom(res);
      setComments((prev) => prev.filter((com) => com.id !== commentId));
    });
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
            <button type="button" onClick={() => destroy(comment.id)}>
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default CommentList;
