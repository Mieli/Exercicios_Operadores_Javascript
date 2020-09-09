function calcularPerimetroRetangulo(lado1, lado2, lado3, lado4){
    return lado1 + lado2 + lado3 + lado4;
}

function calcularPerimetroQuadrado(lado){
    return lado * 4;
}

function calcularAreaQuadrado(lado){
    return lado * lado;
}

module.exports = {
    calcularPerimetroRetangulo,
    calcularPerimetroQuadrado,
    calcularAreaQuadrado
}

