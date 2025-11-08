const contaAteN = require('./index'); // Importa a função

describe('Testa a função contaAteN', () => {
  it('Deve imprimir os números de 1 a n no console', () => {
    // Faz o mock do console.log
    console.log = jest.fn();

    // Chama a função com n = 5
    contaAteN(5);

    // Verifica se console.log foi chamado 5 vezes
    expect(console.log).toHaveBeenCalledTimes(5);

    // Verifica se os valores de 1 a 5 foram impressos
    for (let i = 1; i <= 5; i++) {
      expect(console.log).toHaveBeenCalledWith(i);
    }
  });

  it('Deve imprimir apenas o número 1 quando n = 1', () => {
    // Faz o mock do console.log
    console.log = jest.fn();

    // Chama a função com n = 1
    contaAteN(1);

    // Verifica se console.log foi chamado 1 vez
    expect(console.log).toHaveBeenCalledTimes(1);

    // Verifica se o número 1 foi impresso
    expect(console.log).toHaveBeenCalledWith(1);
  });

  /*
  it('Não deve imprimir nenhum número se n < 1', () => {
    // Faz o mock do console.log
    console.log = jest.fn();

    // Chama a função com n = 0
    contaAteN(0);

    // Verifica se console.log não foi chamado
    expect(console.log).not.toHaveBeenCalled();
  });
  */
});
