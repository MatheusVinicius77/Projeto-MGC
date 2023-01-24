import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Card } from "../../components/Cards"
import Footer from "../../components/Footer"

import CIEE from "../../assets/imgs/fotos/cie.svg"
import circo from "../../assets/imgs/fotos/oficina-circo.svg"

import styles from "./styles.module.css"
import { Button } from "../../components/Button";

export function AreaDoSaber(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <>
      <Header />  
      <main className={styles.main}>
        <div className={styles.head}>
          <h1 className={styles.title}>Área do Saber</h1>
          <h3 className={styles.phrase}>&#34;Um mundo melhor para as crianças&#34;</h3>
        </div>

        <section className={styles.content}>

          <Card
            corFundoHeader="bg-brand-4"
            listaCoresCirculos={["bg-brand-1", "bg-brand-2", "bg-brand-5"]}
            imagem={CIEE}
            textoAlternativoImagem="Centro de Integração Empresa-Escola"
            coresSinal={["#BC54F0", "#F5487E"]}
            corIconeJanela="#73D676"
           />

            <div className={styles["content-card"]}>
              <h4>Direcionado à jovens e pais</h4>
              <h2>Aulão de Português</h2>
              <p>O aulão acontece pelo Youtube, uma vez no mês com os seguintes temas: como fazer uma redação; reforço de português; Enem. </p>
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
              <h4>De 7 à 14 anos </h4>
              <h2>Reforço escolar no MGC</h2>
              <p>As aulas de reforço escolar focam em determinados tópicos nos quais os alunos apresentem dificuldades de compreensão, auxiliando-o a captar melhor os conteúdos e melhorar sua performance escolar. </p>
              <Button title="Inscrever-se!"/>
            </div>
          
        </section>
      
      </main>

      <Footer />
    </>
  );
}