function calcularIdadeMais20(nome, idade){
    return  nome +' hoje você tem '+ idade +' anos e daqui a 20 anos você terá '+ (idade + 20);
}

function calcularMedia(valor1, valor2, valor3){
    const media = (valor1 + valor2 + valor3) / 3;
    return "A média das notas "+ valor1 +", "+ valor2 +" e "+ valor3 +" é "+ media;
}

function calcularValorDoDesconto(preco, desconto){
    const valorDesconto = preco * (desconto/100);
    return valorDesconto;
}

function calcularPrecoComDesconto(preco, desconto){
    const valorComDesconto = preco - calcularValorDoDesconto(preco, desconto);
    return valorComDesconto;
}

module.exports = {
    calcularIdadeMais20,
    calcularMedia,
    calcularValorDoDesconto,
    calcularPrecoComDesconto
}