import { useEffect, useState } from "react";
import type { Movement } from "../types/vite-env";
import MouvementCard from "./MouvementCard";

function MouvementList() {
  const [dataMovements, setDataMovements] = useState<Movement[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/movements")
      .then((res) => res.json())
      .then((data) => {
        setDataMovements(data);
      });
  });

  return (
    <div>
      {dataMovements.map((movement) => {
        return <MouvementCard key={movement.id} movement={movement} />;
      })}
    </div>
  );
}

export default MouvementList;
