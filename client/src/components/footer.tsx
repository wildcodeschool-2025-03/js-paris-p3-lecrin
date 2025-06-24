import "./footer.css";
import C from "../assets/images/pictos/picto-C.svg";
import Discord from "../assets/images/pictos/picto-discord.svg";
import FB from "../assets/images/pictos/picto-fb.svg";
import Insta from "../assets/images/pictos/picto-fb.svg";
import Twitter from "../assets/images/pictos/picto-twitter.svg";
import YT from "../assets/images/pictos/picto-yt.svg";

function Footer() {
  return (
    <section className="footer">
      <article className="divFooter">
        <h1 className="titleFooter">L'Écrin</h1>

        <div className="divBasFooter">
          <div className="pictosFooter">
            <img className="pictoFooter" src={FB} alt="" />
            <img className="pictoFooter" src={YT} alt="" />
            <img className="pictoFooter" src={Twitter} alt="" />
            <img className="pictoFooter" src={Discord} alt="" />
            <img className="pictoFooter" src={Insta} alt="" />
          </div>

          <div className="divTextFooter">
            <p className="textFooter">ALL RIGHTS RESERVED</p>
            <img className="pictoC" src={C} alt="" />
            <p className="textFooter">2025</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Footer;
