/**
 * Jogo do Jokenpow 
 * @author Saulo Gomes
 */



const input = require("readline-sync")

let jogador,computador

console.clear()
// console.log("  ____   ___   __  _    ___  ____    ____   ___   ____")
// console.log(" |    | /   \\ |  |/ ]  /  _]|    \\ |   \\ /   \\ |    \\ ")
// console.log(" |__  ||     ||  ' /   /  [_ |  _   ||  o )     ||  _  | ")
// console.log(" __|  ||  O  ||    \\  |    _]|  |  ||   _/|  O  ||  |  | ")
// console.log("/  |  ||     ||     \\ |   [_ |  |  ||  |  |     ||  |  |")
// console.log("\\  `  ||     ||  .   |  |     ||  |  ||  |  |     ||  |  |")
// console.log("\\___  |\\___ /  |__|\\_|  |_____||__|__||__|  \\___/ |__|__|")

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

computador = Math.floor(Math.random() *3 )
// console.log(`O computador escolheu: ${computador}`)

switch(computador){
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
if (jogador == 1 && computador == 1 ){
    console.log("EMPATE")
}else{
    console.log("o jogo acabou")
}

