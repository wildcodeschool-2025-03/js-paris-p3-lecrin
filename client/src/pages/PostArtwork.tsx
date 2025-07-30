import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useArtwork } from "../contexts/artwork.context";
import { useUser } from "../contexts/user.context";

function PostArtwork() {
  const [name, setName] = useState("");
  const [date_artwork, setDate_artwork] = useState("");
  const [photo, setPhoto] = useState("");
  const [musee, setMusee] = useState("");
  const [ville, setVille] = useState("");
  const [pays, setPays] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [description, setDescription] = useState("");

  const { artwork, setArtwork } = useArtwork();
  const { user } = useUser();
  const navigate = useNavigate();

  const postArtwork = async () => {
    try {
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({
          user_id: user?.id,
          name,
          date_artwork,
          photo,
          musee,
          ville,
          pays,
          dimensions,
          description,
        }),
      };

      const response = await fetch(
        "http://localhost:3310/api/artworks",
        fetchOptions,
      );

      if (!response) throw new Error("Erreur lors du POST");

      const newArtwork = await response.json();
      setArtwork([newArtwork, ...artwork]);
      console.log("new artwork", newArtwork);

      toast.success("Artwork posté");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <section className="sectionPostArtwork">
      <h1>Le nom de l'oeuvre</h1>
      <textarea
        placeholder="Ici le nom..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h1>La date de l'oeuvre</h1>
      <textarea
        placeholder="Ici la date..."
        value={date_artwork}
        onChange={(e) => setDate_artwork(e.target.value)}
      />

      <h1>La photo de l'oeuvre</h1>
      <textarea
        placeholder="Ici la photo..."
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />

      <h1>Le musée de l'oeuvre</h1>
      <textarea
        placeholder="Ici le musée..."
        value={musee}
        onChange={(e) => setMusee(e.target.value)}
      />

      <h1>La ville de l'oeuvre</h1>
      <textarea
        placeholder="Ici la ville..."
        value={ville}
        onChange={(e) => setVille(e.target.value)}
      />

      <h1>Le pays de l'oeuvre</h1>
      <textarea
        placeholder="Ici le pays..."
        value={pays}
        onChange={(e) => setPays(e.target.value)}
      />

      <h1>Les dimensions de l'oeuvre</h1>
      <textarea
        placeholder="Ici les dimensions..."
        value={dimensions}
        onChange={(e) => setDimensions(e.target.value)}
      />

      <h1>La description de l'oeuvre</h1>
      <textarea
        placeholder="Ici la description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="button" onClick={postArtwork}>
        Poster
      </button>
    </section>
  );
}

export default PostArtwork;
