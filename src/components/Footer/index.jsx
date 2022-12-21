import "./styles.module.css"
import styles from "./styles.module.css"
import Fundo from "../../assets/imgs/formas/forma-preta-footer.svg"
import Instagram from "../../assets/imgs/redes-sociais/instagram-branco.svg"
import Facebook from "../../assets/imgs/redes-sociais/facebook-branco.svg"
import Linkedin from "../../assets/imgs/redes-sociais/linkedin-branco.svg"
import Logo from "../../assets/imgs/logobg.png"
import Email from "../../assets/imgs/redes-sociais/email.svg"


export default function Footer (){
    return (
        <div className={styles.FooterDesktop}>
        <img className={styles.footer} src={Fundo}/>
        <img className={styles.logo} src={Logo}/>
        <ul className = {styles.RedesSociais}>
            <li><a href="https://www.instagram.com/projetomgc/" target="_blank">`<img className='insta' src={Instagram}></img>`</a></li>
            <li><a href="https://www.facebook.com/ProjetoMgc/" target="_blank">`<img className='face' src={Facebook}></img>`</a></li>
            <li><a href="https://www.linkedin.com/company/minhasgrandescriancas/" target="_blank">`<img className='linked' src={Linkedin}></img>`</a></li>
            <li><img className='email' src={Email}/></li>

        </ul>
        <ul className = {styles.Lista}>
            <li>Quem Somos</li>
            <li>Depoimentos</li>
            <li>Projetos e Oficinas</li>
            <li>Área do Saber</li>
            <li>Contato</li>
            <li>Apadrinhamento</li>

        </ul>
        </div>
    )
}

