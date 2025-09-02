// calculoDesconto.js
// Calcula o valor final de uma compra aplicando um desconto em porcentagem.
// Entrada: valorCompra (number >= 0), desconto (porcentagem, 0 a 100)
// Retorna: número com 2 casas decimais (arredondado) representando o valor final.
function calculoDesconto(valorCompra, desconto) {
  if (typeof valorCompra !== 'number' || Number.isNaN(valorCompra)) {
    throw new TypeError('valorCompra deve ser um número');
  }
  if (typeof desconto !== 'number' || Number.isNaN(desconto)) {
    throw new TypeError('desconto deve ser um número');
  }
  if (valorCompra < 0) {
    throw new RangeError('valorCompra deve ser maior ou igual a 0');
  }
  if (desconto < 0 || desconto > 100) {
    throw new RangeError('desconto deve estar entre 0 e 100');
  }

  const final = valorCompra * (1 - desconto / 100);
  // arredonda para duas casas decimais
  return Math.round(final * 100) / 100;
}

module.exports = calculoDesconto;
