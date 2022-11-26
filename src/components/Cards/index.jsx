import iconeMinimizacao from "../../assets/imgs/icones/traco.svg";
import iconeFechar from "../../assets/imgs/icones/x.svg";

import styles from "./styles.module.css";

import { IconeJanela } from "./IconeJanela";

export function Card({
  corFundoHeader,
  listaCoresCirculos,
  imagem,
  textoAlternativoImagem,
  sinal,
  textoAlternativoSinal,
  corIconeJanela,
}) {
  return (
    <article className={styles.card}>
      <header className={`${styles.cardHeader} ${corFundoHeader}`}>
        <div className={`${styles.circulosWrapper}`}>
          {listaCoresCirculos.map((cor) => {
            return <span className={`${styles.circulo} ${cor}`}></span>;
          })}
        </div>
        <div className={styles.icones}>
          <img
            className={styles.icone}
            src={iconeMinimizacao}
            alt="ícone de minimização"
          />
          <IconeJanela cor={corIconeJanela} />
          <img
            className={styles.icone}
            src={iconeFechar}
            alt="ícone de fechamento"
          />
        </div>
      </header>
      <img
        className={styles.cardImg}
        src={imagem}
        alt={textoAlternativoImagem}
      />
      <img
        className={styles.cardSinal}
        src={sinal}
        alt={textoAlternativoSinal}
      />
    </article>
  );
}
