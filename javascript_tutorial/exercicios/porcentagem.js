/**
 * Aplicativo Cálculo de Porcentagem
 * @author Saulo Gomes do Carmo
 */

console.clear()
const input = require('readline-sync')
console.log("Cálculo de Porcentagem")
console.log("________________________________________")
console.log("")
let valor_cheio,qtd,valor

valor_cheio = Number(input.question('Digite o valor que voce deseja saber a porcentagem: '))
qtd = Number(input.question('Digite a porcentagem desejada: '))

valor = (valor_cheio * qtd) / 100

console.log(`${qtd}% de ${valor_cheio} é o que corresponde a ${valor.toFixed(1)}`)

