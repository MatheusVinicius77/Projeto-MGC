import { Card } from "../../components/Cards";
import { Header } from "../../components/Header";
import bailarina from "../../assets/imgs/fotos/dancarina.svg";
import teatro from "../../assets/imgs/fotos/teatro.svg";
import lista from "../../assets/imgs/fotos/lista.svg";
import styles from "./styles.module.css";
import { Button } from "../../components/Button";
import formaAmarelaHeader from "../../assets/imgs/formas/forma-amarela-4.svg";
import formaAmarelaApadrinhamentos from "../../assets/imgs/formas/forma-amarela-2.svg";
import formaRoxaOficinas from "../../assets/imgs/formas/forma-roxa-1.svg";
import formaRoxaApadrinhamento from "../../assets/imgs/formas/forma-roxa-3.svg";
import { Depoimento } from "../../components/Depoimento";

export function Homepage() {
  return (
    <>
      <Header />
      <div className={`column flex justify-center ${styles.sectionWrapper}`}>
        <section
          className="bg-brand-2 flex justify-center"
        >
          <div className={`container flex align-center justify-between ${styles.sectionConteudo}`}>
            <article>
              <div className={`column flex ${styles.sectionTexto}`}>
                <div className={styles.sectionTitulo}>
                  <h3 className="text-3">Conheça o Projeto</h3>
                  <h1 className="title-1 weight-1">Minhas Grandes Crianças</h1>
                </div>
                <p className="text-2">
                  Espaço cultural, social e esportivo que busca desenvolver
                  crianças e jovens através da arte e da educação.
                </p>
                <Button title="Quero ser voluntário!" />
              </div>
            </article>
            <Card
              corFundoHeader="bg-brand-5"
              listaCoresCirculos={["bg-brand-1", "bg-brand-4", "bg-brand-2"]}
              imagem={bailarina}
              textoAlternativoImagem="menina negra, vestindo uma roupa de bailarina dourada, com as mãos na cintura, sorrindo para a câmera"
              coresSinal={["#F5487E", "#73D676"]}
              corIconeJanela="#F5487E"
            />
          </div>
        </section>
        <section
          className="align-center bg-brand-1 flex column justify-center"
        >
          <img src={formaAmarelaHeader} alt="" />
          <div className={`container flex align-center justify-between ${styles.sectionConteudo}`}>
            <Card
              corFundoHeader="bg-brand-4"
              listaCoresCirculos={["bg-brand-1", "bg-brand-3", "bg-brand-2"]}
              imagem={teatro}
              textoAlternativoImagem="menina segurando cartaz fazendo esparcate, ao fim, duas crianças segurando um cartaz e uma menina segurando a barra do seu vestido"
              coresSinal={["#F5487E", "#FFCF32"]}
              sinal="interrogação"
              corIconeJanela="#BC54F0"
            />
            <article>
              <div className={`column flex ${styles.sectionTexto}`}>
                <h2 className="title-2 weight-1">Quem Somos</h2>
                <p className="text-2">
                  Uma iniciativa independente e sem fins lucrativos, que nasceu
                  em 2010, atua e situa-se no Bairro do Anchieta, Zona Norte da
                  capital Rio de Janeiro.
                </p>
                <Button title="Conheça!" />
              </div>
            </article>
          </div>
        </section>
        <section
          className="align-center bg-brand-2 column flex justify-center"
        >
          <img src={formaRoxaOficinas} alt="" />
          <div className={`container flex align-center justify-between ${styles.sectionConteudo}`}>
            <article>
              <div className={`column flex ${styles.sectionTexto}`}>
                <h2 className="title-2 weight-1">Projetos e oficinas</h2>
                <p className="text-2">
                  Estamos, atualmente, retornando, de forma gradual, as
                  atividades de todas as oficinas. Antes da pandemia contávamos
                  com professores voluntários que hoje não podem mais atuar no
                  projeto, necessitando do pagamento de alguns educadores para
                  que possamos retomar 100% com todas as oficinas.
                </p>
                <Button title="Ver projetos e oficinas!" />
              </div>
            </article>
            <Card
              corFundoHeader="bg-brand-5"
              listaCoresCirculos={["bg-brand-1", "bg-brand-4", "bg-brand-3"]}
              imagem={lista}
              textoAlternativoImagem="placa com uma lista de atividades fornecida pelo projeto mgc"
              sinal="cursor"
              corIconeJanela="#BC54F0"
            />
          </div>
        </section>
        <section
          className="align-center bg-brand-1 column flex justify-center"
        >
          <img src={formaAmarelaApadrinhamentos} alt="" />
          <div className={`container flex align-center justify-between ${styles.sectionConteudo}`}>
            <Card
              corFundoHeader="bg-brand-4"
              listaCoresCirculos={["bg-brand-1", "bg-brand-4", "bg-brand-3"]}
              imagem={bailarina}
              textoAlternativoImagem="menina negra, vestindo uma roupa de bailarina dourada, com as mãos na cintura, sorrindo para a câmera"
              coresSinal={["#FFCF32", "#73D676"]}
              corIconeJanela="#73D676"
            />
            <article>
              <div className={`column flex ${styles.sectionTexto}`}>
                <h2 className="title-2 weight-1">Apadrinhamento</h2>
                <p className="text-2">
                  Apadrinhar uma criança é um ato de amor! Acolher um futuro é
                  abrir uma infinidade de possibilidades a quem precisa!
                  Apadrinhe uma criança e seja parte da transformação!
                </p>
                <Button title="Apadrinhe uma criança!" />
              </div>
            </article>
          </div>
        </section>
        <section
          className="align-center bg-brand-2 column flex justify-center"
        >
          <img src={formaRoxaApadrinhamento} alt="" />
          <div className={`container column flex align-center justify-center ${styles.sectionConteudo}`}>
            <h2 className={`title-2 weight-1 ${styles.tituloDepoimento}`}>Depoimentos</h2>
            <Depoimento corFundoHeader="bg-brand-4" listaCoresCirculos={["bg-brand-1", "bg-brand-3", "bg-brand-2"]} corIconeJanela="#73D676" />
          </div>
        </section>
      </div>
    </>
  );
}
