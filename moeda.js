const url = 'https://economia.awesomeapi.com.br/json/last/';
const moedas = 'USD-BRL,EUR-BRL'
const valor = document.getElementById("valor");
const valor2 = document.getElementById("valor2");
const real = document.querySelector(".real");
const dolar = document.querySelector(".dolar");
const euro = document.querySelector(".euro");
const button = document.getElementById("btn")
const texto = document.querySelector("p");
const moeda = document.getElementById("moeda");

// button.addEventListener("click", function (soma) {
//     fetch(url + moedas).then(res => {
//         return res.json();
//     }).then(corpo => {

//         if()
//         let valorm = corpo.USDBRL.ask * parseFloat(valor.value).toFixed(2)
//         console.log(valorm)

//         texto.innerText = `${valorm}`
//     })
// })

setInterval(() => {
    fetch(url + moedas).then(res => {
        return res.json();
    }).then(corpo => {

        let valorm = corpo.USDBRL.ask * parseFloat(valor.value)
        console.log(valorm)

        texto.innerText = `R$${valorm.toFixed(2)}`
        valor2.innerHTML = `R$${valorm.toFixed(2)}`
    })
}, 500);