let promoCod = '';
let desconto = false;

function validaNome() {
    let nome = $('#nome-completo-show').val();
    let regex = /[A-Za-z]*\s[A-Za-z]*/.test(nome);
    if (!regex) {
        alert('nome invalido');
        return false;
    }
}

function validaQuantidade() {
    let quantidade = $('#quantidade-show').val();
    let regex = /\d+/.test(quantidade);
    if (!regex) {
        alert('Somente numeros');
        return false;
    }
}

function validaTotal() {
    let totalInput = $('#total-pagar-show').val();
    if (totalInput != calculaTotal()) {
        return false;
    }
}

function valida() {
    if (validaNome() == false || validaQuantidade() == false) {
        return false;
    } else if (validaTotal() == false) {
        alert('por favor calcule o total novamente antes de efetuar a compra');
        return false;
    } else {
        alert('sucesso');
        return true;
    }
}

function calculaTotal() {
    let quantidade = $('#quantidade-show').val();
    let total = quantidade * 100;
    if (desconto) {
        total = total - (total * 0.1);
    }
    return total;
}

window.onload = function () {
    if (window.confirm('Você tem um codigo promocional?')) {
        promoCod = prompt('Insira o codigo promocional abaixo.');
        if (promoCod == 'SRGP') {
            desconto = true;
            $('#codigo-promo').val(promoCod);
        } else {
            alert('Codigo promocional invalido');
        }
    }
}

document.getElementById('nome-completo-show').onblur = function () {
    validaNome();
};

document.getElementById('quantidade-show').onblur = function () {
    validaQuantidade();
};

$('#calcula-total-show').click(function () {
    $('#total-pagar-show').val(calculaTotal());
});

$('form').submit(function () {
    nome = $('#nome-completo-show').val();
    if (valida() == true) {
        return true;
    } else {
        return false;
    }
});
