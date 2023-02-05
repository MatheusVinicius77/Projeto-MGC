import { useEffect } from "react";
import { CardHeader } from "../../components/CardHeader";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contatoSchema } from "./contatoSchema";
import Footer from "../../components/Footer";
import styles from "./styles.module.css";
import { InputWrapper } from "./InputWrapper";

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
    resolver: yupResolver(contatoSchema),
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
                <InputWrapper
                  register={register}
                  label="E-mail"
                  name="email"
                  errors={errors}
                  placeholder="Insira seu email"
                />
                <InputWrapper
                  register={register}
                  label="Nome"
                  name="nome"
                  errors={errors}
                  placeholder="Insira seu nome"
                />
              </div>
              <div className={styles.inputGroup}>
                <InputWrapper
                  register={register}
                  label="Telefone"
                  name="telefone"
                  errors={errors}
                  placeholder="Insira seu telefone"
                />
                <InputWrapper
                  register={register}
                  label="Data"
                  name="data"
                  errors={errors}
                  type="date"
                  placeholder="Insira sua data"
                />
              </div>
            </div>
            <InputWrapper
              className={styles.textareaWrapper}
              register={register}
              label="Mensagem"
              name="mensagem"
              errors={errors}
              placeholder="Escreva aqui sua mensagem..."
              tag="textarea"
            />
            <Button title="Enviar" />
          </section>
        </article>
      </main>
      <Footer ondaRoxa />
    </>
  );
}
