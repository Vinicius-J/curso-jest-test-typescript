import { IndividualCustomer, EnterpriseCustomer } from './custumer';

const createIndividualCustumer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustumer(
      'Vinícius',
      'Joaquim',
      '111.111.111-11',
    );
    expect(sut).toHaveProperty('firstName', 'Vinícius');
    expect(sut).toHaveProperty('lastName', 'Joaquim');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustumer(
      'Vinícius',
      'Joaquim',
      '111.111.111-11',
    );
    expect(sut.getName()).toBe('Vinícius Joaquim');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name, cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '111.111');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '111.111');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Udemy', '111.111');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('111.111');
  });
});
