describe('TESTANDO ALGUMA COISA', () => {
  it('should return one', () => {
    const number = 1;
    expect(number).not.toBe(1);
  });
});

describe('TESTANDO OUTRA COISA', () => {
  test('should return Vinícius', () => {
    const nome = 'Vinícius';
    expect(nome).not.toBe('Vinícius');
  });
});
