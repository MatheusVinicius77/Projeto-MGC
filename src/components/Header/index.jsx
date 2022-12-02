import "./styles.module.css"
import styles from "./styles.module.css"
import logo from "../../assets/imgs/logo.svg"
import { Button } from "../Button/index"
import { useEffect, useRef } from "react"

export function Header(){
  // useEffect(() => {
    const btn = useRef();

    function handleMenu(){
      console.log("oi");
    }
  // }, [])

  return(
    <header>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Projeto Minhas grandes crianças" />
      </div>

      <nav className={styles.nav} ref={btn}>
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

      <button className={styles.menu} onClick={handleMenu}>Menu</button>
    </header>
  );
}