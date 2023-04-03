const elementos = require('../../../support/elements/elements').ELEMENTS
const faker = require('faker-br')
var cpf = faker.br.cpf();
var nome = faker.name.firstName();
var email = faker.internet.email(); 

function cadastro(CPF,Nome,Email,Dia,Mes,Ano,Tel,CEP,Endereço,Numero,Complemento,Bairro,Cidade,Estado,Senha,ConfirmaçaoDeSenha) {

    cy.get('[data-cy="inputCPF"]').type(CPF)
    cy.get('[data-cy="inputName"]').type(Nome)
    cy.get('[data-cy="inputEmail"]').type(Email)
    cy.get(':nth-child(3) > .input-container > [data-cy="inputBirth"]').select(Dia)
    cy.get(':nth-child(4) > .input-container > [data-cy="inputBirth"]').select(Mes)
    cy.get(':nth-child(5) > .input-container > [data-cy="inputBirth"]').select(Ano)
    cy.get('[data-cy="inputTelephone"]').type(Tel)
    cy.get('[data-cy="inputCEP"]').type(CEP)
    cy.get('[data-cy="inputAddress"]').type(Endereço)
    cy.get('[data-cy="inputNumber"]').type(Numero)
    cy.get('[data-cy="inputDetails"]').type(Complemento)
    cy.get('[data-cy="inputNeighborhood"]').type(Bairro)
    cy.get('[data-cy="inputCity"]').type(Cidade)
    cy.get('[data-cy="inputState"]').select(Estado)
    cy.get('[data-cy="inputPassword"]').type(Senha)
    cy.get('[data-cy="inputPasswordConfirmation"]').type(ConfirmaçaoDeSenha)
    cy.get('.mb-3 > .checkmark').click()
    cy.get(':nth-child(2) > .checkmark').click()

}

describe('Testes Referentes a tela de cadastro', () => {

    beforeEach(() => {
        
        cy.UrlBase()
        cy.get(elementos.BotaoCriarConta).click()


    });
    
it('caso valido', () => {

    cadastro(cpf,nome,email,'01','01','1999','99999999','60120100','frei vidal','1840','pioxii','pioxii','Fortaleza','CE','123@Test','123@Test');




    
});

























});