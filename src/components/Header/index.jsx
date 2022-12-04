import "./styles.module.css"
import styles from "./styles.module.css"
import logo from "../../assets/imgs/logobg.png"
import { Button } from "../Button/index"
import { useState } from "react"

export function Header(){
  const [isActive, setActive] = useState(false);

  const handleToggleMenu = () => {
    setActive(!isActive);
  };

  return(
    <header className={`${styles.headerDesktop} ${isActive ? styles.headerPadding : ""}`}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="Logo Projeto Minhas grandes crianças" className={styles.logoImg}/>
        <button className={styles.hamburguerButton} onClick={handleToggleMenu}>
          <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/menu-rounded.png" alt="Menu Hamburguer"/>
        </button>
      </div>

      <nav className={`${styles.menuOpen} ${!isActive ? styles.hidden: ""}`}>
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