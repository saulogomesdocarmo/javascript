/**
 * Exemplo da estrutura Switch Case
 * @author Saulo Gomes 
 */

const input = require("readline-sync")

let opcao

console.clear()

console.log("Boot - Escolha o sistema peracional")
console.log("1. Windows")
console.log("2. Linux")
opcao = Number(input.question("Digite a opcao desejada: "))

switch (opcao) {
    case 1:
        console.clear()
        console.log("Carregando o Windows..................")
        break
    case 2:
        console.clear()
        console.log("Carregando o Linux...")
        break
    default:
        console.log("Opção Inválida")
}