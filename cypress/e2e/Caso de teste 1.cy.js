/// <reference types="cypress" />

import Pages from '../support/Pages/metodos';

describe('Caso de Teste 1', () => {
   it.only('CT-1 - Realizar uma compra com sucesso', () => {
      Pages.acessarPagLogin();
      cy.get('#login_credentials > h4').should('have.text', "Accepted usernames are:");
      cy.screenshot();

      Pages.preencherLoginPag();
      cy.get('.title').should('have.text', "Products");
      cy.screenshot();

      Pages.listarProdutosZaA();
      cy.get('[data-test="product_sort_container"]').should('contain.text', "Name (Z to A)");
      cy.screenshot();

      Pages.selecionarProdutoItem1();
      cy.get('[data-test="back-to-products"]').should('have.id', "back-to-products");
      cy.screenshot();

      Pages.adicionarAoCarrinho();
      cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').should('have.id', "remove-sauce-labs-bolt-t-shirt");
      cy.screenshot();

      Pages.realizarCheckout();
      cy.get('.title').should('have.text', "Checkout: Overview");
      cy.screenshot();

      Pages.finalizarCompra();
      cy.get('.title').should('have.text', 'Checkout: Complete!');
      cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
      cy.screenshot();
   })

});