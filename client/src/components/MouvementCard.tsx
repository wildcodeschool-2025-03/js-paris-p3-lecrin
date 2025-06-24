import type { Movement } from "../types/vite-env";
import "./MouvementCard.css";

type MovementCardProps = {
  movement: Movement;
};

function MouvementCard({ movement }: MovementCardProps) {
  return (
    <>
      <div className="desc-img">
        <img src={movement.photo} alt={movement.name} />
        <div className="desc-text">
          <h1>{movement.name}</h1>
          <p>{movement.description}</p>
        </div>
      </div>
    </>
  );
}

export default MouvementCard;
