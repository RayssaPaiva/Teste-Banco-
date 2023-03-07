# TesteTuringItau
Teste para a vaga Itáu
function enviar(){
    let confirma = confirm("Deseja Finalizar ?");
    if(confirma){
        alert("Operacao Relizada com sucesso");
        sessionStorage.setItem('valorEmcaixa', resultCaixa());
        window.location.href = './BancoCadastro.html';
    }
}

function resultCaixa(){
    var result = (celula.dois.value = "" ? 0 : celula.dois.value * 2) +
                 (celula.cinco.value = ""? 0 : celula.cinco.value  * 5) +
                 (celula.dez.value = "" ? 0 : celula.dez.value  * 10) +
                 (celula.vinte.value = "" ? 0 : celula.vinte.value * 20 ) +
                 (celula.cinquenta.value= "" ? 0 : celula.cinquenta.value * 50 ) +
                 (celula.cem.value = "" ? 0: celula.cem.value * 100 );

    return parseFloat(result);
}
