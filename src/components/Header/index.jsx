import "./styles.module.css";
import styles from "./styles.module.css";
import logo from "../../assets/imgs/logobg.png";
import { Button } from "../Button/index";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isActive, setActive] = useState(false);

  const handleToggleMenu = () => {
    setActive(!isActive);
  };

  return (
    <header
      className={`align-center flex justify-center ${styles.headerDesktop} ${
        isActive ? styles.headerActive : ""
      }`}
    >
      <div
        className={`align-center flex justify-between ${styles.logoWrapper}`}
      >
        <Link to="/home">
          <img
            src={logo}
            alt="Logo Projeto Minhas grandes crianças"
            className={styles.logoImg}
          />
        </Link>
        <button className={styles.hamburguerButton} onClick={handleToggleMenu}>
          <img
            src="https://img.icons8.com/ios-glyphs/50/FFFFFF/menu-rounded.png"
            alt="Menu Hamburguer"
          />
        </button>
      </div>

      <nav className={`${styles.menuOpen} ${!isActive ? styles.hidden : ""}`}>
        <ul className={`align-center flex ${styles.list}`}>
          <li>
            <Link className="text-1 color-grey-0 weight-1" to="/quemsomos">
              Quem somos
            </Link>
          </li>
          <li>
            <Link className="text-1 color-grey-0 weight-1" to="/depoimentos">
              Depoimentos
            </Link>
          </li>
          <li>
            <Link className="text-1 color-grey-0 weight-1" to="/projetos">
              Projetos e Oficinas
            </Link>
          </li>
          <li>
            <Link className="text-1 color-grey-0 weight-1" to="/areadosaber">
              Área do Saber
            </Link>
          </li>
          <li>
            <Link className="text-1 color-grey-0 weight-1" to="/contato">
              Contato
            </Link>
          </li>
          <li>
            <Link className="text-1 color-grey-0 weight-1" to="/apadrinhamento">
              Apadrinhamento
            </Link>
          </li>
          <a href="https://pag.ae/7YEd3Eur8" target="_blank" rel="noreferrer">
            <Button title="Doação" size={true} />
          </a>
        </ul>
      </nav>
    </header>
  );
}
