import styles from "./styles.css"

//Title = Nome interno do botão
//Size = Se o tamanho da fonte for diferente (Header e Formulário)

export function Button({title, size = false}){
  return( 
      <div className={styles.buttons}>
        <button className={`${size}`}>{title}</button>
      </div>
  )
}