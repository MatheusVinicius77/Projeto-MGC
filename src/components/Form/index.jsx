import style from "./styles.module.css"
import X from "../../assets/imgs/icones/x.svg"
import Reduzir from "../../assets/imgs/icones/minimiza-amarelo.svg"
import Minimizar from "../../assets/imgs/icones/traco.svg"
import { useState } from "react"


const maskPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)$/, "$1");
  };

  const maskDate = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  };


export default function Form(){

    const [phone, setPhone] = useState("");  
    const [date, setDate] = useState("");
    const [displayNome, setDisplayNome] = useState("");
    const [displayEmail, setDisplayEmail] = useState("");
    const [displayPhone, setDisplayPhone] = useState("");
    const [displayMsg, setDisplayMsg] = useState("");
    const [displayDate, setDisplayDate] = useState("");

    
    const verficationNome= (nome) =>{
        if(nome === ""){
            setDisplayNome("")
            setDisplayNome("#F5487E")
        } else {
            setDisplayNome("")
            setDisplayNome("white");
        }
    }

    const verificationPhone = (phone) =>{
        if(phone === ""){
            setDisplayPhone("")
            setDisplayPhone("#F5487E")
        } else {
            setDisplayPhone("white")
        }
    }

    const verificationMsg =(msg)=> {
        if(msg === ""){
            setDisplayMsg("");
            setDisplayMsg("#F5487E");
        } else{
            setDisplayMsg("");
            setDisplayMsg("white");
        }
    }

    const verficationEmail= (email) =>{
        if(email.includes("@") || email === ""){
            setDisplayEmail("");
            setDisplayEmail("white");
        } else {
            setDisplayEmail("")
            setDisplayEmail("#F5487E");
        }
    }

    const verificationDate = (date)=>{
        if(date ===""){
            setDisplayDate("");
            setDisplayDate("#F5487E");
        } else {
            setDisplayDate("");
            setDisplayDate("white");
        }
    }


    const onSubmit =(e) =>{
        e.preventDefault()
        const nome = e.target.elements.nome.value;
        const email =e.target.elements.email.value;
        const phone =e.target.elements.phone.value;
        const msg =e.target.elements.msg.value;
        const date = e.target.elements.date.value;

        console.log(nome, email);
        verificationPhone(phone);
        verficationEmail(email);
        verficationNome(nome);
        verificationMsg(msg);
        verificationDate(date);
        
        
    }

    return(
    <div className={`${style.container}`}>
        <div className={` ${style.header} bg-brand-4 flex align-center justify-between`}>
            <div className="flex">
                <div className={` ${style.ball} bg-brand-1`}></div>
                <div className={` ${style.ball} bg-brand-5`}></div>
                <div className={` ${style.ball} bg-brand-2`}></div>
            </div>
            <div className="section-default flex">
                <img className ={`${style.minimizar}`}src={Minimizar} alt=""/>
                <img src={`${Reduzir}`} alt=""/>
                <img src={X} alt=""/>
            </div>
        </div>
        <form action="" className="flex wrap align-center justify-center" onSubmit={onSubmit}>
            <div className={`${style.item}`}>
            <label className={`${style.label}`}>E-mail</label>
            <input type="text"
            className={`${style.inputForm} email`}
            placeholder="E-mail"
            name="email"
            />
            <span className={`${style.span} flex column`} style={{color: displayEmail}}>O Email de conter @</span>
            </div>
            <div className={`${style.item}`}>
            <label className={`${style.label}`}>Nome</label>
            <input
            type="text"
            className={`${style.inputForm}`}
            placeholder="Nome"
            name="nome" />
            <span className={`${style.span} flex column`} style={{color: displayNome}}>Informe seu Nome</span>
            </div>
            <div className={`${style.item}`}>
            <label className={`${style.label}`}>Telefone</label>
            <input
                className={`${style.inputForm}`}
                placeholder="(xx) xxxxx-xxxx" value={phone}
                onChange={(e) => setPhone(maskPhone(e.target.value))}
                name="phone"/>
            <span className={`${style.span} flex column`} style={{color: displayPhone}}>Infrome seu Telefone</span>
            </div>
            <div className={`${style.item} flex column`}>
            <label className={`${style.label}`}>Data</label>
            <input 
            type="text"
            className={`${style.inputForm}`}
            placeholder="xx/xx/xx"
            value={date}
            onChange={(e) => setDate(maskDate(e.target.value))}
            name="date"/>
            <span className={`${style.span}`} style={{color: displayDate}}>Informe uma data</span>
            </div>
            <div className={`${style.item} flex column`}>
            <label className={`${style.label}`}>Mensagem</label>
            <input type="text" 
            className={`${style.inputForm} ${style.mensagem}`} 
            placeholder="Escreva sua mensagem aqui..."
            name="msg"/>
            <span className={`${style.span}`} style={{color: displayMsg }}>Escreva alguma mensagem</span>
            <input type="submit" className={`${style.button} text-3`}/>
            </div>

        </form>
    </div>
    )
}