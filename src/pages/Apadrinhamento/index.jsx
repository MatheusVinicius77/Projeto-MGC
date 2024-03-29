import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Card } from "../../components/Cards";
import { Button } from "../../components/Button";
import criança from "../../assets/imgs/fotos/criança.jpeg";
import Footer from "../../components/Footer";
import styles from "./styles.module.css";

export function Apadrinhamento() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className={`bg-brand-2 flex justify-center ${styles.main}`}>
        <div className="container column flex">
          <div
            className={`align-center column flex ${styles.titleWrapper}`}
          >
            <h2 className="title-1">Apadrinhe uma Criança</h2>
            <p className="text-2">
              "Juntos podemos ser a mudança que queremos para o mundo"
            </p>
          </div>
          <section className={`align-center flex justify-between ${styles.sectionConteudo}`}>
            <Card
              corFundoHeader="bg-brand-4"
              listaCoresCirculos={["bg-brand-1", "bg-brand-2", "bg-brand-5"]}
              imagem={criança}
              textoAlternativoImagem="Centro de Integração Empresa-Escola"
              className={styles.pageCard}
              coresSinal={["#BC54F0", "#F5487E"]}
              corIconeJanela="#FFCF32"
            />
            <section className={`column flex ${styles.textoCard}`}>
              <div className="column flex">
                <p className="text-2">
                  Apadrinhar uma criança é um ato de amor! Acolher um futuro é
                  abrir uma infinidade de possibilidades a quem precisa!
                  Apadrinhe uma criança e seja parte da transformação!
                </p>
                <p className="text-2">
                  Para apadrinhar uma criança entre em contato conosco!
                </p>
              </div>
              <a href="https://web.whatsapp.com/send?phone=+5521967081641" target="_blank" rel="noreferrer">
                <Button title="Whatsapp" />
              </a>
            </section>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
