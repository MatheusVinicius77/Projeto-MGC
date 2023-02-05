import { useEffect } from "react";
import { CardHeader } from "../../components/CardHeader";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import { contatoSchema } from "./contatoSchema";
import Footer from "../../components/Footer";
import styles from "./styles.module.css";

export function Contato() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(contatoSchema)
  });

  return (
    <>
      <Header />
      <main
        className={`bg-brand-1 column flex justify-center ${styles.sectionWrapper}`}
      >
        <h1 className={`title-1 ${styles.textCenter}`}>Contato</h1>
        <article className={`container ${styles.formWrapper}`}>
          <CardHeader
            className={styles.sombra}
            corFundoHeader="bg-brand-4"
            listaCoresCirculos={["bg-brand-1", "bg-brand-5", "bg-brand-2"]}
            corIconeJanela="#73D676"
          />
          <section className={`bg-grey-0 ${styles.sombra} ${styles.form}`}>
            <div className={styles.formGroupTop}>
              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <label className="text-1 color-grey-1 weight-1">E-mail</label>
                  <input
                    {...register("email")}
                    className="text-4 color-grey-1"
                    placeholder="Insira seu email"
                    autoComplete="off"
                  />
                  <span className="text-4 color-brand-4">{errors.email?.message}</span>
                </div>
                <div className={styles.inputWrapper}>
                  <label className="text-1 color-grey-1 weight-1">Nome</label>
                  <input
                    className="text-4 color-grey-1"
                    placeholder="Insira seu nome"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <label className="text-1 color-grey-1 weight-1">
                    Telefone
                  </label>
                  <input
                    className="text-4 color-grey-1"
                    placeholder="Insira seu telefone"
                    autoComplete="off"
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <label className="text-1 color-grey-1 weight-1">Data</label>
                  <input
                    className="text-4 color-grey-1"
                    placeholder="Insira a data"
                    autoComplete="off"
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.textareaWrapper} ${styles.inputWrapper}`}>
              <label className="text-1 color-grey-1 weight-1">Mensagem</label>
              <textarea
                className="text-4 color-grey-1"
                placeholder="Escreva aqui sua mensagem"
                autoComplete="off"
              />
            </div>
            <Button title="Enviar" />
          </section>
        </article>
      </main>
      <Footer ondaRoxa />
    </>
  );
}
