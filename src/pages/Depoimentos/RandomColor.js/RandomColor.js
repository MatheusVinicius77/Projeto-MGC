var arrayCopia = []

export function RandomColor(key, block = null) {
    const Colors = ["#BC54F0", "#FFCF32", "#3FB9FF", "#F5487E", "#73D676"]
    const bgColors = ["bg-brand-1", "bg-brand-2", "bg-brand-3", "bg-brand-4", "bg-brand-5"]
    //SEGUNDO PARAMETRO DA FUNÇÃO RandomColor diz qual cor eu vou querer bloquear para que não apareça na página
    // 0: Roxo, 1: Amarelo, 2: Azul, 3:Vermelho-Vinho, 4:Verde > Por padrão é null, não bloqueia nenhuma
    let corFundoHeader = 0
    let corIconeJanela = 0

    while (corFundoHeader == corIconeJanela || corFundoHeader == block) {
        corIconeJanela = Math.floor(Math.random() * 4 + 1)
        corFundoHeader = Math.floor(Math.random() * 4 + 1)
    }
    arrayCopia[key] = corFundoHeader

    if (key == 1) {
        while (corFundoHeader == arrayCopia[0]) {
            corFundoHeader = Math.floor(Math.random() * 4 + 1)
        }
        arrayCopia[key] = corFundoHeader
    } else if (key == 2) {
        while (corFundoHeader == arrayCopia[1] || corFundoHeader == arrayCopia[0]) {
            corFundoHeader = Math.floor(Math.random() * 4 + 1)
        }
        arrayCopia[key] = corFundoHeader
    }

    let listaCoresCirculos = [bgColors[corFundoHeader], bgColors[corIconeJanela], bgColors[Math.floor(Math.random() * 4 + 1)]]
    while (listaCoresCirculos[2] == listaCoresCirculos[0] || listaCoresCirculos[2] == listaCoresCirculos[1]) {
        listaCoresCirculos[2] = bgColors[Math.floor(Math.random() * 4 + 1)]
    }

    return [bgColors[corFundoHeader], listaCoresCirculos, Colors[corIconeJanela]]

}
