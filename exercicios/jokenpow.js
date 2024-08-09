/**
 * Jogo do Jokenpow 
 * @author Saulo Gomes
 */


// entrada de dados
const input = require("readline-sync")
// variaveis
let jogador,computador

console.clear()
console.log("  ____   ___   __  _    ___  ____    ____   ___   ____")  
console.log(" |    | /   \\ |  |/ ]  /  _]|    \\ |   \\ /   \\ |    \\ ")
console.log(" |__  ||     ||  ' /   /  [_ |  _   ||  o )     ||  _  | ")
console.log(" __|  ||  O  ||    \\  |    _]|  |  ||   _/|  O  ||  |  | ")
console.log("/  |  ||     ||     \\ |   [_ |  |  ||  |  |     ||  |  |")
console.log("\\  `  ||     ||  .   |  |     ||  |  ||  |  |     ||  |  |")
console.log("\\___  |\\___ /  |__|\\_|  |_____||__|__||__|  \\___/ |__|__|")

console.log("")

console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")
console.log("")
jogador = Number(input.question("Digite uma opcao: "))
computador = Math.floor(Math.random()* 3 + 1)

switch(jogador){
    case 1:
        console.log("Pedra")
        console.log("Jogador escolheu pedra")
        break
    case 2:
        console.log("Papel")
        console.log("Jogador escolheu papel")
        brake
    case 3:
        console.log("Tesoura")
        console.log("Jogador escolheu tesoura")
        break
    default:
        console.log("Opção inválida")
}



console.log(`O jogador escolheu a opção: ${opcao}`)
console.log(`O computador escolheu a opção: ${opcao}`)

// if(opcao == 1 && computador == 1){
//     console.log("EMPATE")
// }