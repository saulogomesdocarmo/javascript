/**
 * APP Flex
 * @author Saulo Gomes do Carmo
 */

const colors = require("colors")
const input = require("readline-sync")

let etanol,gasolina 

console.clear()
console.log("Etanol ou Gasolina")

etanol = Number(input.question("Digite o valor do etanol: "))
gasolina = Number(input.question("Digite o valor da gasolina: "))

if (etanol < 0.7 * gasolina) {
    console.log("Abastecer com Etanol".bgGreen)
} else {
    console.log("Abastecer com Gasolina".yellow)
}