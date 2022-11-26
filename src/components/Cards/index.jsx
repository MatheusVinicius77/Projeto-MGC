import iconeMinimizacao from "../../assets/imgs/icones/traco.svg";
import iconeFechar from "../../assets/imgs/icones/x.svg";

import styles from "./styles.module.css";

import { IconeJanela } from "./IconeJanela";
import { IconeExclamacao } from "./IconeExclamacao";
import { IconeInterrogacao } from "./IconeInterrogacao";

export function Card({
  corFundoHeader,
  listaCoresCirculos,
  imagem,
  textoAlternativoImagem,
  sinal,
  coresSinal,
  corIconeJanela,
}) {
  return (
    <div className={styles.cardWrapper}>
      <article className={styles.card}>
        <header className={`${styles.cardHeader} ${corFundoHeader} ${styles.sombra}`}>
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
            <IconeJanela className={styles.icone} cor={corIconeJanela} />
            <img
              className={styles.icone}
              src={iconeFechar}
              alt="ícone de fechamento"
            />
          </div>
        </header>
        <img
          className={`${styles.cardImg}  ${styles.sombra}`}
          src={imagem}
          alt={textoAlternativoImagem}
        />
      </article>
      {!sinal ? (
        <IconeExclamacao cores={coresSinal} />
      ) : sinal == "interrogação" ? (
        <IconeInterrogacao cores={coresSinal} />
      ) : (
        ""
      )}
    </div>
  );
}
