import type { Movement } from "../types/vite-env";
import "./MouvementCard.css";
import { Link } from "react-router";

type MovementCardProps = {
  movement: Movement;
};

function MouvementCard({ movement }: MovementCardProps) {
  return (
    <>
      <Link className="LinkToArtistProf" to={`/Mouvements/${movement.id}`}>
        <div className="desc-img">
          <div className="divImgMvt">
            <img className="imgMvt" src={movement.photo} alt={movement.name} />
          </div>

          <div className="desc-text">
            <h1>{movement.name}</h1>
            <p>{movement.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MouvementCard;
