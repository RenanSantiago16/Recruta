Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/login')

  cy.get('#email').type(email)
  cy.get('#password').type(senha)
  cy.get('.MuiButton-root').click()

  cy.url().should('include', '/dashboard')
})