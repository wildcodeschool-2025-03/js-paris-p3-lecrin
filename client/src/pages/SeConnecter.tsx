import "./SeConnecter.css";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { UserContext } from "../contexts/user.context";

function SeConnecter() {
  const navigate = useNavigate();
  const mail = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const context = useContext(UserContext);

  const loginBtn = async () => {
    try {
      const fetchOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mail: mail.current?.value,
          password: password.current?.value,
        }),
      };
      const response = await fetch(
        "http://localhost:3310/api/users/login",
        fetchOptions,
      );
      if (!response.ok) {
        toast.warning("Identifiants incorrects.");
      } else {
        const { userWithoutPassword, token } = await response.json();
        toast.success("Vous êtes bien connectés.");
        const user = userWithoutPassword;
        user.token = token;
        context?.setUser(user);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue.");
    }
  };

  return (
    <div className="connexion-page">
      <article className="login">
        <h1>Se Connecter</h1>
        <div>
          <h2>Nom d'utilisateur:</h2>
          <label htmlFor="mail">E-mail :</label>
          <input ref={mail} type="email" id="mail" name="user_mail" />
          <h2>Mot de passe:</h2>
          <label htmlFor="password">Mot de passe</label>
          <input ref={password} type="password" id="password" name="password" />
        </div>
        <div className="seco">
          <button onClick={loginBtn} className="btn-seco" type="button">
            Se connecter
          </button>
        </div>
      </article>
    </div>
  );
}

export default SeConnecter;
