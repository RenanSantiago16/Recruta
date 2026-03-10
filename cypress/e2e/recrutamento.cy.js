describe('recrutamento', () => {
  beforeEach(() => {
    cy.visit('https://app.dev.recrutamento.itixti-lab.com.br')
  })
 it.only('Deve realizar login com sucesso', () => {
    cy.get('.btn-login').click()
    cy.get('[name="email"]').type('getulio.pereira@gmail.com')
    cy.get('[name="password"]').type('Itix.123')
    cy.get('.btn').click()
    cy.url().should('include', '/gestao-de-vagas')
  })
  it.only('Deve exibir mensagem de erro para credenciais inválidas', () => {
    cy.get('.btn-login').click()
    cy.get('[name="email"]').type('getulio.pereira@gmail.com')
    cy.get('[name="password"]').type('wrongpassword')
    cy.get('.btn').click()
    cy.contains('Erro').should('be.visible')
  })

})