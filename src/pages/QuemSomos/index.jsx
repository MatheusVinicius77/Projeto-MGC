import { Header } from "../../components/Header";
import styles from "./styles.module.css";

export function QuemSomos() {
  return (
    <>
      <Header />
      <section className={`bg-brand-2 ${styles.wrapper}`}>
        <h1 className={`title-1 ${styles.textCenter}`}>Quem somos</h1>
      </section>
    </>
  );
}