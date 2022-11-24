import styles from "./styles.css"

export function Button({title}){
  return(
      <div className={styles.buttons}>
        <button>{title}</button>
      </div>
  )
}