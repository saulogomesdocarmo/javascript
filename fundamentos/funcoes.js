/**
 * Estudo das Funções em JavaScript
 * @author Saulo Gomes 
 */

// função simples (literais)
function hello(){
    console.log("Hello Function")
}
// para executar uma função basta escrever o nome dela seguido de parênteses
hello()
// console.log(typeof(hello))

// função atribuida (função anônima)
const hello2 = function(){
    console.log("Hello Function Atribuida")
}

// console.log(typeof(hello2))
hello2()

// função atribuida simplificada (arrow function)
const hello3 = () => {
    console.log("Hello arrow function")
}

hello3()

// função atribuida simplificada (arrow function) 1 linha de código 
const hello4 = _ => console.log("Hello arrow function one line")

hello4()