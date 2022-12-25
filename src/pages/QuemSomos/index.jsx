import { Card } from "../../components/Cards";
import { Header } from "../../components/Header";
import { TextIcon } from "./Text-icon";
import styles from "./styles.module.css";
import teatro from "../../assets/imgs/fotos/teatro.svg";

export function QuemSomos() {
  const missaoTexto =
    "Contribuir na construção do futuro das crianças, adolescentes e seus familiares promover transformações humanas, sociais e econômicas; viabilizar a justiça social através da educação e da profissionalização dos jovens que vivem em locais periféricos do Rio de Janeiro.";
  const visaoTexto =
    "A educação, a arte e a cultura são os meios de emergir enquanto cidadão, e juntos somos a mudança que queremos para a nossa sociedade; acreditando que cada um é a mudança que deseja para o mundo, tornamos possível o sonho de uma sociedade justa e igualitária. ";
  const valoresTexto =
    "Valorizar e incentivar a arte, a cultura e a educação; democratizar, por meio da cidadania cultural, o acesso aos centros culturais, esportivos, acadêmicos e profissionalizantes; desenvolver os jovens de hoje, para a sociedade de amanhã";

  return (
    <>
      <Header />
      <main className={`bg-brand-2 column flex ${styles.wrapper}`}>
        <div>
          <h1 className={`title-1 ${styles.textCenter}`}>Quem somos</h1>
          <section
            className={`flex column ${styles.section} ${styles.sectionValores}`}
          >
            <TextIcon
              textContent={missaoTexto}
              title="Missão"
              iconColor="rosa"
            />
            <TextIcon textContent={visaoTexto} title="Visão" iconColor="azul" />
            <TextIcon
              textContent={valoresTexto}
              title="Valores"
              iconColor="roxa"
            />
          </section>
        </div>
        <section
          className={`align-center flex ${styles.section} ${styles.sectionCard}`}
        >
          <Card
            corFundoHeader="bg-brand-4"
            listaCoresCirculos={["bg-brand-1", "bg-brand-3", "bg-brand-2"]}
            imagem={teatro}
            textoAlternativoImagem="menina segurando cartaz fazendo esparcate, ao fim, duas crianças segurando um cartaz e uma menina segurando a barra do seu vestido"
            sinal="interrogação"
            coresSinal={["#F5487E", "#FFCF32"]}
            corIconeJanela="#BC54F0"
          />
          <div className={styles.textSobre}>
            <h2 className="title-2">Sobre nós</h2>
            <p className="text-2">
              O projeto Minhas Grandes Crianças é uma iniciativa independente
              que nasceu em 2010 e permanece atuando há mais de uma década no
              Bairro Anchieta, localizado na Zona Norte da Capital do Rio de
              Janeiro. Carinhosamente chamado por MGC, abreviação Minhas Grandes
              Crianças, a organização sempre busca promover o desenvolvimento
              social através dos jovens que passam pelo MGC.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
