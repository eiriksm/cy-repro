describe('Start the site', () => {

  it('Starts and works', () => {
    const url = 'http://localhost:3000'
    cy.visit(url)
    cy.get('body.sw-body', {timeout: 10000}).should('exist');
  })
})
