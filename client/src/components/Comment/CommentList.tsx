import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./CommentList.css";
import type { Comment } from "../../types/vite-env";

Modal.setAppElement("#root");

interface CommentListProps {
  artworkId: number;
  onClose: () => void;
  comIsOpen: boolean;
  artworkImage: string;
}

function CommentList({
  artworkId,
  onClose,
  comIsOpen,
  artworkImage,
}: CommentListProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [textAreaOpen, setTextAreaOpen] = useState(false);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
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
  }, [artworkId]); // <= quand est ce que le code useEffect va etre executé

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
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
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
        })
        .catch((error) => console.error("une erreur est survenue", error));
    }
  }

  function destroy(commentId: number) {
    fetch(`http://localhost:3310/api/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      if (res.ok) {
        setComments((prev) => prev.filter((com) => com.id !== commentId));
      }
    });
  }

  return (
    <Modal
      isOpen={comIsOpen}
      onRequestClose={onClose}
      contentLabel="Commentaires"
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <img src={artworkImage} alt="Artwork" className="comment-image" />
      <div className="comment-section">
        {!textAreaOpen ? (
          <button className="BtnPP" type="button" onClick={textAreaOn}>
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
            <button className="BtnPP" type="button" onClick={textAreaOff}>
              Annuler
            </button>
            <button className="BtnPP" type="button" onClick={send}>
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
