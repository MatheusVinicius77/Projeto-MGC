import { Card } from "../../components/Cards";
import { Header } from "../../components/Header";
import bailarina from "../../assets/imgs/fotos/dancarina.svg";
import styles from "./styles.module.css";

export function Homepage() {
  return (
    <>
      <Header />
      <section className={`bg-brand-2 flex justify-center ${styles.sectionConteudo}`}>
        <div className="container flex align-center justify-between">
          <article>
            <div className={`column flex ${styles.sectionTexto}`}>
              <div className={styles.sectionTitulo}>
                <h3 className="text-3">Conheça o Projeto</h3>
                <h1 className="title-1">Minhas Grandes Crianças</h1>
              </div>
              <p className="text-2">
                Espaço cultural, social e esportivo que busca desenvolver
                crianças e jovens através da arte e da educação.
              </p>
            </div>
          </article>
          <Card
            corFundoHeader="bg-brand-5"
            listaCoresCirculos={["bg-brand-1", "bg-brand-4", "bg-brand-2"]}
            imagem={bailarina}
            textoAlternativoImagem="menina negra, vestindo uma roupa de bailarina dourada, com as mãos na cintura, sorrindo para a câmera"
            coresSinal={["#F5487E", "#73D676"]}
            corIconeJanela="#F5487E"
          />
        </div>
      </section>
    </>
  );
}
