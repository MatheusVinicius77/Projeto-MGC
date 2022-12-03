import "./styles.module.css"
import styles from "./styles.module.css"
import logo from "../../assets/imgs/logo.svg"
import { Button } from "../Button/index"
import { useState } from "react"

export function Header(){
  const [isActive, setActive] = useState(false);

  const handleToggleMenu = () => {
    setActive(!isActive);
  };

  return(
    <header className={styles.headerDesktop}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Projeto Minhas grandes crianças" />
      </div>

      <nav className={isActive ? styles.menuOpen : styles.menuNav}>
        <ul className={styles.list}>
          <li>Quem somos</li>
          <li>Depoimentos</li>
          <li>Projetos e Oficinas</li>
          <li>Área do Saber</li>
          <li>Contato</li>
          <li>Apadrinhamento</li>
          <Button title="Doação" size={true}/>
        </ul>
      </nav>
    </header>
  );
}