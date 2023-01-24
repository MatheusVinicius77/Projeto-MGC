import "./styles.module.css"
import styles from "./styles.module.css"
import logo from "../../assets/imgs/logobg.png"
import { Button } from "../Button/index"
import { useState } from "react"
import { Link } from "react-router-dom"

export function Header(){
  const [isActive, setActive] = useState(false);

  const handleToggleMenu = () => {
    setActive(!isActive);
  };

  return(
    <header className={`${styles.headerDesktop} ${isActive ? styles.headerPadding : ""}`}>
      <div className={styles.logoWrapper}>
        <Link to="/home"><img src={logo} alt="Logo Projeto Minhas grandes crianças" className={styles.logoImg}/></Link>
        <button className={styles.hamburguerButton} onClick={handleToggleMenu}>
          <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/menu-rounded.png" alt="Menu Hamburguer"/>
        </button>
      </div>

      <nav className={`${styles.menuOpen} ${!isActive ? styles.hidden: ""}`}>
        <ul className={styles.list}>
          <li><Link className="text-1 color-grey-0 weight-1" to="/quemsomos">Quem somos</Link></li>
          <li><Link className="text-1 color-grey-0 weight-1">Depoimentos</Link></li>
          <li><Link className="text-1 color-grey-0 weight-1">Projetos e Oficinas</Link></li>
          <li><Link className="text-1 color-grey-0 weight-1">Área do Saber</Link></li>
          <li><Link className="text-1 color-grey-0 weight-1">Contato</Link></li>
          <li><Link className="text-1 color-grey-0 weight-1">Apadrinhamento</Link></li>
          <Button title="Doação" size={true}/>
        </ul>
      </nav>
    </header>
  );
}