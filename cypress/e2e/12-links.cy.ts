describe('Dealing with links that open new tabs', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/links`);
    });
    it.skip('First approach, don´t click on the link', () => {
        cy.get('#simpleLink').should('have.attr', 'href', 'https://demoqa.com');
        cy.get('#simpleLink').should('have.attr', 'target', '_blank');
    });
    it('Second approach, remove the target', () => {
        cy.get('#simpleLink').invoke('removeAttr', 'target').click();
        cy.url().then((url) => {
            expect(url).to.be.equal('https://demoqa.com/');
        });
    });
});