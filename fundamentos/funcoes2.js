/**
 * Estudo das funções 
 * Funçõescom parâmentos
 * @author Saulo Gomes
 */

// IMPORTATNE !!! Funções atribuídas obrigatoriamente precisam ser criadas no ínicio do código (antes de serem executadas)

// Função literal com parâmetros 
function somar(num1,num2){
    return(console.log(num1 + num2))
}

somar(2,10)

// função atribuida (função anônima) com parametros
let functionAtribuida = function(num1, num2){
    return(console.log(num1 + num2))
}

somarAtribuir(4,9)

// função atribuída simplificada (arrow function) com parâmetros
let somarAF = (num1,num2 =>{
    return(console.log(num1 + num2))
})

// Função atribuida simplificada (arrow fuction) com pâmetros  linha de código (reste caso o retur pe é crucial)

let somarAFS = (num1,num2) => console.log(num1+num2)

somarAFS(3,3)