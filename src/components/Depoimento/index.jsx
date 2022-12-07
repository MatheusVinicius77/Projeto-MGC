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

                <div className={`${styles.cardHeader}  ${styles.sombra}`}>
                    <div className={styles.boxFoto}>
                        {/* Por hora tem apenas o box, mas irei atualizar para ter imagens */}
                    </div>

                    <div className={styles.infoAutor}>
                        <h2 className={styles.nomeAutor}>Nome de quem depõe</h2>
                         {/* Por hora tem apenas o texto padrão no site, mas irei atualizar para ter o respectivo nome do autor */}
                    </div>
                </div> 
            </article>
        </div>
    );
}