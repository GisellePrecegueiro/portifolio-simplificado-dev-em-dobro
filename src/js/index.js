//Pegar botão e mostrar mais no JS para poder verificar quando o usuário clicar em cima dele

const botaoMostrarProjeto = document.querySelector('.btn-mostrar-projeto');
const projetosInativos = document.querySelectorAll ('.projeto:not(.ativo)');

botaoMostrarProjeto.addEventListener('click', () => { 
    //adicionar a classe "ativo" nos projetos
    mostrarMaisProjetos();
    
    //pegar botão e esconder ele
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjeto.classList.add ("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add ('ativo');
    });
}