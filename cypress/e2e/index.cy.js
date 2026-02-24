/// <reference types="cypress" />

context('Caesar Cypher', () => {
  beforeEach(() => {
    cy.visit('../../src/index.html')
  })

  it('has a paragraph with Caesar Cypher', () => {
    cy.get('p').should('have.text', 'Caesar Cypher')
  })

  it('encrypts hello world with key 6', () => {
    cy.get('#nombres').type('6')
    cy.get('#text').type('hello world')
    cy.get('#boutonenter').click()

    cy.get('#resultat').should('have.text', 'Nkrru Cuxrj')
  })

  it('displays result in green', () => {
    cy.get('#nombres').type('6')
    cy.get('#text').type('hello world')
    cy.get('#boutonenter').click()

    cy.get('#resultat')
      .should('have.css', 'color')
      .and('eq', 'rgb(0, 128, 0)')
  })
})