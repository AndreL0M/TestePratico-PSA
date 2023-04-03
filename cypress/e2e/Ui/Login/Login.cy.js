import DadosDeUsuario from "../../../fixtures/DadosDeUsuario.json";
const el = require ('../../../support/elements').ELEMENTS;

describe('001-Login', () => {

    beforeEach(() => {
        
        cy.UrlBase();

    });

    it('CT01.01-Login válido com CPF e senha', () => {
        
        cy.login(DadosDeUsuario.CpfUsuario,DadosDeUsuario.SenhaUsuario)

        cy.get(el.LogoConfirmacao).should('exist')

    });

    it('CT01.02-Login com CPF inválido', () => {
        
        cy.login("99999999999","9999999")
        cy.get(el.MensagemDeErro).should("have.text","CPF ou senha inválido. Preencha novamente.")

    });

    it('CT01.03-Login com CPF válido e senha inválido', () => {
        
        cy.login("902.799.550-81","1234567")
        cy.get(el.MensagemDeErro).should("have.text","CPF ou senha inválido. Preencha novamente.")

    });

    it('CT01.04-Login com CPF em branco', () => {
        
        cy.login("{insert}","Teste@123")
        cy.get(el.MensagemDeErro).should("have.text","CPF ou senha inválido. Preencha novamente.")

    });

    it('CT01.05-Login com senha em branco', () => {
        
        cy.login("902.799.550-81","{insert}")
        cy.get(el.MsgSenhaErrada).should("have.text","Este campo é de preenchimento obrigatório.")

    });

    it('CT01.06-Central de ajuda na tela de loguin', () => {
        
        cy.get(el.CentralDeAjuda).click()
        cy.get(el.MsgBoasvindas).should('exist')

    });

    it('CT01.07-Criar conta', () => {

        cy.get(el.BotaoCriarConta).click()
        cy.get(el.MsgConfirmacao).should('have.text',"REGISTRAR")
        
    });

    it('CT01.08-Mantenha-me conectado', () => {
        
        cy.get(el.MantenhameConectado).click() 
        cy.get(el.MantenhameConectado).should('have.css', 'background-color', 'rgb(25, 118, 210)');
        
    });

    it('CT01.09-Esqueci a senha', () => {

        cy.get(el.BotaoEsqueciMinhaSenha) .click()
        cy.get(el.MsgConfirmacao).should('exist')
        
    });


 });