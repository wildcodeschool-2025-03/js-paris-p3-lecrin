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
