/**
 * Sorteio para resolução da tabuada 
 * @author Saulo Gomes 
 * 
 */

const input = require('readline-sync')

let sorteio

console.clear()

input.question("Pressione a telca [ENTER] para fazer um sorteio ")

sorteio =Number(Math.floor(Math.random() * 16 + 1))

console.log(sorteio)