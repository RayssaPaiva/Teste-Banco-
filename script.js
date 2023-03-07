# TesteTuringItau
Teste para a vaga Itáu
function validar() {
    var nome = bancoJa.nome.value;
    var senha = bancoJa.senha.value;

    if (nome == "") {
        alert('Preencha o campo com seu nome');
        bancoJa.nome.focus();
        return false;
    }

    if (senha == "") {
        alert('Preencha o campo com sua senha');
        bancoJa.senha.focus();
        return false;
    }

    if (nome == "admin" && senha == "admin123") {
        window.location.href = './celulas.html';

    }else if (nome == "usuario" && senha == "usuario") {
        window.location.href = './serviços.html';
    }else {
        alert('Usuário não cadastrado');
        bancoJa.nome.focus();
        return false;
    }
}
