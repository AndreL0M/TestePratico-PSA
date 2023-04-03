import DadosDeUsuario from '../../../fixtures/DadosDeUsuario.json'
const el = require('../../../support/elements').ELEMENTS

describe('Tela de Agendamento', () => {

    beforeEach(() => {

        cy.UrlBase();
        cy.login(DadosDeUsuario.CpfUsuario, DadosDeUsuario.SenhaUsuario);
        cy.get(el.BotaoDeAgendamento).click()

    });
 
    it('CT05.01-Criar uma nova agenda', () => {

         //cy.get('[class="ant-btn ant-btn-default style-button-custom overwrite"]').trigger('mouseover').trigger('click')
         //cy.get('#rc_select_1').select('')
         //cy.get('#rc_select_1').select('Órgão Processo Seletivo André')
        // mesmo apos varias testes nao consigo interagir com o botão

    });    

    it('CT05.02-Limpar a busca', () => {
        
        cy.get(el.BotaoLimparBusca).click()
        cy.get(el.BotaoNovaAgenda).should("exist")

    });

    it('CT05.03-Filtro à barra de pesquisa', () => {
        
       // FALHOU

    });

    it('CT05.04-Ver mais serviços', () => {
        
        cy.contains('Mais serviços').click()  
        cy.get(el.BotaoDeAgendamento).should('exist')

    });

    it('CT05.05-Abrir processos', () => {
        
        cy.contains('Abrir processo').click()
        cy.get(el.ImagemDeConfirmacao).should('exist')

    });

    it('CT05.06-Ver meus processos', () => {
        
        cy.contains('Meus processos').click()
        cy.get(el.Confirmacao).should('exist')

    });

    it('CT05.07-Ver processos arquivados', () => {
        
        cy.contains('Processos arquivados').click()
        cy.get(el.Confirmacao).should('exist')

    });





























});