const botoesCarrosel = document.querySelectorAll('.botao'); 
const imagens = document.querySelectorAll('.imagem');

botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () =>  {
        
        desativarBotãoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();
        
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotãoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
