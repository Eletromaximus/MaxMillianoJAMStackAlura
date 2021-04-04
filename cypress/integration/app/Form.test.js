/// <reference types="cypress" />

describe('/pages', () => {
  it('go to the Contact Form', () => {
    cy.visit('localhost:3000')
  })
  describe('when click contac', () => {
    it('go to the contact form', () => {
      cy.get('button[name="contato"]').click()
    })

    it('when fill and submit a form login request', () => {
      cy.get('#formMessage input[name="name"]').type('maxmilliano')
      cy.get('#formMessage input[name="email"]').type('maximus@gmail.com')
      cy.get('textarea').type('asfasfasfasdf')
      cy.get('#formMessage button[type="submit"]').click()
    })
  })
})
