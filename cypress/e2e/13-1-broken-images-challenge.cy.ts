let img2: HTMLImageElement;

describe ('Broken images with Demo QA', () => {
    beforeEach('', () => {
        cy.visit(`${Cypress.env("theInternet")}/broken_images`);
    });
    it('Not Broken Image Detected (first)', () => {
        cy.get('div.example img')
        .first()
        .should('be.visible')
        .and(($img2) => {
            const img2 = $img2[0] as unknown as HTMLImageElement | null;
            expect(img2.naturalWidth).to.be.greaterThan(0);
        });
    });
    it('Not Broken Image Detected (last)', () => {
        cy.get('div.example img')
        .last()
        .should('be.visible')
        .and(($img2) => {
            const img2 = $img2[0] as unknown as HTMLImageElement | null;
            expect(img2.naturalWidth).to.be.greaterThan(0);
        });
    });
});