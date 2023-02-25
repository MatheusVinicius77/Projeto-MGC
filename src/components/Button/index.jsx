import styles from "./styles.css"

export function Button({title, size = false}){
  return( 
      <div className={styles.buttons}>
        <button className="size botao">{title}</button>
      </div>
  )
}