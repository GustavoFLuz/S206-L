/// <reference types='cypress'/>

describe('Criando cenário de teste para a documentação do Cypress', () => {
  it('Caso de teste: Entrar no item "API" da barra de navegação', () => {
    visit();
    cy.get('.flex > [href="/api/table-of-contents"]').click()
    cy.get('h1').should('contain.text', 'Table of Contents') 
  })

  it('Caso de teste: pesquisar "Writing Your First E2E Test"', () => {
    visit();
    cy.get('.DocSearch').click()
    cy.get('#docsearch-input').type('Writing Your First E2E Test')
    cy.get('#docsearch-item-0').click();
    cy.get('h1').should('contain.text', 'Writing Your First E2E Test') 
  })
  it('Caso de teste: botão "Back to Top"', () => {
    visit();
    cy.scrollTo('bottom')
    cy.get('.text-blue').click()
    cy.window().its('scrollY').should('equal', 0)
  })
  it('Caso de teste: navegação para learn cypress', () => {
    visit();
    cy.get('.flex > [href="https://learn.cypress.io"]').click()
    cy.url().should('include', 'https://learn.cypress.io')
  })
  it('Caso de teste: dropdown do menu esquerdo não deve alterar o conteúdo', () => {
    visit();
    cy.get('h1').then(h1Before=>{
      const text = h1Before.text();
      cy.get('[data-test="dashboard"] > .text-left').click()
      cy.get('h1').should(h1After => {
        expect(h1After.text()).to.eq(text)
      }) 
    })
  })
  it('Caso de teste: clicar no menu direito não deve permanecer na mesma página', () => {
    visit();
    cy.url().then(oldUrl=>{
      cy.get('.scrollactive-nav > :nth-child(11) > .block').click();
      cy.url().then(newUrl=>{
        expect(newUrl!=oldUrl)
      })
    })
  })
})

function visit() {
  cy.visit('https://docs.cypress.io')
}