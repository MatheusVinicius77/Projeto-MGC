import iconeMinimizacao from "../../assets/imgs/icones/traco.svg";
import iconeFechar from "../../assets/imgs/icones/x.svg";

export function CardHeader () {
    return (
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
    );
}