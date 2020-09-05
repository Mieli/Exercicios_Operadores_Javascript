describe('Suite de Teste Diversos', () => {
    it('Quando eu executo a função  calcularIdadeMais20 passando como parâmetros os valores  "João" e 19 o resultado deve ser a mensagem "João hoje você tem 19 anos e daqui a 20 anos você terá 39" ',()=>{
        const moduloDiversos = require('./diversos');
        expect(moduloDiversos.calcularIdadeMais20('João', 19)).toBe('João hoje você tem 19 anos e daqui a 20 anos você terá 39');
    })
    
    it('Quando eu executo a função  calcularMedia passando como parâmetros os valores  8,9, e 7  o resultado deve ser a mensagem "A média das notas 8, 9 e 7 é 8" ',()=>{
        const moduloDiversos = require('./diversos');
        expect(moduloDiversos.calcularMedia(8,9,7)).toBe('A média das notas 8, 9 e 7 é 8');
    })
    
     it('Quando eu executo a função  calcularValorDoDesconto passando o parâmetro  valorProduto com o valor 40 e o parâmetro desconto com o valor 5  o resultado da função deve ser o valor  2 ',()=>{
        const moduloDiversos = require('./diversos');
        expect(moduloDiversos.calcularValorDoDesconto(40,5)).toBe(2);
    })
    
     it('Quando eu executo a função  calcularPrecoComDesconto passando o parâmetro  valorProduto com o valor 50 e o parâmetro desconto com o valor 10  o resultado da função deve ser o valor  45 ',()=>{
        const moduloDiversos = require('./diversos');
        expect(moduloDiversos.calcularPrecoComDesconto(50,10)).toBe(45);
    })
});