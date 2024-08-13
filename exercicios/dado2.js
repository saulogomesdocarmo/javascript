/**
 * Jogo do dado - Exemplo de uso da estrutura do-while
 * @author Saulo Gomes
 */

const input = require("readline-sync")
const colors = require("colors")

let face
let confirma = "n"

do {
    console.clear()
    console.log("JOGO DO DADO".blue.bold)
    console.log("")
    input.question("Pressione a tecla ENTER para voce poder jogar o dado: ")
    face = Math.floor(Math.random() * 6 + 1)
    console.log(`Face do dado: ${face}`)

    confirma = input.question("Deseja jogar novamente(s/n): ")

} while (confirma === "s")
