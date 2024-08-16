/**
 * Jogo do Jokenpow 
 * @author Saulo Gomes
 */



const input = require('readline-sync')
const color = require('colors')

let jogador,computador
let repetir = "n"

do {
    console.log("JOGO DO JOKENPOW".blue.bold)
console.log("")
console.log("Escolha uma opção: ")
console.log("")

console.log(" 1. Pedra")
console.log(" 2. Papel")
console.log(" 3. Tesoura")

jogador = Number(input.question("Digite uma opcao: "))

switch (jogador) {
    case 1:
        console.clear()
        console.log("O jogador escolheu PEDRA")
        break
    case 2:
        console.clear()
        console.log("O jogador escolheu PAPEL")
        break
    case 3:
        console.clear()
        console.log("O jogador escolheu TESOURA")
        break
}

computador = Math.floor(Math.random() * 3 + 1)


switch (computador) {
    case 1:

        console.log("O computador escolheu PEDRA")
        break
    case 2:

        console.log("O computador escolheu PAPAEL")
        break
    case 3:

        console.log(" O computador escolheu TESOURA")
        break
}
console.log("")
if (jogador === 1 && computador === 1) {
    console.log("EMPATE")

} else if (jogador == 2 && computador == 2) {
    console.log("EMPATE")

} else if (jogador === 3 && computador === 3) {
    console.log("EMPATE")

} else if (jogador === 1 && computador === 2) {
    console.log("O Computador Venceu!")

} else if (computador === 1 && jogador === 2) {
    console.log("O Jogador Venceu!")

} else if (jogador === 2 && computador === 3) {
    console.log("O Computador Venceu!")

} else if (computador === 2 && jogador === 3) {
    console.log("O Jogador Venceu!")

} else if (jogador === 1 && computador === 3) {
    console.log("O Jogador Venceu!")

} else if (computador === 1 && jogador == 3) {
    console.log("Jogador Perdeu")
}

repetir = input.question("Deseja jogar novamente(s/n)?: ")

} while (repetir === "s");
