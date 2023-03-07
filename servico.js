# TesteTuringItau
Teste para a vaga Itáu
window.onload = () => {
    var ValorEmConta = sessionStorage.getItem('valorEmConta') == undefined ? 0 : parseFloat(sessionStorage.getItem('valorEmConta'));
    var elementoOperacao = document.createTextNode(ValorEmConta.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    document.getElementById('ValorEmConta').appendChild(elementoOperacao);
}

function sairdaTela(){
    let confirma = confirm("Deseja sair?");
    if(confirma){
        alert("Foi um prazer ter você por aqui!");
        window.location.href = './BancoCadastro.html';
    }
}

function SalvaOperacao(operacao) {
    sessionStorage.setItem('operacao', operacao);
}
