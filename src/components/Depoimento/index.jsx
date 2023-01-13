import styles from "./styles.module.css";
import { CardHeader } from "../CardHeader";


export function Depoimento({
    corFundoHeader,
    listaCoresCirculos,
    corIconeJanela,
}){
    return(
        <div className={styles.cardWrapper}>
            <article className={styles.card}>
                <CardHeader
                className={styles.sombra}
                corFundoHeader={corFundoHeader}
                listaCoresCirculos={listaCoresCirculos}
                corIconeJanela={corIconeJanela}
                />
                {/* Parte inic */}
                <article className={`bg-grey-0 column flex ${styles.depoimento}  ${styles.sombra}`}>
                    <div className={`flex ${styles.depoimentoInfo}`}>
                        <figure className={styles.boxFoto}>
                            {/* Por hora tem apenas o box, mas irei atualizar para ter imagens */}
                        </figure>
                        <article className={`flex column ${styles.infoAutor}`}>
                            <h2 className="title-2">Nome de quem depõe</h2>
                            {/* Por hora tem apenas o texto padrão no site, mas irei atualizar para ter o respectivo nome do autor */}
                            <p className="text-3 color-grey-1">
                                Status (ex.: voluntário; pai; criança; adolescente)
                                {/* Inacabada. */}
                            </p>
                        </article>
                    </div>
                    <p className="text-3 color-grey-1">
                        Texto do depoimento
                        {/* Inacabada. */}
                    </p>
                </article> 
            </article>
        </div>
    );
}