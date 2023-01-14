import { Header } from "../../components/Header";
import styles from "./styles.module.css";
import { Depoimento } from "../../components/Depoimento";
import setaDireita from "../../assets/imgs/icones/seta-direita.svg";
import setaEsquerda from "../../assets/imgs/icones/seta-esquerda.svg";
import Footer from "../../components/Footer";
import formaRoxa  from "../../assets/imgs/formas/forma-roxa-1.svg";

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { RandomColor } from "./RandomColor.js/RandomColor";

export function Depoimentopage(){
    const [depoimentos, setDepoimentos] = useState([])
    let [offset, setOffset] = useState(0)

    useEffect(()=>{
        axios.get(`https://localhost:3001/Depoimentos/` + offset)
            .then((response)=>{
                setDepoimentos(response.data)
            })
            .catch(() => {
                console.log("Ocorreu um erro")
            })            
    }, [])

    return(
        <>
            <Header/>
            <main className={`bg-brand-1 column flex ${styles.wrapper}`}>
            <h1 className={`title-1 ${styles.textCenter}`}>Depoimentos</h1>
                <section className={`${styles.section} `}>
                    {depoimentos.map((depoimento,key)=>{

                        let color = RandomColor(key)
                        return(
                            <div className={styles.depoimento}>
                                <Depoimento
                                corFundoHeader={color[0]}
                                listaCoresCirculos={color[1]} 
                                corIconeJanela={color[2]}
                                depoimentoObject = {depoimento}
                                /> 
                            </div>
                        )
                    })} 
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