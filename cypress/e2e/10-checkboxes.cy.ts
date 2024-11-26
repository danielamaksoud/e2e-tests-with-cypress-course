describe('Demo QA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/checkbox`);
    });

    it('Checkbox scenario', () => {
        cy.get('input[type="checkbox"]').click();
    });
});

describe('The internet app', () => {
    it('', () => {
        
    });
});