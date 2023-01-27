
const el = require('./elements').ELEMENTS;

class Pages {

    acessarPagLogin() {
        cy.clearAllCookies();
        cy.visit(Cypress.env('url'));                                                            //endereço da pág de login
    }

    preencherLoginPag() {
        cy.get(el.campoUsername).type(Cypress.env('usuarioCaso1'));                              //campo para preencher com o usuário
        cy.get(el.campoSenha).type(Cypress.env('senha'));                                        //preencher campo senha
        //cy.get(el.campoSenha).type(Cypress.env('senha'), {log: false});                        //preencher campo senha e log: false para não mostrar a senha no log quando rodar o teste
        cy.get(el.botaoLogin).click();                                                           //clicar botão login
    }

    preencherLoginPag2() {
        cy.get(el.campoUsername).type(Cypress.env('usuarioCaso2'));                              //campo para preencher com o usuário
        cy.get(el.campoSenha).type(Cypress.env('senha'));                                        //preencher campo senha
        //cy.get(el.campoSenha).type(Cypress.env('senha'), {log: false});                        //preencher campo senha e log: false para não mostrar a senha no log quando rodar o teste
        cy.get(el.botaoLogin).click();                                                           //clicar botão login
    }

    listarProdutosZaA() {
        cy.get(el.botaoListaDeProduto).select('za');
    }

    selecionarProdutoItem1() {
        cy.get(el.primeiroItem).click();
    }

    adicionarAoCarrinho() {
        cy.get(el.adicionarAoCarrinho).click();
    }

    adicionarAoCarrinho2() {
        cy.get(el.adicionarAoCarrinho2).click();
    }

    realizarCheckout() {
        cy.get(el.linkDoCarrinho).click();
        cy.get(el.botaoCheckout).click();
        cy.get(el.campoPrimeiroNomeCheckout).type(Cypress.env('primeiroNomeCheckout'));
        cy.get(el.campoSobrenomeCheckout).type(Cypress.env('sobrenomeCheckout'));
        cy.get(el.campoCEPCheckout).type(Cypress.env('CEPCheckout'));
        cy.get(el.botaoContinueCheckout).click();
    }

    finalizarCompra() {
        cy.get(el.botaoFinalizarCompra).click();
    }

}

export default new Pages();
