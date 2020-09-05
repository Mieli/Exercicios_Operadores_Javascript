function calcularPerimetroRetangulo(lado1, lado2, lado3, lado4){
    return lado1 + lado2 + lado3 + lado4;
}

function calculaPerimetroQuadrado(lado){
    return lado * 4;
}

function calculaAreaQuadrado(lado){
    return lado * lado;
}

module.exports = {
    calcularPerimetroRetangulo,
    calculaPerimetroQuadrado,
    calculaAreaQuadrado
}

