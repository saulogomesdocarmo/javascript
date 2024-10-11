/**
 * Assicronismo - Promise -> uso do Fetch
 * @author Saulo Gomes
 * @version 1.0
 */

const input = require('readline-sync')

console.clear()
console.log("VIA CEP")

let cep = input.question("Digite o CEP: ")
let urlAPI = `https://viacep.com.br/ws/${cep}/json/`

// Teste de captura do CEP
// console.log(urlAPI)
// Uso do Promises Fetch

fetch(urlAPI)
    .then((response) => {
        return response.json()
    })

    .then((dados) => {
        console.log(dados.logadouro)
        console.log(dados.bairro)
        console.log(dados.localidade)
        console.log(dados.uf)
    })
    .catch((error) => {
        console.log(error)
    })