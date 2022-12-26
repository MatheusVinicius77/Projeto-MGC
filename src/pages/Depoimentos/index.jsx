
import { Header } from "../../components/Header";
import styles from "./styles.module.css";
import { Depoimento } from "../../components/Depoimento";

export function Depoimentopage(){
    return(
        <>
            <Header/>
            <main className={`bg-brand-1 column flex ${styles.wrapper}`}>
            <h1 className={`title-1 ${styles.textCenter}`}>Depoimentos</h1>
                <section className={`${styles.section} `}>
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
        </>
    );
}