# TesteTuringItau
Teste para a vaga Itáu
window.onload = () => {
    var Operacao = sessionStorage.getItem('operacao');
    var elementoOperacao = document.createTextNode(Operacao.toUpperCase())
    document.getElementById('Operacao').appendChild(elementoOperacao);
}

function enviar(){
    var Operacao = sessionStorage.getItem('operacao');
    var ValorEmcaixa = sessionStorage.getItem('valorEmcaixa');
    var ValorEmConta = sessionStorage.getItem('valorEmConta');

    if (Operacao == 'saque' ){
        sacar(ValorEmcaixa, ValorEmConta);
    }else if (Operacao == 'deposito'){
        depositar(ValorEmcaixa, ValorEmConta);
    }
}

function sacar(valorEmcaixa, ValorEmConta){
    var saque = Valor.valor.value;
    ValorEmConta = parseFloat(ValorEmConta);
    saque= parseFloat(saque);
    valorEmcaixa = parseFloat(valorEmcaixa);

    if (valorEmcaixa < saque){
        alert('Transação não pode ser concluída pois o caixa não possui saldo!');
        return;
    } else if (ValorEmConta < saque){
        alert(ValorEmConta);
        alert('Transação não pode ser concluída pois você não possui saldo!');
        return;
        
    }else {
        alert(ValorEmConta)
        var resultConta =  ValorEmConta - saque;
        var resultCaixa =  valorEmcaixa - saque;
        sessionStorage.setItem('valorEmConta', resultConta);
        sessionStorage.setItem('valorEmcaixa', resultCaixa);
        alert('Transação concluíuda com sucesso!');
        window.location.href = './serviços.html';
    }   
}

function depositar(){
    var deposito = Valor.valor.value;
    var result = deposito;
    sessionStorage.setItem('valorEmConta', result);
    alert('Transação concluíuda com sucesso!');
    window.location.href = './serviços.html';
}

