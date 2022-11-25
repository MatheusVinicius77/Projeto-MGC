import iconeMinimizacao from "../../assets/imgs/icones/janela-amarelo.svg";
import iconeFechar from "../../assets/imgs/icones/janela-amarelo.svg";

export function Cards ({listaCoresCirculos, imagem, textoAlternativoImagem, sinal, textoAlternativoSinal, corIconeJanela}) {
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
                    <img src={`../src/assets/imgs/icones/janela-${corIconeJanela}`} alt={`ícone de janela ${corIconeJanela}`} />
                    <img src={iconeFechar} alt="ícone de minimização" />
                </div>
            </header>
            <img src={imagem} alt={textoAlternativoImagem} />
            <img src={sinal} alt={textoAlternativoSinal}  />
        </article>
    );
}