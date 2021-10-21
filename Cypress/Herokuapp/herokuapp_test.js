import { HEROKUAPP_SELECTORS } from "../../fixtures/herokuapp-selectors";

describe('Go to herokuapp', () => {
  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/');
  });

it('Test Broken Images', () => {
  cy.visit('http://the-internet.herokuapp.com/broken_images', {
  onBeforeLoad(win) {
  cy.stub(win.console, 'log').as('consoleLog')
  },
  });
  cy.CheckAllImages
  });

it('Checking checkboxes', () => { 
  cy.get('a').contains('Checkboxes')
      .click()
  cy.get(HEROKUAPP_SELECTORS.CHECKBOX)
      .as('checkboxes')
      .check()
  cy.get('@checkboxes')
      .each(checkbox => {
      expect(checkbox[0].checked).to.equal(true)
  });
  });

it('Checking Context Menu', () => {
  cy.get('a').contains('Context Menu')
      .click()
  cy.get(HEROKUAPP_SELECTORS.CONTEXT_MENU)
      .rightclick()
  cy.on('window:alert', (text) => {
      expect(text).to.contains('You selected a context menu');
  });
  });
  });