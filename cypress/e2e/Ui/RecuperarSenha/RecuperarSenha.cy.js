//import { it } from "faker-br/lib/locales";
import DadosDeUsuario from "../../../fixtures/DadosDeUsuario.json";
const el = require ('../../../support/elements').ELEMENTS

describe('003-Recuperar Senha', () => {

    beforeEach(() => {
        
        cy.UrlBase();
        cy.get(el.BotaoEsqueciMinhaSenha).click();


    });

    it('CT03.01-Recuperar senha caso válido', () => {
        
        cy.get(el.Email).type('marques08andre@gmail.com')
        cy.get(el.ConfirmacaoEmail).type('marques08andre@gmail.com')
        cy.get(el.BotaoEmailDeRecuperacao).click()
        cy.get(el.ImagenConfirmacao).should('exist')

    });

    it('CT03.02-Recuperar senha caso inválido', () => {

        cy.get(el.Email).type('jurasicpark@gmail.com')
        cy.get(el.ConfirmacaoEmail).type('jurasicpark@gmail.com')
        cy.get(el.BotaoEmailDeRecuperacao).click()
        cy.get(el.MsgEmailNCadastrado).should('have.text','Este e-mail não está cadastrado')
        
    });

    it.only('CT03.03-Recuperar senha campo em branco', () => {

        cy.get(el.Email)
        cy.get(el.ConfirmacaoEmail)
        cy.get(el.BotaoEmailDeRecuperacao).click()
        cy.get(el.MsgCampoObrigatorio).should('have.text','Este campo é de preenchimento obrigatório.')
        
    });

    it('CT03.04-Recuperação com email e confirmação de email diferentes', () => {
        
        cy.get(el.Email).type('jurasicpark@gmail.com')
        cy.get(el.ConfirmacaoEmail).type('jurasicparkson@gmail.com')
        cy.get(el.BotaoEmailDeRecuperacao).click()
        cy.get(el.MsgEmailsDiferentes).should('have.text','Os e-mails não estão iguais. Preencha novamente.')
        

    });

});