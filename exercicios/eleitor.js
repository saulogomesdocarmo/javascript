/**
 * Exemplo de uso da Estrutura else if
 * @author Saulo Gomes
 */


const input = require("readline-sync")
const colors = require("@colors/colors")

// variaveis 

let idade 

console.clear()
idade = Number(input.question("Digite a sua idade: "))
if (idade < 16){
    console.log("Proibido votar".red)
} else if (idade >= 18 && idade < 71){
    console.log("Voto obrigatório".green)
} else {
    console.log("Voto facultavito".blue)
}