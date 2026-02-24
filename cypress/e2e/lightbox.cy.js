/// <reference types="cypress" />

context('lightbox', () => {
  beforeEach(() => {
    cy.visit('../../src/caesar/lightbox.html')
  })
    it('opens the lightbox when clicking on the image', () => 
    {
        cy.get('#lightbox').should('not.be.visible')
        cy.get('img').first().click()
        cy.get('#lightbox').should('be.visible')
    })

    it('closes the lightbox when clicking outside of it', () => 
    {
        cy.get('img').first().click()
        cy.get('#lightbox').should('be.visible')
        //on clique en dehors de la lightbox (sur le fond noir)
        cy.get('body').click(0, 0)
        cy.get('#lightbox').should('not.be.visible')
    })

    it('adds a like and updates counters in overlay and lightbox', () => 
    {
        cy.get('img').first().click()
        cy.get('#lightbox').should('be.visible')
        // vérifier que le compteur est à 0 au départ (dans la lightbox)
        cy.contains('0').should('exist')
        // cliquer sur le coeur (like)
        cy.get('#lightbox svg[title="Like"]').click()
        // vérifier que le compteur est passé à 1 dans la lightbox
        cy.get('#lightbox').contains('1')
        // fermer la lightbox
        cy.get('body').click(0, 0)
        // afficher l’overlay (hover sur l’image)
        cy.get('img').first().trigger('mouseover')
        // vérifier que le compteur est aussi à 1 dans l’overlay
        cy.contains('1').should('exist')
    })

    it('supp a like and updates counters in overlay and lightbox', () => 
    {
        cy.get('img').first().click()
        cy.get('#lightbox').should('be.visible')
        cy.get('#lightbox svg[title="Like"]').click()
        cy.contains('1').should('exist')
        cy.get('#lightbox svg[title="Dislike"]').click()
        cy.get('#lightbox').contains('0')
        cy.get('body').click(0, 0)
        cy.get('img').first().trigger('mouseover')
        cy.contains('0').should('exist')
    })

    it('send a new com', () => 
    {
        cy.get('img').first().click()
        cy.get('#lightbox').scrollTo('bottom')
        cy.get('comment-input').type('Cypress is awesome!')
        cy.get('comment-publish').click()
    })
})