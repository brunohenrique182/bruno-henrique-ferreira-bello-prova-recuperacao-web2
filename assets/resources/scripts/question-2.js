(function () {
    let pedidos = lePedidos();

    let template = '<table><tr><th>Tamanho</th><th>Sabor</th><th>Nome do Cliente</th</tr>';

    for (p of pedidos) {
        template += '<tr><th>' + p.tamanho + '</th><th>' + p.sabor + '</th><th>' + p.cliente.nome + '</th></tr>';
    }

    template += '</table>';
    $('#relatorio').html(template);
})();

function Cliente(nome, telefone, endereco) {
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;
}

function Pizza(tamanho, preco, borda, entrega, cliente) {
    this.tamanho = tamanho;
    this.sabor = [];
    this.preco = preco;
    this.borda = borda;
    this.entrega = entrega;
    this.cliente = cliente;
}

let pizza = new Pizza();

let convTamanho = function (valor) {
    if (valor == 1) {
        return 'pequena';
    }
    if (valor == 2) {
        return 'Média';
    }
    if (valor == 3) {
        return 'Grande';
    }
}

let getPreco = function (valor) {
    if (valor == 1) {
        return 15;
    }
    if (valor == 2) {
        return 20;
    }
    if (valor == 3) {
        return 25;
    }
}

function temEspaco() {
    let tamanho = $('#tamanho-pizza').val();
    if (pizza.sabor.length < tamanho) {
        return true;
    } else {
        return false;
    }
}

function naoTemGolpe() {
    let tamanho = $('#tamanho-pizza').val();
    if (tamanho < pizza.sabor.length) {
        while (pizza.sabor.length != 0) {
            pizza.sabor.pop();
        }
        alert('insira novamente os sabores desejados');
    }
}

$('#tamanho-pizza').on('blur', naoTemGolpe());

$('#botao-adiciona-sabor').click(function () {
    let tamanho = $('#tamanho-pizza').val();
    console.log(tamanho);
    if (tamanho !== null) {
        if (temEspaco()) {
            let sabor = $('#sabor-cliente').val();
            pizza.sabor.push(sabor);
        }
    } else {
        alert('sua pizza deve ter um tamanho');
    }
});

$('#entrega-pizza').click(function () {
    if ($('#entrega-pizza').is(':checked')) {
        $('#endereco-cliente').prop('disabled', false);
    } else {
        $('#endereco-cliente').prop('disabled', true);
    }
});

$('#botao-envia-pedido').click(function () {
    let nome = $('#nome-cliente').val();
    let tamanho = $('#tamanho-pizza').val();
    let borda = $('#borda-pizza').is(':checked');
    let entrega = $('#entrega-pizza').is(':checked');
    let telefone = $('#telefone-cliente').val();
    let endereco = null;
    if ($('#entrega-pizza').is(':checked')) {
        endereco = $('endereco-cliente').val();
    }
    if (pizza.sabor.length < 1) {
        alert('Sua pizza precisa ter um sabor');
        return false;
    } else {
        let cliente = new Cliente(nome, telefone, endereco);
        pizza.cliente = cliente;
        pizza.preco = getPreco(tamanho);
        pizza.tamanho = convTamanho(tamanho);
        pizza.borda = borda;
        pizza.entrega = entrega;
        salvaPedido(pizza);
        alert('concluido');
    }

});
