const geometria = require('./geometria');

describe('Suite de Teste Geometria ', () => {

    it('Quando executo a função calcularPerimetroRetangulo passando os valores 2,4,3,8 devo obter o resultado de 12', () => {
        expect(geometria.calcularPerimetroRetangulo(2,4,2,4)).toBe(12);
    });

    it('Quando executo a função calcularPerimetroQuadrado passando o comprimento de um lado com valor 5, o resultado deve ser igual à 20', () => {
        expect(geometria.calcularPerimetroQuadrado(5)).toBe(20);
    });

    it('Quando executo a função calcularAreaQuadrado passando o valor do lado igual à 6, o resultado deve ser igual à 36', () => {
        expect(geometria.calcularAreaQuadrado(6)).toBe(36);
    });

});