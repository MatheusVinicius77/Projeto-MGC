import { useEffect } from "react";
import { CardHeader } from "../../components/CardHeader";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./styles.module.css";
import { Button } from "../../components/Button";

export function Contato() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main
        className={`bg-brand-1 column flex justify-center ${styles.sectionWrapper}`}
      >
        <h1 className={`title-1 ${styles.textCenter}`}>Contato</h1>
        <article className={`container ${styles.formWrapper}`}>
          <CardHeader
            className={styles.sombra}
            corFundoHeader="bg-brand-4"
            listaCoresCirculos={["bg-brand-1", "bg-brand-5", "bg-brand-2"]}
            corIconeJanela="#73D676"
          />
          <section className={`bg-grey-0 ${styles.sombra} ${styles.form}`}>
            <div className={styles.formGroupTop}>
              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <label className="text-1 color-grey-1 weight-1">E-mail</label>
                  <input className="text-4 color-grey-1" placeholder="Insira seu email" />
                </div>
                <div className={styles.inputWrapper}>
                  <label className="text-1 color-grey-1 weight-1">Nome</label>
                  <input className="text-4 color-grey-1" placeholder="Insira seu nome" />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <label className="text-1 color-grey-1 weight-1">
                    Telefone
                  </label>
                  <input className="text-4 color-grey-1" placeholder="Insira seu telefone" />
                </div>
                <div className={styles.inputWrapper}>
                  <label className="text-1 color-grey-1 weight-1">Data</label>
                  <input className="text-4 color-grey-1" placeholder="Insira a data" type="date" />
                </div>
              </div>
            </div>
            <div className={`${styles.textareaWrapper} ${styles.inputWrapper}`}>
              <label className="text-1 color-grey-1 weight-1">Mensagem</label>
              <textarea className="text-4 color-grey-1" placeholder="Escreva aqui sua mensagem" />
            </div>
            <Button title="Enviar" />
          </section>
        </article>
      </main>
      <Footer ondaRoxa />
    </>
  );
}
