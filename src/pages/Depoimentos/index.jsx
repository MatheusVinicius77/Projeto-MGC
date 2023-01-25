import { Header } from "../../components/Header";
import styles from "./styles.module.css";
import { Depoimento } from "../../components/Depoimento";
import setaDireita from "../../assets/imgs/icones/seta-direita.svg";
import setaEsquerda from "../../assets/imgs/icones/seta-esquerda.svg";
import Footer from "../../components/Footer";
import formaRoxa from "../../assets/imgs/formas/forma-roxa-1.svg";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { RandomColor } from "./RandomColor.js/RandomColor";

// CONSTANTE QUE DIZ A QUANTIDADE DE DEPOIMENTOS POR PÁGINA/SEÇÃO
const LIMIT = 3;

export function Depoimentopage() {
  const [loading, setLoading] = useState(true);
  // constante que armazena cada grupo/seção de depoimento ()
  const [depoimento, setDepoimento] = useState([]);
  // constante para contagem de todos os depoimentos
  const [todosDepoimentos, settodosDepoimentos] = useState(0);
  // variável que diz quantos botões/seções de depoimentos terá
  let numberPages = Math.ceil(todosDepoimentos / LIMIT);
  //offset é o responsável por pular os depoimentos e ir para outra seção
  let [offset, setOffset] = useState(0);
  // variavél que armazena qual a página atual do usuário
  let [CurrentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://api-projetomgc.onrender.com/Depoimentos/section/` + offset)
      .then((response) => {
        setDepoimento(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("Ocorreu um erro");
      });

    axios
      .get(`https://api-projetomgc.onrender.com/Depoimentos`)
      .then((response) => {
        settodosDepoimentos(response.data.length);
      })
      .catch(() => {
        console.log("Ocorreu um erro");
      });
  }, [offset]);

  function setPage(direction) {
    if (typeof direction === "string") {
      if (direction == "back" && CurrentPage > 1) {
        setOffset(offset - LIMIT);
        setCurrentPage(CurrentPage - 1);
      }
      if (direction == "next" && CurrentPage < numberPages) {
        setOffset(offset + LIMIT);
        setCurrentPage(CurrentPage + 1);
      }
    } else {
      setOffset((direction - 1) * 3);
      setCurrentPage(direction);
    }
  }

  function setButtom(page, numberPages) {
    if (CurrentPage < 5) {
      if (page <= 5) {
        return (
          <li key={page}>
            <button
              className={
                CurrentPage == page
                  ? `weight-1 title-1 bg-brand-1   ${styles.listItem} ${styles.pageStatus}`
                  : `weight-1 title-1 bg-brand-1 ${styles.listItem} `
              }
              onClick={() => setPage(page)}
            >
              {page}
            </button>
          </li>
        );
      } else if (page + 1 == numberPages) {
        return (
          <li key={page}>
            <h3 className={`weight-1 title-1`}>...</h3>
          </li>
        );
      } else if (page == numberPages) {
        return (
          <li key={page}>
            <button
              className={
                CurrentPage == page
                  ? `weight-1 title-1 bg-brand-1   ${styles.listItem} ${styles.pageStatus}`
                  : `weight-1 title-1 bg-brand-1 ${styles.listItem} `
              }
              onClick={() => setPage(page)}
            >
              {page}
            </button>
          </li>
        );
      }
    } else if (CurrentPage >= 5) {
      if (page == 1) {
        return (
          <li key={page}>
            <button
              className={
                CurrentPage == page
                  ? `weight-1 title-1 bg-brand-1   ${styles.listItem} ${styles.pageStatus}`
                  : `weight-1 title-1 bg-brand-1 ${styles.listItem} `
              }
              onClick={() => setPage(page)}
            >
              {page}
            </button>
          </li>
        );
      } else if (page > 1 && page < CurrentPage - 1) {
        if (CurrentPage - 2 == page) {
          return (
            <li key={page}>
              <h3 className={`weight-1 title-1`}>...</h3>
            </li>
          );
        }
      } else if (
        page == CurrentPage - 1 ||
        page == CurrentPage ||
        page == CurrentPage + 1
      ) {
        return (
          <li key={page}>
            <button
              className={
                CurrentPage == page
                  ? `weight-1 title-1 bg-brand-1   ${styles.listItem} ${styles.pageStatus}`
                  : `weight-1 title-1 bg-brand-1 ${styles.listItem} `
              }
              onClick={() => setPage(page)}
            >
              {page}
            </button>
          </li>
        );
      } else if (page > CurrentPage + 1) {
        if (page < numberPages) {
          if (page == numberPages - 1) {
            return (
              <li key={page}>
                <h3 className={`weight-1 title-1`}>...</h3>
              </li>
            );
          }
        } else {
          return (
            <li key={page}>
              <button
                className={
                  CurrentPage == page
                    ? `weight-1 title-1 bg-brand-1   ${styles.listItem} ${styles.pageStatus}`
                    : `weight-1 title-1 bg-brand-1 ${styles.listItem} `
                }
                onClick={() => setPage(page)}
              >
                {page}
              </button>
            </li>
          );
        }
      }
    }
  }

  return (
    <>
      <Header />
      <main className={`bg-brand-1 column flex ${styles.wrapper}`}>
        <h1 className={`title-1 ${styles.textCenter}`}>Depoimentos</h1>
        {loading ? (
          <div className={`align-center flex justify-center ${styles.loading}`}>
            <img
              src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
              alt="ícone de caregamento girando"
            />
          </div>
        ) : (
          <section className="container">
            {depoimento.map((depoimento, key) => {
              let color = RandomColor(key);
              return (
                <div className={styles.depoimento} key={depoimento.id}>
                  <Depoimento
                    corFundoHeader={color[0]}
                    listaCoresCirculos={color[1]}
                    corIconeJanela={color[2]}
                    depoimentoObject={depoimento}
                  />
                </div>
              );
            })}
          </section>
        )}
        <nav className={`bg-brand-1 flex ${styles.nav}`}>
          <ul
            className={`align-center container flex justify-between ${styles.list}`}
          >
            <li>
              <button
                type="button"
                className={`bg-brand-1`}
                onClick={() => {
                  setPage("back");
                }}
              >
                <img
                  src={`${setaEsquerda}`}
                  className={
                    CurrentPage == 1
                      ? `${styles.seta} ${styles.setaOppacity}`
                      : `${styles.seta}`
                  }
                />
              </button>
            </li>
            <div className="align-center flex">
              {Array.from({ length: numberPages })
                .map((_, index) => index + 1)
                .map((page) =>
                  numberPages <= 7
                    ? setButtom(page, numberPages)
                    : setButtom(page, numberPages)
                )}
            </div>
            <li>
              <button
                type="button"
                className={`bg-brand-1`}
                onClick={() => {
                  setPage("next");
                }}
              >
                <img
                  src={`${setaDireita}`}
                  className={
                    CurrentPage == numberPages
                      ? `${styles.seta} ${styles.setaOppacity}`
                      : `${styles.seta}`
                  }
                />
              </button>
            </li>
          </ul>
        </nav>
      </main>
      <Footer ondaRoxa={formaRoxa} />
    </>
  );
}
