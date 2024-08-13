/**
 * Estudo das estruturas While e 
 * @author Saulo Gomes
 */

console.clear()
const input = require("readline-sync")
// modificar os valores para testar a diferença entre e while e do-while
let x = 1
let y = 1 

console.clear()

while(x < 11){
    console.log("Teste da estrutra while")
    x++
}

input.question("Pressione a tecla [ENTER] para continuar ")
console.clear()
do {
    console.log("teste de estrutura do-while")
    y++
} while(y < 11)