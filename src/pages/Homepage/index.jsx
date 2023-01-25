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
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";

export function Homepage() {
  const depoimentosRef = useRef();
  const [depoimentosSection, setDepoimentosSection] = useState(0);
  const [intervalo, setIntervalo] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [todosDepoimentos, settodosDepoimentos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api-projetomgc.onrender.com/Depoimentos`)
      .then((response) => {
        settodosDepoimentos(response.data);
        setLoading(false);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (intervalo) {
      clearInterval(intervalo);
    }

    const novoIntervalo = setInterval(() => {
      setDepoimentosSection(depoimentosRef.current);

      if (depoimentosSection) {
        const tamanhoDepoimento = depoimentosSection.offsetWidth + 40;
        const tamanhoTotalScroll = depoimentosSection.scrollWidth;

        const tamanhoScrollAumentado =
          depoimentosSection.scrollLeft + tamanhoDepoimento;
        if (tamanhoScrollAumentado < tamanhoTotalScroll) {
          depoimentosSection.scrollLeft = tamanhoScrollAumentado;
        } else {
          depoimentosSection.scrollLeft = 0;
        }
      }
    }, 5000);

    setIntervalo(novoIntervalo);
  }, [depoimentosSection]);

  return (
    <>
      <Header />
      <div className={`column flex justify-center ${styles.sectionWrapper}`}>
        <section className="bg-brand-2 flex justify-center">
          <div
            className={`container flex align-center justify-between row-reverse ${styles.sectionConteudo}`}
          >
            <Card
              corFundoHeader="bg-brand-5"
              listaCoresCirculos={["bg-brand-1", "bg-brand-4", "bg-brand-2"]}
              imagem={bailarina}
              textoAlternativoImagem="menina negra, vestindo uma roupa de bailarina dourada, com as mãos na cintura, sorrindo para a câmera"
              coresSinal={["#F5487E", "#73D676"]}
              corIconeJanela="#F5487E"
            />
            <article>
              <div className={`column flex ${styles.sectionTexto}`}>
                <div className={`flex column ${styles.sectionTitulo}`}>
                  <h3 className="text-3">Conheça o Projeto</h3>
                  <h1 className="title-1 weight-1">Minhas Grandes Crianças</h1>
                </div>
                <p className="text-2">
                  Espaço cultural, social e esportivo que busca desenvolver
                  crianças e jovens através da arte e da educação.
                </p>
                <a href="https://forms.gle/CNzp1BqFE4Axy3n56" target="_blank" rel="noreferrer">
                <Button title="Quero ser voluntário!" />
                </a>
              </div>
            </article>
          </div>
        </section>
        <section className="align-center bg-brand-1 flex column justify-center">
          <img className={styles.forma} src={formaAmarelaHeader} alt="" />
          <div
            className={`container flex align-center justify-between ${styles.sectionConteudo}`}
          >
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
                <Link to="/quemsomos">
                  <Button title="Conheça!" />
                </Link>
              </div>
            </article>
          </div>
        </section>
        <section className="align-center bg-brand-2 column flex justify-center">
          <img className={styles.forma} src={formaRoxaOficinas} alt="" />
          <div
            className={`container flex align-center justify-between row-reverse ${styles.sectionConteudo}`}
          >
            <Card
              corFundoHeader="bg-brand-5"
              listaCoresCirculos={["bg-brand-1", "bg-brand-4", "bg-brand-3"]}
              imagem={lista}
              textoAlternativoImagem="placa com uma lista de atividades fornecida pelo projeto mgc"
              sinal="cursor"
              corIconeJanela="#BC54F0"
            />
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
                <Link to="/projetos">
                  <Button title="Ver projetos e oficinas!" />
                </Link>
              </div>
            </article>
          </div>
        </section>
        <section className="align-center bg-brand-1 column flex justify-center">
          <img
            className={styles.forma}
            src={formaAmarelaApadrinhamentos}
            alt=""
          />
          <div
            className={`container flex align-center justify-between ${styles.sectionConteudo}`}
          >
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
                <Link to="/apadrinhamento">
                  <Button title="Apadrinhe uma criança!" />
                </Link>
              </div>
            </article>
          </div>
        </section>
        <section className="align-center bg-brand-2 column flex justify-center">
          <img className={styles.forma} src={formaRoxaApadrinhamento} alt="" />
          <div
            className={`container column flex align-center justify-center ${styles.sectionConteudo} ${styles.sectionDepoimento}`}
          >
            <h2 className="title-2 weight-1">Depoimentos</h2>
            <section
              className={`align-center flex ${styles.depoimentosWrapper}`}
              ref={depoimentosRef}
            >
              {loading ? (
                <div className={`align-center flex justify-center ${styles.loading}`}>
                  <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="ícone de caregamento girando" />
                </div>
              ) : (
                todosDepoimentos.map((depoimento) => {
                  const palavrasDepoimento = depoimento.texto.split(" ");

                  if (palavrasDepoimento.length > 38) {
                    const palavrasRecortadas = palavrasDepoimento.slice(0, 37);
                    const novoTexto = palavrasRecortadas.join(" ") + "...";
                    depoimento = { ...depoimento, texto: novoTexto };
                  }

                  return (
                    <Depoimento
                      corFundoHeader="bg-brand-4"
                      listaCoresCirculos={[
                        "bg-brand-1",
                        "bg-brand-3",
                        "bg-brand-2",
                      ]}
                      corIconeJanela="#73D676"
                      depoimentoObject={depoimento}
                    />
                  );
                })
              )}
            </section>
            <Link to="/depoimentos">
              <Button title="Saiba mais!" />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
