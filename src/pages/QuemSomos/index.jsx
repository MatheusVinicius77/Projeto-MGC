import { Card } from "../../components/Cards";
import { Header } from "../../components/Header";
import { TextIcon } from "./Text-icon";
import styles from "./styles.module.css";
import teatro from "../../assets/imgs/fotos/teatro.svg";
import Footer from "../../components/Footer";

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
        <section className={`container ${styles.section}`}>
          <h2 className={`title-2 ${styles.textCenter}`}>Nossos objetivos</h2>
          <div className={`column flex ${styles.textContent}`}>
            <p className="text-2">
              A educação, a arte e a cultura são os meios e emergir enquanto
              sociedade, e assim, juntos sermos a mudança que queremos para o
              mundo. Acreditar que cada um é a mudança que deseja para o mundo
              torna possível o sonho de uma sociedade igualitária.
            </p>
            <p className="text-2">
              Promover o desenvolvimento das habilidades dos jovens baixa-renda,
              mostrando que existem diversas outras realidades que podem ser
              alcançadas, além daquelas que são impostas pelo meio em que vivem.
            </p>
            <p className="text-2">
              O desenvolvimento social iniciado desde a primeira infância
              permite que os jovens possam se encontrar de acordo com as
              habilidades que possuem e assim, seguir os próprios sonhos.
            </p>
          </div>
        </section>
        <section className={`container ${styles.section}`}>
          <h2 className={`title-2 ${styles.textCenter}`}>Nossa História</h2>
          <div className={`column flex ${styles.textContent}`}>
            <p className="text-2">
              Nossa fundadora, professora, mãe de quatro filhos, moradora do
              Bairro Anchieta – Zona norte da capital fluminense, estava
              inconformada com a falta de acesso que as crianças tinham para
              lazer, educação e cultura.
            </p>
            <p className="text-2">
              Com a invisibilidade do bairro para a agenda cultural municipal, o
              MGC nasceu com o propósito de oferecer lazer e cultura para o
              bairro Anchieta.
            </p>
            <p className="text-2">
              Começamos nossas atividades em 2010, nosso espaço era o terraço da
              casa da fundadora e à medida que o projeto foi expandido, chegamos
              a no momento de não ter mais vaga para as oficinas.
            </p>
            <p className="text-2">
              Com a intenção de ampliar a quantidade e frequência de nossas
              oficinas, em 2015 conseguimos meios para pagar o aluguel de um
              espaço maior. Fizemos a locação do espaço onde é hoje a atual sede
              do Projeto. Temos também um terreno cedido pelos moradores locais
              e temos o sonho e meta para conseguir doações e meios para
              levantar nosso próprio espaço.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
