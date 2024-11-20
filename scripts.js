const convertButton = document.querySelector(".convert-button") // 2° Mapeando o botão criando uma classe ".convert-button"
const currencySelect = document.querySelector(".currency-select")

function convertValues() {  // 4° "click" função chamada 
    const inputCurrencyValue = document.querySelector(".input-currency").value    // 5° Mapeando os valores da classe ".input-currency"
   //  ( Variavel )             (HTML)    (celetor)       (classe)    (só o valor)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // 8° Mapeando o Valor em Real a ser convertido pela "classe"
    const currencyValueConverted = document.querySelector(".currency-value") // 9° Mapeando o valor convertido de Outras Moedas pela "classe"

    
    const dolarToday = 5.76  // 6° Valor ficticio para o dolar
  // 7° testi função:  const convertedValue = inputCurrencyValue / dolarToday  =  a Variavel dividido pela cotação do Dólar
    const euroToday = 6.10
    const libraToday = 7.32
    const bitcoinToday = 10.90

    if (currencySelect.value == "dolar") { // Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { // 10°
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") { // Se o select estiver selecionado o valor de Euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") { // Se o select estiver selecionado o valor de Libra, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelect.value == "bitcoin") { // Se o select estiver selecionado o valor de Bitcoin, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", { // Falta descobrir a "linguagem" 
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) // 3° Adicionar um ouvinte para chamar a função do Botão ao ser "click"