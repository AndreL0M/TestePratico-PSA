import DadosDeUsuario from "../../../fixtures/DadosDeUsuario.json";
const el = require('../../../support/elements').ELEMENTS

function Agendamento (){

    cy.get('[data-cy="attendanceServiceCard"] > .service-header > p').click()

}

describe('Tela inicial', () => {

    beforeEach(() => {
        
        cy.UrlBase();
        cy.login(DadosDeUsuario.CpfUsuario, DadosDeUsuario.SenhaUsuario);

    });

    it('CT04.03-Sino', () => {

        cy.get(el.Sino).click()
        cy.get(el.ConfirmacaoNotificacao).should('have.text','NOTIFICAÇÕES')
        
    });

    it('CT04.04-Dados de usuário', () => {

        cy.get(el.Usuario).click()  
        cy.get(el.ConfirmacaoUsuario).should('exist')    
        
    });
    
    it('CT04.05-Agendamento', () => {
 
        Agendamento();
        cy.get(el.BotaoNovaAgenda).should("have.text"," Nova Agenda")

    });

    it('CT04.05.1-Agendamento (hiperlink)', () => {

       // FALHOU

    });

    it('CT04.06-Central de ajuda', () => {

        cy.get(el.BotaoCentralDeAjuda).click()
        cy.get(el.ComoPodemosAjudar).should('exist')
        
    });

    it('CT04.06.1-Central de ajuda (hiperlink)', () => {

       // FALHOU

    });

    it('CT04.07-Consulta de processos', () => {

        cy.get(el.BotaoConsultaDeProcessos).click()
       /cy.get(el.OqueVoceQuerFazer).should('exist')
    
    });

    it('CT04.07.1-Consulta de processos (hiperlink)', () => {

       // FALHOU
        
    });

    it('CT04.08-Licenciamento', () => {
        
       // FALHOU

    });

    it('CT04.09-Protocolo', () => {
        
        cy.get(el.Protocolo).click()
        cy.get(el.MeusProcessos).should('have.text','MEUS PROCESSOS')

    });







































});