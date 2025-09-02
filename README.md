# Cálculo de Desconto

Projeto simples em JavaScript para calcular o valor final de uma compra após aplicação de desconto percentual, com testes automatizados em Mocha/Chai.

## Visão geral

Este repositório contém uma função que recebe o valor da compra e a porcentagem de desconto e retorna o valor final já com o desconto aplicado. O objetivo é demonstrar implementação limpa, validações e testes unitários.

## Estrutura do projeto

- `src/calculoDesconto.js` — implementação da função de cálculo e validações.
- `tests/calculoDesconto.test.js` — testes unitários (Mocha + Chai).
- `.gitignore` — entradas padrão para Node.js.
- `package.json` — scripts e dependências de desenvolvimento.

## Contrato da função

- Nome: `calculoDesconto(valorCompra, desconto)`
- Inputs:
  - `valorCompra` (number): valor da compra, deve ser >= 0.
  - `desconto` (number): porcentagem de desconto entre 0 e 100 (inclusive).
- Output: número (Number) representando o valor final, arredondado para 2 casas decimais.
- Erros:
  - Lança `TypeError` se qualquer argumento não for do tipo `number`.
  - Lança `RangeError` se `valorCompra` for negativo ou `desconto` estiver fora do intervalo [0, 100].

Exemplo matemático: valorFinal = valorCompra * (1 - desconto / 100)

## Requisitos

- Node.js (testado com v22.x). Recomendado usar nvm para gerenciar versões.

## Instalação

Clone o repositório e instale dependências dev:

```bash
npm install
```

## Executar os testes

Os testes usam Mocha e Chai. Para rodar:

```bash
npm test
```

Você deve ver a saída com todos os testes passando (por exemplo: `7 passing`).

## Exemplo de uso

No Node REPL ou em um script simples você pode usar a função assim:

```js
const calculoDesconto = require('./src/calculoDesconto');

console.log(calculoDesconto(100, 10)); // 90
console.log(calculoDesconto(10.555, 10)); // 9.5 (arredondado)
```

## Boas práticas e notas

- A função valida tipos e intervalos explicitamente para evitar resultados inesperados.
- Retornamos um Number arredondado para 2 casas decimais; se desejar cadeia formatada (ex.: '9.50'), converta com `toFixed(2)` no consumidor.
- Para CI, adicione um job que execute `npm ci` e `npm test`.

## Próximos passos sugeridos

- Adicionar `README` com badges de CI (quando houver CI configurado).
- Incluir cobertura de testes (nyc/istanbul) e um script `npm run coverage`.
- Adicionar tipagem (TypeScript) se o projeto crescer.

## Licença

ISC
