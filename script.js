function validaSenha (input){ 
    if (input.value != document.getElementById('senha').value) {
    input.setCustomValidity('Repita a senha corretamente');
  } else {
    input.setCustomValidity('');
  }
} 


function enviar_formulario() {
    var linha = document.createElement('tr');
    linha.insertCell(0).innerHTML += document.getElementById('login').value;
    linha.insertCell(1).innerHTML += document.getElementById('email').value; 
    linha.insertCell(2).innerHTML += document.getElementById('senha').value;
    linha.insertCell(3).innerHTML += document.getElementById('confirma-senha').value;
    document.getElementById('tabela').appendChild(linha);

    var form   = document.getElementById("form");
    form.reset();

    return false;
}