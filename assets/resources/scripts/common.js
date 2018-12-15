/**
	Geral
*/

$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    $('select').material_select();
});

/*
    Armazenamento
*/

//id do vetor pedidos no localStorage
const PEDIDOS_ID_LS = "pedidos";

/*
    Salva um pedido dentro de um vetor de pedidos no localStorage.
*/
function salvaPedido(pedido) {
    let pedidos = lePedidos();

    pedidos.push(pedido);
    localStorage.setItem(PEDIDOS_ID_LS, JSON.stringify(pedidos));
    console.log('salvou');
}

/*
    Busca e retorna todos os pedidos que estão armazenados
    no localStorage.
    Retorna em forma de vetor de objetos.
*/
function lePedidos() {
    let pedidos = localStorage.getItem(PEDIDOS_ID_LS);
    if (pedidos == undefined) {
        pedidos = []
    } else {
        pedidos = JSON.parse(pedidos);
    }
    return pedidos
}
