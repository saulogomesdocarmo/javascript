/**
 * Cálculo Para descobrir a idade média de uma pessoa apartir da idade de outras pessoas
 * @author Saulo Gomes
 */

const input = require('readline-sync')

let idade1,idade2,idade3,media 

idade1 = Number(input.question("Idade da Primeira pessoa: "))
idade2 = Number(input.question("Idade da Segunda pessoa: "))
idade3 = Number(input.question("Idade da Terceira pessoa: "))

media = (idade1 + idade2 + idade3) /3

console.log(`A media da idade da pessoa 3 é de: ${media.toFixed(0)}`)