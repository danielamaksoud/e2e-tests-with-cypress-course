describe('Environment Variable Demo', () => {
    it('Demo', () => {
        cy.log(`Printing Envinroment Variable Value: ${Cypress.env("demoVar")}`);
    });
});