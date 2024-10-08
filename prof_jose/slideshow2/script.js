/**
 * Simples carrossel de imagens
 * @author Professor José de Assis
 */
//                [0]           [1]           [2]
let slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]
let intervalo = 3000 //ajuste do tempo de troca
let indice = 0 //apoio a lógica

show()

function show() {
    //a linha abaixo adiciona a classe fadeOut ao documento html na tag identificada como slide
    document.getElementById('slide').className += 'fadeOut'
    //setTimeout(gera um temporizador)
    setTimeout(() => {
        document.getElementById('slide').src = (`img/${slides[indice]}`)
        document.getElementById('slide').className = ''
    }, 1000) //trocar a cada 1s (1000ms = 1s)
    indice++
    if (indice === slides.length) {
        indice = 0
    }
    setTimeout(show, intervalo) //executar a função a cada 3s  
}