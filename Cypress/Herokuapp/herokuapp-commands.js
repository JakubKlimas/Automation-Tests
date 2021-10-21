import { HEROKUAPP_SELECTORS } from "../../fixtures/herokuapp-selectors";

Cypress.Commands.add('CheckAllImages', () => {
cy.get(HEROKUAPP_SELECTORS.IMG_ONE).should('be.visible');
cy.get(HEROKUAPP_SELECTORS.IMG_TWO).should('be.visible');
cy.get(HEROKUAPP_SELECTORS.IMG_THREE).should('be.visible');
});