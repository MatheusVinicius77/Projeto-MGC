import { Button } from "../Button";
import styles from "./mobile.module.css"
import logo from "../../assets/imgs/logo.svg"

export function HeaderMobile(){
  function handleToggleMenu(){
    console.log("olá");
  }
  
  return(
    <header className={styles.mobileHeader}>

      <div className="logo">
        <img src={logo} alt="Logo Projeto Minhas Grandes Crianças" />
      </div>

      <nav className="mobileNav">
        <ul>
          <li>Quem somos</li>
          <li>Depoimentos</li>
          <li>Projetos e Oficinas</li>
          <li>Área do Saber</li>
          <li>Contato</li>
          <li>Apadrinhamento</li>
          <Button title="Doação" size={true}/>
        </ul>
      </nav>

      <button className={styles.menu} onClick={handleToggleMenu}>Menu</button>

    </header>
  );
}
