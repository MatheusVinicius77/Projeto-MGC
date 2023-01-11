import { Header } from "../../components/Header";
import { Card } from "../../components/Cards"
import Footer from "../../components/Footer"

import CIEE from "../../assets/imgs/fotos/cie.svg"
import circo from "../../assets/imgs/fotos/oficina-circo.svg"
import ballet from "../../assets/imgs/fotos/ballet.svg"

import styles from "./styles.module.css"
import { Button } from "../../components/Button";

export function Projetos(){
  return(
    <>
      <Header />  
      <main className={styles.main}>
        <div className={styles.head}>
          <h1 className={styles.title}>Projetos e Oficinas</h1>
          <h3 className={styles.phrase}>“É hora de mudanças”</h3>
        </div>

        <section className={styles.content}>

          <Card
            corFundoHeader="bg-brand-4"
            listaCoresCirculos={["bg-brand-1", "bg-brand-5", "bg-brand-2"]}
            imagem={CIEE}
            textoAlternativoImagem="Centro de Integração Empresa-Escola"
            coresSinal={["#BC54F0", "#F5487E"]}
            corIconeJanela="#73D676"
           />

            <div className={styles["content-card"]}>
              <h4>Parceria MGC e CIEE</h4>
              <h2>Programa Jovem Aprendiz</h2>
              <p>O Programa Jovem Aprendiz CIEE, por meio da inserção de jovens e adolescentes no mundo do trabalho contribui para sua formação pessoal e profissional potencializando o exercício da cidadania, sua empregabilidade e protagonismo,de modo que se torne agente transformador de sua realidade. </p>
              <Button title="Inscreva-se"/>
            </div>
          
        </section>

        <section className={`${styles.content} ${styles["row-reverse"]}`}>

          <Card
            corFundoHeader="bg-brand-1"
            listaCoresCirculos={["bg-brand-5", "bg-brand-4", "bg-brand-2"]}
            imagem={circo}
            textoAlternativoImagem="Centro de Integração Empresa-Escola"
            coresSinal={["#BC54F0", "#F5487E"]}
            corIconeJanela="#F5487E"
           />

            <div className={styles["content-card"]}>
              <h4>De 8 à 12 anos e de 13 à 18 anos</h4>
              <h2>Oficina de Circo</h2>
              <p>Oficina de circo para crianças, adolescentes e adultos em situação de risco, vulnerabilidade e reabilitação social.</p>
              <Button title="Inscreva-se"/>
            </div>
          
        </section>
      
        <section className={styles.content}>

          <Card
            corFundoHeader="bg-brand-5"
            listaCoresCirculos={["bg-brand-1", "bg-brand-2", "bg-brand-4"]}
            imagem={CIEE}
            textoAlternativoImagem="Centro de Integração Empresa-Escola"
            coresSinal={["#BC54F0", "#73D676"]}
            corIconeJanela="#FFCF32"
           />

            <div className={styles["content-card"]}>
              <h4>De 7 à 12 anos e 13 à 18 anos</h4>
              <h2>Oficina de Teatro</h2>
              <p>O teatro trabalha com a expressão das emoções e auxilia crianças e jovens a desenvolverem habilidades emocionais importantes para o seu crescimento. Nas aulas os alunos exercitam socialização, memória, concentração, habilidades motoras, imaginação, curiosidade, desinibição, além de proporcionar a alegria de apresentar sua arte nos palcos. </p>
              <Button title="Inscreva-se"/>
            </div>
          
        </section>

        <section className={`${styles.content} ${styles["row-reverse"]}`}>

          <Card
            corFundoHeader="bg-brand-3"
            listaCoresCirculos={["bg-brand-5", "bg-brand-5", "bg-brand-2"]}
            imagem={ballet}
            textoAlternativoImagem="8 meninas fazendo ballet"
            coresSinal={["#3FB9FF", "#73D676"]}
            corIconeJanela="#73D676"
           />

            <div className={styles["content-card"]}>
              <h4>De 2 à 9 anos</h4>
              <h2>Oficina de Ballet Baby Class</h2>
              <p>O objetivo das aulas é divertir e estimular a imaginação da criança. As crianças brincam, jogam, divertem-se e aprendem ao mesmo tempo.</p>
              <Button title="Inscreva-se"/>
            </div>
          
        </section>

        <section className={styles.content}>

          <Card
            corFundoHeader="bg-brand-4"
            listaCoresCirculos={["bg-brand-1", "bg-brand-2", "bg-brand-5"]}
            imagem={CIEE}
            textoAlternativoImagem="Centro de Integração Empresa-Escola"
            coresSinal={["#BC54F0", "#F5487E"]}
            corIconeJanela="#FFCF32"
           />

            <div className={styles["content-card"]}>
              <h4>De 10 à 12 anos e 13 à 18 anos</h4>
              <h2>Oficina de Ballet Infanto-Juvenil</h2>
              <p>O objetivo das aulas é divertir e estimular a imaginação da criança. As crianças brincam, jogam, divertem-se e aprendem ao mesmo tempo.</p>
              <Button title="Inscreva-se"/>
            </div>
          
        </section>
      </main>

      <Footer />
    </>
  );
}