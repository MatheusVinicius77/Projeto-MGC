import { useEffect } from "react";
import { CardHeader } from "../../components/CardHeader";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./styles.module.css";

export function Contato() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className={`bg-brand-1 column flex justify-center ${styles.sectionWrapper}`}>
        <h1 className={`title-1 ${styles.textCenter}`}>Contato</h1>
        <article className={`${styles.formWrapper}`}>
          <CardHeader
            corFundoHeader="bg-brand-4"
            listaCoresCirculos={["bg-brand-1", "bg-brand-5", "bg-brand-2"]}
            corIconeJanela="#73D676"
          />
          <section className={`bg-grey-0 ${styles.sombra} ${styles.form}`}>
            <div className={styles.inputGroup}>
              <div className={styles.inputWrapper}>
                <label className="text-1 color-grey-1 weight-1">E-mail</label>
                <input />
              </div>
              <div className={styles.inputWrapper}>
                <label className="text-1 color-grey-1 weight-1">Nome</label>
                <input />
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer ondaRoxa />
    </>
  );
}
