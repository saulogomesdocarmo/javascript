/**
 * Cálculo do volume de um aquário
 * @author Saulo Gomes do Carmo
 */

const input = require('readline-sync')
console.clear()
console.log("Calculo de volume de um aquário")
// variaveis
let comprimento,largura,altura,litros

// entrada 
comprimento = Number(input.question("Digite o comprimento em cm do aquario: "))
largura = Number(input.question("Digite a largura em cm do aquario: "))
altura = Number(input.question("Digite a altura em cm do aquario: "))

// processamento
litros = ( comprimento * largura * altura ) / 1000

// saida
console.log(`No aquario tem ${litros} litros de agua`)
console.log(1)