## Valores das props do componente `Card`
### `corFundoHeader`
* O valor é uma string.
* Qualquer uma das classes bg no arquivo colors.css.
* Ex: "bg-brand-1"


### `listaCoresCirculos`
* array de três strings, cada uma é o hex de uma das cores nas variáveis do arquivo globalStyles.
* ex: ["#BC54F0", "#FFCF32", "#3FB9FF"]


### `imagem`
* Qualquer uma das imagens em assets/imgs/fotos.
* A imagem deve ser importada no arquivo em que o componente for ser usado, sua **variável** que deve passada como referência para a prop.


### `textoAlternativoImagem`
* O valor é uma string.
* Descrição da imagem acima para o atributo alt do elemento `img`.


### `sinal`
* Prop não obrigatória.
* Não é preciso usar a prop e nem especificar um valor para ela caso queira usar o sinal de exclamação.
* O valor é uma string.
* Possíveis valores: "interrogação" ou "cursor".

### `coresSinal`
* Array de duas strings, cada uma é o hex de uma das cores nas variáveis do arquivo globalStyles.
* A primeira cor é a cor da primeira camada do sinal, a segunda é a cor das outras duas, que possuem a mesma coloração.
* Ex: ["#BC54F0", "#FFCF32"]

### `corIconeJanela`
* Uma string.
* Hex de uma das cores nas variáveis do arquivo globalStyles, ex: "#BC54F0".