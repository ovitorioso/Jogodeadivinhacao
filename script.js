let input = document.getElementById("txt_input")
let div_resultado = document.getElementById("resultado")
let palavra_secreta = "Gato"

function adivinhar(){
    let digitado = input.value
    if(digitado == palavra_secreta){
        div_resultado.innerText = "Acertou!"
        

    }
}