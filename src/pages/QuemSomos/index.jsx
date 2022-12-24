import { Header } from "../../components/Header";
import styles from "./styles.module.css";
import { TextIcon } from "./Text-icon";

export function QuemSomos() {
  const missaoTexto = "Contribuir na construção do futuro das crianças, adolescentes e seus familiares promover transformações humanas, sociais e econômicas; viabilizar a justiça social através da educação e da profissionalização dos jovens que vivem em locais periféricos do Rio de Janeiro.";
  const visaoTexto = "A educação, a arte e a cultura são os meios de emergir enquanto cidadão, e juntos somos a mudança que queremos para a nossa sociedade; acreditando que cada um é a mudança que deseja para o mundo, tornamos possível o sonho de uma sociedade justa e igualitária. ";
  const valoresTexto = "Valorizar e incentivar a arte, a cultura e a educação; democratizar, por meio da cidadania cultural, o acesso aos centros culturais, esportivos, acadêmicos e profissionalizantes; desenvolver os jovens de hoje, para a sociedade de amanhã";

  return (
    <>
      <Header />
      <main className={`bg-brand-2 ${styles.wrapper}`}>
        <h1 className={`title-1 ${styles.textCenter}`}>Quem somos</h1>
        <section className={`flex column ${styles.section} ${styles.sectionValores}`}>
          <TextIcon textContent={missaoTexto} title="Missão" iconColor="rosa" />
          <TextIcon textContent={visaoTexto} title="Visão" iconColor="azul" />
          <TextIcon textContent={valoresTexto} title="Valores" iconColor="roxa" />
        </section>
      </main>
    </>
  );
}
