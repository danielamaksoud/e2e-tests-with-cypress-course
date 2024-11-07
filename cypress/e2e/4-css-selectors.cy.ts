describe("Locators", () => {
    beforeEach(() => {
        cy.visit('/dynamicid');
    });

    it("Cy.Contains example", () => {
        cy.contains("Button with Dynamic ID").should("have.text", "Button with Dynamic ID");
    });
});