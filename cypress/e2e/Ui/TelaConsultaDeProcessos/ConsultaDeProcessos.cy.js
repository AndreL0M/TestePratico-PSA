
import DadosDeUsuario from '../../../fixtures/DadosDeUsuario.json'
const el = require('../../../support/elements').ELEMENTS

describe('Consulta de Processos', () => {
    
    beforeEach(() => {
        
        cy.UrlBase();
        cy.login(DadosDeUsuario.CpfUsuario, DadosDeUsuario.SenhaUsuario);
        cy.get(el.BotaoConsultaDeProcessos).click()

    });

    it('CT07.01-Acessar as perguntas frequentes', () => {
        
        cy.get(el.BotaoPerguntasFrequentes).click()
        cy.get(el.DuvidasGerais).should('exist')

    });

    it('CT07.02- Enviar mensagem para o suporte', () => {
        
        cy.get(el.BotaoFaleConosco).click()
        cy.get(el.BotaoAbrirSolicitacao).should('exist')

    });

    it('CT07.03-Realizar consulta de processo', () => {
        
        cy.contains(el.ConsultarProcesso).click()
        cy.contains(el.ConsultarProcesso).should('exist')

    });

    it('CT07.04-Validar documento', () => {
        
        cy.contains(el.ValidarDocumento).click()
        cy.contains(el.ValidarDocumento).should('exist')

    });

    it('CT07.05-Validar mídia', () => {
        
        cy.contains(el.ValidarMidia).click()
        cy.contains(el.ValidarMidia).should('exist')

    });

    it('CT07.06-Realizar consulta por palavra-chave', () => {
        
        //FALHOU

    });

















});