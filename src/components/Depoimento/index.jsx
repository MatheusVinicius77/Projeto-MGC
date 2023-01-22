import styles from "./styles.module.css";
import { CardHeader } from "../CardHeader";

export function Depoimento({
    corFundoHeader,
    listaCoresCirculos,
    corIconeJanela,
    depoimentoObject,
}) {

    return (
        <div className={styles.cardWrapper}>
            <article className={styles.card}>
                <CardHeader
                    className={styles.sombra}
                    corFundoHeader={corFundoHeader}
                    listaCoresCirculos={listaCoresCirculos}
                    corIconeJanela={corIconeJanela}
                />
                <article className={`bg-grey-0 column flex ${styles.depoimento}  ${styles.sombra}`}>
                    <div className={`flex ${styles.depoimentoInfo}`}>
                        <figure className={styles.boxFoto}>
                            <img src={depoimentoObject.imagem} className={styles.img} />
                        </figure>
                        <article className={`flex column ${styles.infoAutor}`}>
                            <h2 className="title-2">{depoimentoObject.autor}</h2>
                            <p className="text-3 color-grey-1">
                                {depoimentoObject.status}
                            </p>
                        </article>
                    </div>
                    <p className="text-3 color-grey-1">
                        {depoimentoObject.texto}
                    </p>
                </article>
            </article>
        </div>
    );
}
