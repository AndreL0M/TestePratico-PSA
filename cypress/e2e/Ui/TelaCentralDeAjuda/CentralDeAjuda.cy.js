
import DadosDeUsuario from '../../../fixtures/DadosDeUsuario.json';
const el = require('../../../support/elements').ELEMENTS

describe('Central de ajuda', () => {
    
    beforeEach(() => {
        
       cy.UrlBase();
       cy.login(DadosDeUsuario.CpfUsuario, DadosDeUsuario.SenhaUsuario);
       cy.get(el.BotaoCentralDeAjuda).click()

    });

    it('CT06.01-Acessar as perguntas frequentes', () => {
        
        cy.get(el.BotaoPerguntasFrequentes).click()
        cy.get(el.DuvidasGerais).should('exist')

    });

    it('CT06.02-Enviar mensagem para o suporte', () => {
        
        cy.get(el.BotaoFaleConosco).click()
        cy.get(el.BotaoAbrirSolicitacao).should('exist')

    });

    it('CT06.03-Consultar a central de ajuda', () => {
        
        //FALHOU

    });

    it('CT06.04-Ver dúvidas gerais', () => {
        
        cy.get(el.DuvidasGerais).click()
        cy.get(el.PerguntaDoTipoGeral).should('exist')

    });

    it('CT06.05- Ver órgão de teste', () => {
        
        cy.get(el.OrgaoDeTeste).click()
        cy.get(el.PerguntaTesteFaq).should('exist')

    });

    it('CT06.06-Ver órgão geral', () => {
        
        cy.get(el.OrgaoGeral).click()
        cy.get(el.PerguntaPadraoDoOrgaoGeral).should('exist')

    });



});



























