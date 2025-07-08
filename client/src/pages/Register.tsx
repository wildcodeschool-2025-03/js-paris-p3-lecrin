import { useNavigate } from "react-router";
import "./Register.css";
import { useRef } from "react";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const name = useRef<HTMLInputElement>(null);
  const mail = useRef<HTMLInputElement>(null);
  const birthdate = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const date_inscription = useRef<HTMLInputElement>(null);
  const photo = useRef<HTMLInputElement>(null);

  const registerBtn = async () => {
    try {
      const fetchOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.current?.value,
          mail: mail.current?.value,
          birthday: birthdate.current?.value,
          password: password.current?.value,
          date_inscription: date_inscription.current?.value,
          photo: photo.current?.value,
        }),
      };
      const response = await fetch(
        "http://localhost:3310/api/users",
        fetchOptions,
      );
      if (response.ok) {
        toast.success("Inscription confirmée.");
        navigate("/login");
      } else toast.warning("Veuillez compléter tous les champs.");
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue.");
    }
  };

  return (
    <div className="connexion-page">
      <div className="login">
        <h1>Inscription</h1>
        <form action="/ma-page-de-traitement" method="post" className="seco">
          <label htmlFor="name">Pseudo :</label>
          <input ref={name} type="text" id="name" name="user_name" />
          <label htmlFor="mail">E-mail :</label>
          <input ref={mail} type="email" id="mail" name="user_mail" />
          <label htmlFor="photo">photo :</label>
          <input ref={photo} type="photo" id="photo" name="user_photo" />
          <label htmlFor="birthdate">Date de naissance</label>
          <input
            ref={birthdate}
            type="date"
            id="birthdate"
            name="user_birthdate"
          />
          <label htmlFor="password">Mot de passe</label>
          <input ref={password} type="password" id="password" name="password" />
          <button onClick={registerBtn} className="btn-seco" type="button">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
