import { Header } from "../../components/Header";
import styles from "./styles.module.css";
import { Depoimento } from "../../components/Depoimento";
import setaDireita from "../../assets/imgs/icones/seta-direita.svg";
import setaEsquerda from "../../assets/imgs/icones/seta-esquerda.svg";
import Footer from "../../components/Footer";
import formaRoxa  from "../../assets/imgs/formas/forma-roxa-1.svg";
export function Depoimentopage(){
    return(
        <>
            <Header/>
            <main className={`bg-brand-1 column flex ${styles.wrapper}`}>
            <h1 className={`title-1 ${styles.textCenter}`}>Depoimentos</h1>
                <section className={`${styles.section} `}>
                    {/* AINDA NÃO HÁ LÓGICA COM O BANCO DE DADOS */}
                    <div className={styles.depoimento}>
                        <Depoimento 
                        corFundoHeader="bg-brand-2" 
                        listaCoresCirculos={["bg-brand-1", "bg-brand-2", "bg-brand-3"]} 
                        corIconeJanela="#73D676" 
                        /> 
                    </div>

                    <div className={styles.depoimento}>
                        <Depoimento 
                        corFundoHeader="bg-brand-3" 
                        listaCoresCirculos={["bg-brand-1", "bg-brand-2", "bg-brand-3"]} 
                        corIconeJanela="#F5487E" 
                        />
                    </div>

                    <div className={styles.depoimento}>
                        <Depoimento 
                        corFundoHeader="bg-brand-5" 
                        listaCoresCirculos={["bg-brand-1", "bg-brand-2", "bg-brand-3"]} 
                        corIconeJanela="#3FB9FF" 
                        />
                    </div>
                </section>                                  
            </main>
            {/* NAVEGAÇÃO POR HORA SEM FUNCIONAMENTO */}
            <nav className={`bg-brand-1 column ${styles.nav}`}>
                {/* SETAS POR HORA ESTÃO SEM LÓGICA */}
                <ul className={`flex ${styles.list}`}>
                    {/* SEM DESTAQUE DE PÁGINA ATUAL POR HORA */}
                    <li>
                        <button type="button" className={`bg-brand-1`}>
                            <img src={`${setaEsquerda}`} className={styles.setaEsquerda}/>
                        </button>
                    </li>
                    
                    <li>
                        <button type="button" className={`weight-1 title-1 bg-brand-1  ${styles.listItem} ${styles.pageStatus}`}>1</button>
                    </li>

                    <li>
                        <button type="button" className={`weight-1 title-1 bg-brand-1  ${styles.listItem}`}>2</button>
                    </li>

                    <li>
                        <button type="button" className={`weight-1 title-1 bg-brand-1  ${styles.listItem}`}>3</button>
                    </li>

                    <li>
                        <h3 className={`weight-1 title-1`}>...</h3>
                    </li>
                    
                    <li>
                        <button type="button" className={`weight-1 title-1 bg-brand-1  ${styles.listItem}`}>12</button>
                    </li>

                    <li>
                        <button type="button" className={`bg-brand-1`}>
                            <img src={`${setaDireita}`} className={styles.setaDireita}/>
                        </button>
                    </li>
                </ul>
            </nav> 
            <Footer ondaRoxa={formaRoxa}/>
        </>
    );
}