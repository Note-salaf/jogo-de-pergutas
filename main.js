import { state } from './state.js'
import {listaDePerguntasGeografia, listaDePerguntasMatematica, listaDePerguntasAnimais, listaDePerguntasTecnologia} from './perguntas.js'


import {
pergunta,
respostaA, 
respostaB, 
respostaC, 
botoes, 
informaResultado, 
pontos, 
btnAssuntos, } from './ui.js'

let listaDePerguntas = []



listaDePerguntas.length = 0
listaDePerguntas = [...listaDePerguntasGeografia]


botoes.forEach(botao => {
    botao.addEventListener('click', (e) => {
        const resposta = e.target.textContent
        if (resposta === listaDePerguntas[state.indicePergunta].respostaCorreta) {
            // 🔒 bloqueia porque acertou
            botoes.forEach(botao => botao.disabled = true)

            informaResultado.classList.remove('erro')
            informaResultado.classList.add('acerto')
            informaResultado.textContent = 'Parabéns, você acertou!'
            aumentarContador()
            aumentarPontos()

            setTimeout(() => {
                escreverRespostas()
                escreverPergunta(
                    pergunta,
                    listaDePerguntas[state.indicePergunta].pergunta
                )
                informaResultado.textContent = ''
                informaResultado.classList.remove('acerto')

                // 🔓 libera para próxima pergunta
                botoes.forEach(botao => botao.disabled = false)
            }, 2000)
        } else {


            informaResultado.textContent = 'Tente novamente!'
            informaResultado.classList.add('erro')

            setTimeout(() => {
                informaResultado.textContent = ''
                informaResultado.classList.remove('erro')
            }, 1000)

        }
    })
})



function escreverPergunta(elemento, texto) {
    elemento.textContent = texto
}

function escreverRespostas() {
    const respostas = [
        listaDePerguntas[state.indicePergunta].respostaErrada1,
        listaDePerguntas[state.indicePergunta].respostaErrada2,
        listaDePerguntas[state.indicePergunta].respostaCorreta
    ]

    respostas.sort(() => Math.random() - 0.5)

    respostaA.textContent = respostas[0]
    respostaB.textContent = respostas[1]
    respostaC.textContent = respostas[2]
}




function aumentarContador() {
    if (state.indicePergunta < listaDePerguntas.length - 1) {
        state.indicePergunta++
    } else {
        state.indicePergunta = 0
    }
}


function aumentarPontos() {
    let valorAtual = Number(pontos.textContent)
    valorAtual++
    pontos.textContent = valorAtual
}

escreverRespostas()
escreverPergunta(
    pergunta,
    listaDePerguntas[state.indicePergunta].pergunta
)






btnAssuntos.forEach(botao => {
    botao.addEventListener('click', (e) => {
        const temaEscolhido = e.target.dataset.tema
        switch (temaEscolhido) {
            case 'geografia':
                listaDePerguntas.length = 0
                listaDePerguntas = [...listaDePerguntasGeografia]
                escreverRespostas()
                escreverPergunta(
                    pergunta,
                    listaDePerguntas[state.indicePergunta].pergunta
                )
                break;
            case 'matematica':
                listaDePerguntas.length = 0
                listaDePerguntas = [...listaDePerguntasMatematica]
                escreverRespostas()
                escreverPergunta(
                    pergunta,
                    listaDePerguntas[state.indicePergunta].pergunta
                )
                break;
            case 'animais':
                listaDePerguntas.length = 0
                listaDePerguntas = [...listaDePerguntasAnimais]
                escreverRespostas()
                escreverPergunta(
                    pergunta,
                    listaDePerguntas[state.indicePergunta].pergunta
                )
                break;
            case 'tecnologia':
                listaDePerguntas.length = 0
                listaDePerguntas = [...listaDePerguntasTecnologia]
                escreverRespostas()
                escreverPergunta(
                    pergunta,
                    listaDePerguntas[state.indicePergunta].pergunta
                )
                break;

            default:
                break;
        }

       
    })
})




