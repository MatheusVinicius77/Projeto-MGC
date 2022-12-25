import pastaRosa from "../../../assets/imgs/icones/pasta-rosa.svg";
import pastaAzul from "../../../assets/imgs/icones/pasta-azul.svg";
import pastaRoxa from "../../../assets/imgs/icones/pasta-roxa.svg";
import styles from "./styles.module.css";

export function TextIcon({title, textContent, iconColor}) {
  const icons = {
    rosa: pastaRosa,
    azul: pastaAzul,
    roxa: pastaRoxa
  }

  return (
    <article className={`align-center flex ${styles.wrapper}`}>
      <img className={styles.icon} src={icons[iconColor]} alt={`ícone de pasta ${iconColor}`} />
      <article className="flex column">
        <h2 className="title-2">{title}</h2>
        <p className="text-2">{textContent}</p>
      </article>
    </article>
  );
}