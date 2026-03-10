describe('recrutamento', () => {
  beforeEach(() => {
    cy.visit('https://app.dev.recrutamento.itixti-lab.com.br')
    cy.get('.btn-login').click()
  })

  it('fazendo cadastro', () => {
    cy.get('.link').click()
    cy.get('[name="nome"]').type('abubaqar').should('be.visible', 'abubaqar')
    cy.get('[name="sobrenome"]').type('Santiago').should('be.visible', 'Santiago')
    cy.get('.input-date-picker').type('15032004').should('be.visible', '15/03/2004')
    cy.get('[name="cpf"]').type('11122233344').should('be.visible', '111.222.333-44')
    cy.get('[name="email"]').type('1')
    cy.wait(2500)
    cy.get('[name="email"]').type('abubaqar15@gmail.com').should('be.visible', 'abubaqar15@gmail.com')
    cy.wait(2500)
    cy.get('[name="senha"]').type('Abubaqar123').should('not.be.visible', 'Abubaqar123')
    cy.get(':nth-child(1) > .custom-input-group > .addIcon > .imgIcon > .ci-hide').click()
    cy.get('[name="senha"]').should('be.visible', 'Abubaqar123')
    cy.get(':nth-child(1) > .custom-input-group > .addIcon > .imgIcon > .ci-hide').click()
    cy.get('[name="senha"]').should('not.be.visible', 'Abubaqar123')
    cy.get('[name="confirmarSenha"]').type('Abubaqar123').should('not.be.visible', 'Abubaqar123')
    cy.get(':nth-child(2) > .custom-input-group > .addIcon > .imgIcon > .ci-hide').click()
    cy.get('[name="confirmarSenha"]').should('be.visible', 'Abubaqar123')
    cy.get(':nth-child(2) > .custom-input-group > .addIcon > .imgIcon > .ci-hide').click()
    cy.get('[name="confirmarSenha"]').should('not.be.visible', 'Abubaqar123')

  })
  /*
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
  })*/

})