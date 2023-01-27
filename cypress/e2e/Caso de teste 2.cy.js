/// <reference types="cypress" />

import Pages from '../support/Pages/metodos';


describe('Caso de Teste 2', () => {
   it.only('CT-2 - Realizar uma compra', () => {
      Pages.acessarPagLogin();
      cy.get('#login_credentials > h4').should('have.text', "Accepted usernames are:");
      cy.screenshot();

      Pages.preencherLoginPag2();
      cy.get('.title').should('have.text', "Products");
      cy.screenshot();

      Pages.adicionarAoCarrinho2();
      cy.get('[data-test="remove-sauce-labs-onesie"]').should('have.id', "remove-sauce-labs-onesie");
      cy.screenshot();

      Pages.realizarCheckout();
      cy.get('.error-message-container').should('have.text', "Error: Last Name is required");
      cy.screenshot();

   })

});