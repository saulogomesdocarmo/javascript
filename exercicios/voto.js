/**
 * APP Para poder verificar a obrigatoriedade para votar
 * @author Saulo Gomes do Carmo
 */

console.clear
// importar  input
const input = require("readline-sync")
// importar colors 
const colors = require("@colors/colors")

// variaveis 
let idade 

idade = Number(input.question("Digite a sua idade: "))

// processamento 

if (idade < 16) {
    console.log("Você ainda não tem idade para votar".red)
} else if ( idade >= 18 && idade <= 70 )  {
    console.log( "Você tem obrigação de votar".green)
} else {
    console.log ("Você não precisa votar.".blue)
}