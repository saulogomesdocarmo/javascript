/**
 * Jogo do dado - Exemplo de uso de uma função simples
 * @author Saulo Gomes
 */

const input = require('readline-sync')
const colors = require('colors')

let face
let confirma = "n"

function jogador() {
    console.clear()
    console.log("JOGO DO DADO".blue.bold)
    console.log("")
    input.question("Pressione a tecla ENTER para voce poder jogar o dado: ")
    face = Math.floor(Math.random() * 6 + 1)
    console.log(`Face do dado: ${face}`)
}

jogador()

confirma = input.question("Deseja jogar novamente(s/n): ")

if(confirma === "s"){
    jogador()
}else{
    console.log("O jogo acabou")
}
