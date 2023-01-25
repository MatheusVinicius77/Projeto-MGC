import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Card } from "../../components/Cards";
import Footer from "../../components/Footer";

import CIEE from "../../assets/imgs/fotos/cie.svg";
import circo from "../../assets/imgs/fotos/oficina-circo.svg";

import styles from "./styles.module.css";
import { Button } from "../../components/Button";

export function AreaDoSaber() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className={`bg-brand-2 flex justify-center ${styles.main}`}>
        <div className="container column flex">
          <div className={styles.head}>
            <h2 className="title-1">Área do Saber</h2>
            <p className="text-2">
              &#34;Um mundo melhor para as crianças&#34;
            </p>
          </div>

          <section className={`align-center flex justify-between ${styles.sectionConteudo}`}>
            <Card
              corFundoHeader="bg-brand-4"
              listaCoresCirculos={["bg-brand-1", "bg-brand-2", "bg-brand-5"]}
              imagem={CIEE}
              textoAlternativoImagem="Centro de Integração Empresa-Escola"
              coresSinal={["#BC54F0", "#F5487E"]}
              corIconeJanela="#73D676"
            />

            <div className={`flex column ${styles.textoCard}`}>
              <h3 className="text-2 weight-1">Direcionado à jovens e pais</h3>
              <h2 className="title-2">Aulão de Português</h2>
              <p className="text-2">
                O aulão acontece pelo Youtube, uma vez no mês com os seguintes
                temas: como fazer uma redação; reforço de português; Enem.
              </p>
              <a
                href="https://forms.gle/hejEGrVN7gPMCAh5A"
                target="_blank"
                rel="noreferrer"
              >
                <Button title="Inscreva-se" />
              </a>
            </div>
          </section>

          <section
            className={`align-center flex justify-between row-reverse ${styles.sectionConteudo}`}
          >
            <Card
              corFundoHeader="bg-brand-1"
              listaCoresCirculos={["bg-brand-5", "bg-brand-4", "bg-brand-2"]}
              imagem={circo}
              textoAlternativoImagem="Centro de Integração Empresa-Escola"
              coresSinal={["#BC54F0", "#F5487E"]}
              corIconeJanela="#F5487E"
            />

            <div className={`flex column ${styles.textoCard}`}>
              <h3 className="text-2 weight-1">De 7 à 14 anos </h3>
              <h2 className="title-2">Reforço escolar no MGC</h2>
              <p className="text-2">
                As aulas de reforço escolar focam em determinados tópicos nos
                quais os alunos apresentem dificuldades de compreensão,
                auxiliando-o a captar melhor os conteúdos e melhorar sua
                performance escolar.
              </p>
              <a
                href="https://forms.gle/hejEGrVN7gPMCAh5A"
                target="_blank"
                rel="noreferrer"
              >
                <Button title="Inscreva-se" />
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
