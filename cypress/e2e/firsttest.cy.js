describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/Nelima/')
    cy.contains('Software Developer');
  
  })
})