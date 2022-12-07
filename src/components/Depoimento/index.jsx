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
            </article>
        </div>
    );
}