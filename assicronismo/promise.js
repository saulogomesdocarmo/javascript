/**
 * Assincronimsmo
 * Fetch
 * @author Saulo Gomes
 */

const input = require('readline-sync')

console.clear()
console.log("VIA CEP")

let cep = input.question("Digite o CEP: ")
let urlAPI = `https://viacep.com.br/ws/${cep}/json/`

// teste da captura do CEP
// console.log(urlAPI)
// uso de promisse (fetch)
fetch(urlAPI)
    .then((response) => {
        return response.json()
    })

    .then((dados) => {
        console.log(dados.logradouro)
        console.log(dados.bairro)
        console.log(dados.localidade)
        console.log(dados.uf)
        console.log(dados.ddd)
    })
    .catch((error) => {
        console.log(error)
    })