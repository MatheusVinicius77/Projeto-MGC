import "./styles.module.css";
import styles from "./styles.module.css";
import Fundo from "../../assets/imgs/formas/forma-preta-footer.svg";
import instagram from "../../assets/imgs/redes-sociais/instagram-branco.svg";
import facebook from "../../assets/imgs/redes-sociais/facebook-branco.svg";
import linkedin from "../../assets/imgs/redes-sociais/linkedin-branco.svg";
import logo from "../../assets/imgs/logobg.png";
import email from "../../assets/imgs/redes-sociais/email.svg";

export default function Footer() {
  return (
    <div>
      <img src={logo} />
      <ul>
        <li>
          <a href="https://www.instagram.com/projetomgc/" target="_blank">
            `<img className="insta" src={instagram}></img>`
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/ProjetoMgc/" target="_blank">
            `<img className="face" src={facebook}></img>`
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/minhasgrandescriancas/"
            target="_blank"
          >
            `<img className="linked" src={linkedin}></img>`
          </a>
        </li>
        <li>
          <img className="email" src={email} />
        </li>
      </ul>
      <ul>
        <li>Quem Somos</li>
        <li>Depoimentos</li>
        <li>Projetos e Oficinas</li>
        <li>Área do Saber</li>
        <li>Contato</li>
        <li>Apadrinhamento</li>
      </ul>
    </div>
  );
}
