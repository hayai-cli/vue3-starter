describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("/");
    cy.get('[href="/about"]').click();
    cy.get("body").click();
    cy.get(".router-link-active").click();
    cy.get('[href="/"]').click();
    cy.get("header").click();
    cy.get(".green").click();
    cy.get(".green").should("have.class", "green");
    cy.get(".green").click();
  });
});
