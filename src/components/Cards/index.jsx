import iconeMinimizacao from "../../assets/imgs/icones/traco.svg";
import iconeFechar from "../../assets/imgs/icones/x.svg";
import iconeJanelaAmarela from "../../assets/imgs/icones/janela-amarelo.svg";
import iconeJanelaRosa from "../../assets/imgs/icones/janela-rosa.svg";
import iconeJanelaVerde from "../../assets/imgs/icones/janela-verde.svg";
import cursor from "../../assets/imgs/icones/seta-branca-verde.svg";
import exclamacaoAmareloVerde from "../../assets/imgs/sinais/exclamacao-amarelo-verde.svg";
import exclamacaoAzulVerde from "../../assets/imgs/sinais/exclamacao-azul-verde.svg";
import exclamacaoRosaVerde from "../../assets/imgs/sinais/exclamacao-rosa-verde.svg";
import exclamacaoRoxoRosa from "../../assets/imgs/sinais/exclamacao-roxo-rosa.svg";
import exclamacaoRoxoVerde from "../../assets/imgs/sinais/exclamacao-roxo-verde.svg";
import interrogacaoAmareloRosa from "../../assets/imgs/sinais/interrogacao-rosa-amarelo.svg";

export function Card ({listaCoresCirculos, imagem, textoAlternativoImagem, sinal, textoAlternativoSinal, iconeJanela}) {
    return (
        <article>
            <header>
                <div>
                    {
                        listaCoresCirculos.map(cor => {
                            return <span className={`circulo-colorido ${cor}`}></span>;
                        })
                    }
                </div>
                <div>
                    <img src={iconeMinimizacao} alt="ícone de minimização" />
                    <img src={`../src/assets/imgs/icones/janela-${iconeJanela}`} alt="ícone de janela colorido" />
                    <img src={iconeFechar} alt="ícone de fechamento" />
                </div>
            </header>
            <img src={imagem} alt={textoAlternativoImagem} />
            <img src={sinal} alt={textoAlternativoSinal}  />
        </article>
    );
}

