/// <reference types="cypress" />

context('Home screen', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('has welcome card', () => {
    cy.get('.content > .card.highlight-card')
      .should('contain', 'ng-minimal-repo app is running!');
  });

});
