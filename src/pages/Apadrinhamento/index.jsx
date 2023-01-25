import { useEffect } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./styles.module.css";

export function Apadrinhamento() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className={`bg-brand-2 column flex ${styles.main}`}>
        <div className={`align-center column flex ${styles.titleWrapper}`}>
          <h1 className="title-1">Apadrinhe uma Criança</h1>
          <h3 className="text-2">
            "Juntos podemos ser a mudança que queremos para o mundo"
          </h3>
        </div>
      </main>
      <Footer />
    </>
  );
}
