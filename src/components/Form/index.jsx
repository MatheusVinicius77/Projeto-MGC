import style from "./styles.module.css"
import X from "../../assets/imgs/icones/x.svg"
import Minimizar from "../../assets/imgs/icones/traco.svg"
export default function Form(){

    return(
    <div className={`${style.container}`}>
        <div className={` ${style.header} bg-brand-4 flex align-center justify-between`}>
            <div className="flex">
                <div className={` ${style.ball} bg-brand-1`}></div>
                <div className={` ${style.ball} bg-brand-5`}></div>
                <div className={` ${style.ball} bg-brand-2`}></div>
            </div>
            <div className="section-default flex">
                <img className ={`${style.minimizar}`}src={Minimizar}/>
                <img src={X}/>
            </div>
        </div>
        <form action="" className="flex wrap align-center justify-center " >
            <div className={`${style.item}`}>
            <label className={`${style.label}`}>E-mail</label>
            <input type="text" className={`${style.inputForm}`} placeholder="E-mail" />
            </div>
            <div className={`${style.item}`}>
            <label className={`${style.label}`}>Nome</label>
            <input type="text" className={`${style.inputForm}`} placeholder="Nome" />
            </div>
            <div className={`${style.item}`}>
            <label className={`${style.label}`}>Telefone</label>
            <input type="number" className={`${style.inputForm}`} placeholder="(xx) xxxxx-xxxx"/>
            </div>
            <div className={`${style.item}`}>
            <label className={`${style.label}`}>Data</label>
            <input type="text" className={`${style.inputForm}`} placeholder="xx/xx/xx"/>
            </div>
            <div className={`${style.item} flex column`}>
            <label className={`${style.label}`}>Mensagem</label>
            <input type="text" className={`${style.inputForm} ${style.mensagem}`} placeholder="Mensagem"/>
            <span className={`${style.span}`}>A mensagem deve conter até xx caracteres</span>
            <input type="submit" className={`${style.button} text-3`}/>
            </div>

        </form>
    </div>
    )
}