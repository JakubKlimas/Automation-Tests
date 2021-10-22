import { HEROKUAPP_SELECTORS } from "../fixtures/herokuapp_selectors";

Cypress.Commands.add('CheckAllImages', () => {
cy.get(HEROKUAPP_SELECTORS.IMG_ONE).should('be.visible');
cy.get(HEROKUAPP_SELECTORS.IMG_TWO).should('be.visible');
cy.get(HEROKUAPP_SELECTORS.IMG_THREE).should('be.visible');
});

Cypress.Commands.add('DisappearingEle', () => {
    cy.get('a').contains('Home')
        .should('be.visible')
    cy.get('a').contains('About')
        .should('be.visible')
    cy.get('a').contains('Contact Us')
        .should('be.visible')
    cy.get('a').contains('Portfolio')
        .should('be.visible')
    cy.get('body').then($body => {
        if ($body.find("a[href = '/gallery/']").length > 0) {   
            cy.get("a[href = '/gallery/']").then($button => {
                if ($button.is(':visible')){  
                cy.get("a[href = '/gallery/']").click()
                cy.contains('Not Found')
        } else {
            assert.isOk('everything','everything is OK');
            };
        });
        };
    });
});