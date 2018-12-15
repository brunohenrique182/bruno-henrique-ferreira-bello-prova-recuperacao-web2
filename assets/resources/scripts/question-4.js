function Combustivel(tipo, preco) {
    this.tipo = tipo;
    this.preco = preco;
}

function Posto(nome) {
    this.nome = nome;
    this.combustiveis = [];
}

var postos = [];

let mediaGasolina = 0;
let mediaAditivada = 0;
let mediaEtanol = 0;
let mediaDiesel = 0;

function calcularMedia() {
    let mediaA = 0;
    let mediaG = 0;
    let mediaE = 0;
    let mediaD = 0;
    for (p of postos) {
        mediaG += Number(p.combustiveis[0].preco);
        mediaA += Number(p.combustiveis[1].preco);
        mediaE += Number(p.combustiveis[2].preco);
        mediaD += Number(p.combustiveis[3].preco);
    }

    console.log(mediaG);
    mediaGasolina = mediaG / postos.length;
    mediaAditivada = mediaA / postos.length;
    mediaEtanol = mediaE / postos.length;
    mediaDiesel = mediaD / postos.length;
}

function cadastraPosto() {
    let nome = $('#nome-posto').val();
    let gasolinaPreco = $('#gasolina').val();
    let gasolinaAdPreco = $('#gasolina-aditivada').val();
    let etanolPreco = $('#etanol').val();
    let dieselPreco = $('#diesel').val();

    console.log(parseFloat(gasolinaPreco));
    let posto = new Posto(nome);
    posto.combustiveis.push(new Combustivel('Gasolina Comum', gasolinaPreco.replace(',', '.')));
    posto.combustiveis.push(new Combustivel('Gasolina Aditivada', gasolinaAdPreco.replace(',', '.')));
    posto.combustiveis.push(new Combustivel('Etanol', etanolPreco.replace(',', '.')));
    posto.combustiveis.push(new Combustivel('Diesel', dieselPreco.replace(',', '.')));
    postos.push(posto);

    calcularMedia();
    $('#quantidade-postos-span').html(postos.length);
    $('#gasolina-td').html('R$ ' + mediaGasolina.toFixed(2).replace('.', ','));
    $('#aditivada-td').html('R$ ' + mediaAditivada.toFixed(2).replace('.', ','));
    $('#etanol-td').html('R$ ' + mediaEtanol.toFixed(2).replace('.', ','));
    $('#diesel-td').html('R$ ' + mediaDiesel.toFixed(2).replace('.', ','));
}

document.getElementById('formulario').onsubmit = function () {
    cadastraPosto();
    return false;
};
