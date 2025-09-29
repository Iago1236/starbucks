/*
    JAVA =! JavaScript

    Variavéis -> pedacinho de mémoria do computador, 
    que você separa e pode 
    guarda QUALQUER coisa.

    console.log -> forma de ENXEERGA o que eu tenho no JavaScript
    dentro do navegador

    Funções -> Pedacinho de código, QUE só execunta,
    quando é chamado!
 
    document == HTML

    Algorítmo -> È UMA RECEITA DE BOLO
    [x] saber quem é o botão    
    [x] saber quando o botão foi clicado
    [x] trocar a cor da bola colorida
    [x] saber quem é o copo
    [x] trocar a imagem do copo
    [x] saber quem é a bola colorida

*/
let circulo = document.querySelector(".circulo")
let imagemCopo = document.querySelector(".imagem-copo")

function mudarCor(cor) {
    circulo.style.backgroundColor = cor
    
}
function trocaImagem(imagem) {
    imagemCopo.src = imagem
}