import styles from "./styles.module.css";
import { IconeExclamacao } from "./IconeExclamacao";
import { IconeInterrogacao } from "./IconeInterrogacao";
import { IconeCursor } from "./IconeCursor";

import { CardHeader } from "../CardHeader";

export function Card({
  corFundoHeader,
  className,
  listaCoresCirculos,
  imagem,
  textoAlternativoImagem,
  sinal,
  coresSinal,
  corIconeJanela,
}) {
  return (
    <div className={`${styles.cardWrapper} ${className}`}>
      <article className={styles.card}>
        <CardHeader
          className={styles.sombra}
          corFundoHeader={corFundoHeader}
          listaCoresCirculos={listaCoresCirculos}
          corIconeJanela={corIconeJanela}
        />
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
        <IconeCursor />
      )}
    </div>
  );
}
