describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:9000');

    cy.contains('About').click();
    cy.contains('About Page');
  });
});
