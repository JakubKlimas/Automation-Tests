const cypress = require("cypress");

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage
    cy.get('input[placeholder = E-address]').clear().type(username)
    cy.get('input[type = password]').clear().type(password)
    cy.contains('Login').click
})

Cypress.Commands.add('clicking1', (username) => {

    cy.get('input[name = email]').click()
        .type(username)
        .should('have.value', username)
        .clear()

    cy.get('input[name = email]').click('topLeft')
        .type(username)
        .should('have.value', username)
        .clear()

    cy.get('input[name = email]').click('top')
        .type(username)
        .should('have.value', username)
        .clear()

    cy.get('input[name = email]').click('topRight')
        .type(username)
        .should('have.value', username)
        .clear()

    cy.get('input[name = email]').click('left')
        .type(username)
        .should('have.value', username)
        .clear()

    cy.get('input[name = email]').click('right')
        .type(username)
        .should('have.value', username)
        .clear()

    cy.get('input[name = email]').click('bottomLeft')
        .type(username)
        .should('have.value', username)
        .clear()

    cy.get('input[name = email]').click('bottom')
        .type(username)
        .should('have.value', username)
        .clear()

    cy.get('input[name = email]').click('bottomRight')
        .type(username)
        .should('have.value', username)
        .clear()

    cy.get('div[class = column]').click('topLeft')
        .type(username)
        .should('not.have.value', username)

})

Cypress.Commands.add('clicking2', (password) => {

    cy.get('input[type = password]').click()
        .type(password)
        .should('have.value', password)
        .clear()

    cy.get('input[type = password]').click('top')
        .type(password)
        .should('have.value', password)
        .clear()

    cy.get('input[type = password]').click('left')
        .type(password)
        .should('have.value', password)
        .clear()

    cy.get('input[type = password]').click('right')
        .type(password)
        .should('have.value', password)
        .clear()

    cy.get('input[type = password]').click('bottomLeft')
        .type(password)
        .should('have.value', password)
        .clear()

    cy.get('input[type = password]').click('bottom')
        .type(password)
        .should('have.value', password)
        .clear()

    cy.get('input[type = password]').click('bottomRight')
        .type(password)
        .should('have.value', password)
        .clear()

    cy.get('div[class = column]').click('left')
        .type(password)
        .should('not.have.value', password)

})