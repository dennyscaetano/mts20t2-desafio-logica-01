const { expect } = require('chai');
const calculoDesconto = require('../src/calculoDesconto');

describe('calculoDesconto', () => {
  it('aplica 10% de desconto', () => {
    const result = calculoDesconto(100, 10);
    expect(result).to.equal(90);
  });

  it('sem desconto retorna mesmo valor', () => {
    const result = calculoDesconto(50, 0);
    expect(result).to.equal(50);
  });

  it('desconto de 100% retorna 0', () => {
    const result = calculoDesconto(200, 100);
    expect(result).to.equal(0);
  });

  it('arredonda corretamente para duas casas', () => {
    const result = calculoDesconto(10.555, 10); // 10.555 * 0.9 = 9.4995 -> 9.5
    expect(result).to.equal(9.5);
  });

  it('lança erro para valorCompra negativo', () => {
    expect(() => calculoDesconto(-1, 10)).to.throw(RangeError);
  });

  it('lança erro para desconto fora do intervalo', () => {
    expect(() => calculoDesconto(100, -5)).to.throw(RangeError);
    expect(() => calculoDesconto(100, 150)).to.throw(RangeError);
  });

  it('lança erro para tipos inválidos', () => {
    expect(() => calculoDesconto('100', 10)).to.throw(TypeError);
    expect(() => calculoDesconto(100, '10')).to.throw(TypeError);
  });
});
