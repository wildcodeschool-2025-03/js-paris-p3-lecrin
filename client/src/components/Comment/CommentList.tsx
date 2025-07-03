import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./CommentList.css";
import type { Comment } from "../../types/vite-env";

Modal.setAppElement("#root");

interface CommentListProps {
  artworkId: number;
  onClose: () => void;
  modalIsOpen: boolean;
}

function CommentList({ artworkId, onClose, modalIsOpen }: CommentListProps) {
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
    >
      <h2>Commentaires</h2>
      {comments.length === 0 && "aucun commentaire"}
      {comments.map((comment) => (
        <p key={comment.id}>{comment.text}</p>
      ))}
    </Modal>
  );
}

export default CommentList;
