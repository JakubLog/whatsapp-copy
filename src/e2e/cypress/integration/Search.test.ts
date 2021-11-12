/* eslint-disable cypress/no-unnecessary-waiting */
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from 'firebase';

describe('Whatsapp copy | Application', () => {
  before(() => {
    cy.visit('/');
    auth.signOut();
    cy.wait(2000);
    signInWithEmailAndPassword(auth, 'test123@test.com', 'test123456');
  });
  it('Adds missing contacts', () => {
    cy.reload();
    cy.findByTestId('optionsForProfile').click().findByTestId('createMessage').click();
    cy.findAllByPlaceholderText('Fullname').last().type('Jakub Michał Fedoszczak', { force: true });
    cy.findAllByText("Let's talk!").last().click({ force: true });
    cy.wait(2000);
    cy.reload();
    cy.wait(2000);
    cy.findByTestId('optionsForProfile').click().findByTestId('createMessage').click();
    cy.findAllByPlaceholderText('Fullname').last().type('Kuba Menel', { force: true });
    cy.findAllByText("Let's talk!").last().click({ force: true });
    cy.wait(2000);
    cy.findByTestId('closeSlider').click();
  });
  it('Checks is searching works', () => {
    cy.findByPlaceholderText(/wyszukaj lub/i)
      .should('exist')
      .type('Ku');
    cy.findByText('Kuba Menel').should('exist');
    cy.findByText('Jakub Michał Fedoszczak').should('not.exist');
    cy.findByPlaceholderText(/wyszukaj lub/i)
      .should('exist')
      .clear()
      .type('Jaku');
    cy.findByText('Kuba Menel').should('not.exist');
    cy.findByText('Jakub Michał Fedoszczak').should('exist');
  });
});
