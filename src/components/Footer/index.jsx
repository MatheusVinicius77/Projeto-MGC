import "./styles.module.css";
import styles from "./styles.module.css";
import instagram from "../../assets/imgs/redes-sociais/instagram-branco.svg";
import facebook from "../../assets/imgs/redes-sociais/facebook-branco.svg";
import linkedin from "../../assets/imgs/redes-sociais/linkedin-branco.svg";
import logo from "../../assets/imgs/logobg.png";
import email from "../../assets/imgs/redes-sociais/email.svg";

export default function Footer() {
  return (
    <footer className="bg-grey-1">
      <div className={`align-center flex justify-between ${styles.footerInnerContainer}`}>
        <div>
          <img src={logo} className={styles.logo} />
          <ul className={`align-center flex ${styles.listIcons}`}>
            <li>
              <a href="https://www.instagram.com/projetomgc/" target="_blank">
                `<img src={instagram}></img>`
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/ProjetoMgc/" target="_blank">
                `<img src={facebook}></img>`
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/minhasgrandescriancas/"
                target="_blank"
              >
                `<img src={linkedin}></img>`
              </a>
            </li>
            <li>
              <a href="">
                <img src={email} />
              </a>
            </li>
          </ul>
        </div>
        <ul>
          <li className="text-1 color-grey-0">Quem Somos</li>
          <li className="text-1 color-grey-0">Depoimentos</li>
          <li className="text-1 color-grey-0">Projetos e Oficinas</li>
          <li className="text-1 color-grey-0">Área do Saber</li>
          <li className="text-1 color-grey-0">Contato</li>
          <li className="text-1 color-grey-0">Apadrinhamento</li>
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
            <dd>
              <a className="text-3 color-grey-0" href="">(21) 9 6708-1641</a>
            </dd>
            <div className={`flex ${styles.emailWrapper}`}>
              <dt className="text-3 color-grey-0">Email: </dt>
              <dd>
                <a className="text-3 color-grey-0" href="">mgcprojeto8@gmail.com</a>
              </dd>
            </div>
          </dl>
        </article>
      </div>
    </footer>
  );
}
