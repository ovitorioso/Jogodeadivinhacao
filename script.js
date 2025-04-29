// Lista de Palavras
let palavras = [
    {palavra: "Abóbora", dicas: ["planta rasteira", "legume", "heloween"]},
    {palavra: "Raio", dicas: ["chuva", "luz", "Adjetivo de velocidade ou agilidade"]},
    {palavra: "Fogo", dicas: ["Calor", "luz", "revolução da humanidade"]},
    {palavra: "Futebol", dicas: ["esporte", "bola", "paixão nacional"]},
]

// Elementos do HTML
let input = document.getElementById("txt_input")
let div_resultado = document.getElementById("resultado")
let paragrafo_dicas = document.getElementById("paragrafo_dicas")
let paragrafo_tentativas = document.getElementById("paragrafo_tentativas")

//Selecionar uma palavra e suas dicas
let palavra_secreta = palavras[Math.floor(Math.random() * palavras.length)]
let palavra_selecionada = palavra_secreta.palavra.toLowerCase()
let dicas = palavra_secreta.dicas
let tentativas = dicas.length

//Função de Adivinhar
function adivinhar(){
    let digitado = input.Value.trim().toLowerCase()
    if(digitado == palavra_selecionada){
        div_resultado.innerText = "Acertou!"
    } else {
        tentativas--
        div_resultado.innerText = "Errou :("

        if(tentativas > 0) {
            paragrafo_dicas.textContent = "Dica: " + dicas[dicas.length - tentativas]
            paragrafo_tentativas.textContent = "Tentativas: " + tentativas            
        } else {
            location.reload()
        }
      
    }
}