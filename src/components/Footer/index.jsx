import "./styles.module.css";
import styles from "./styles.module.css";
import instagram from "../../assets/imgs/redes-sociais/instagram-branco.svg";
import facebook from "../../assets/imgs/redes-sociais/facebook-branco.svg";
import linkedin from "../../assets/imgs/redes-sociais/linkedin-branco.svg";
import logo from "../../assets/imgs/logobg.png";
import email from "../../assets/imgs/redes-sociais/email-branco.svg";
import ondaAmarelaFigura from "../../assets/imgs/formas/forma-amarela-2.svg";
import ondaRoxaFigura from "../../assets/imgs/formas/forma-roxa-1.svg";
import { Link } from "react-router-dom";

export default function Footer({ondaRoxa}) {
  return (
    <footer className="bg-grey-1">
      <img className={styles.onda} src={ondaRoxa ? ondaRoxaFigura : ondaAmarelaFigura} />
      <div
        className={`flex column justify-evenly ${styles.footerInnerContainer}`}
      >
        <div className={`align-center column flex ${styles.logoWrapper}`}>
          <Link to="/home"><img src={logo} className={styles.logo} /></Link>
          <ul className={`align-center flex ${styles.listIcons}`}>
            <li>
              <a href="https://www.instagram.com/projetomgc/" target="_blank">
                <img src={instagram} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/ProjetoMgc/" target="_blank">
                <img src={facebook} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/minhasgrandescriancas/"
                target="_blank"
              >
                <img src={linkedin} />
              </a>
            </li>
            <li>
              <a href="">
                <img src={email} />
              </a>
            </li>
          </ul>
        </div>
        <ul className="column flex">
          <li><Link className="text-1 color-grey-0" to="/quemsomos">Quem Somos</Link></li>
          <li><Link className="text-1 color-grey-0" to="">Depoimentos</Link></li>
          <li><Link className="text-1 color-grey-0" to="">Projetos e Oficinas</Link></li>
          <li><Link className="text-1 color-grey-0" to="">Área do Saber</Link></li>
          <li><Link className="text-1 color-grey-0" to="">Contato</Link></li>
          <li><Link className="text-1 color-grey-0" to="">Apadrinhamento</Link></li>
        </ul>
        <article>
          <h2 className="title-3 color-grey-0">Fale conosco</h2>
          <dl className={`flex column ${styles.contatoList}`}>
            <dt hidden>Rua</dt>
            <dd className="text-3 color-grey-0">
              Rua das crianças N° 1 - Anchieta
            </dd>
            <dt hidden>Referência</dt>
            <dd className="text-3 color-grey-0">Ref. Rua Sarjento Rego</dd>
            <dt hidden>Telefone</dt>
            <dd className="text-3 color-grey-0">
              <a href="">
                (21) 9 6708-1641
              </a>
            </dd>
            <dd className="text-3 color-grey-0" >
              Email:
              <a href="">
                mgcprojeto8@gmail.com
              </a>
            </dd>
          </dl>
        </article>
      </div>
    </footer>
  );
}
