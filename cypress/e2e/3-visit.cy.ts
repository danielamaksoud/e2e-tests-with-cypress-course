describe('basics', () => {
    beforeEach(()=>{
        cy.visit('/textinput');
    });
    it('visit explanation text input', () => {
        cy.url().then((url) => {
            cy.log(`Printing the URL: ${url}`);
            expect(url).to.contains('/textinput');
        });
    });
    it('title validation', () => {
        cy.title().then((title)=> {
            cy.log(title);
            expect(title).to.be.equal('Text Input');
        });
    });
    it('Input Challenge', () => {
        cy.get('input#newButtonName').type('teste');
        cy.get('button#updatingButton').click().should('have.text', 'teste');
    });
});