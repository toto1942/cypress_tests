describe('template spec', () => {
  it('test de login valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains(' You logged into a secure area!')
    
    
  }) 

  it('test de login no valido 1', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('tom')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains(' You logged into a secure area!')
    
    
  }) 

  it('test de login  no valido 2', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('Super')
    cy.get('.fa').click()
    cy.get('#flash').contains(' You logged into a secure area!')
    
    
  }) 

  it('test de login no valido 3', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contain('')
    
    
  }) 

})
