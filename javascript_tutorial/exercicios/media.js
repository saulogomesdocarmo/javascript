/**
 * Cálculo de Média
 * @author Saulo Gomes do Carmo
 */

console.clear()
const input = require('readline-sync')

console.log("APLICATIVO DE MEDIAS")
console.log("___________________________________________________")
console.log("")
// variaveis
let nome_aluno,nota_1,nota_2,media
// entradas
nome_aluno = String(input.question("Digite seu nome: "))
nota_1 = Number(input.question("Digite a nota 1: "))
nota_2 = Number(input.question("Digite a nota 2: "))
// processamento
media = (nota_1 + nota_2) / 2
// saída
console.log(`A media final do aluno ${nome_aluno} é: ${media}`)