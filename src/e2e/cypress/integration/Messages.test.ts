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
  it('Checks messages sending', () => {
    cy.findByTestId('optionsForProfile').click().findByTestId('createMessage').click();
    cy.findAllByPlaceholderText('Fullname').last().type('Jakub Michał Fedoszczak', { force: true });
    cy.findAllByText("Let's talk!").last().click({ force: true });
    cy.wait(2000);
    cy.reload();
    cy.wait(2000);
    cy.findByText('A dobrze, a tam?').should('not.exist');
    cy.findByText('Jakub Michał Fedoszczak').parent().click();
    cy.findByText('A dobrze, a tam?').should('exist');
    cy.findByPlaceholderText('Wpisz tutaj wiadomość...').type(`Cypress test | ID - ${Math.floor(Math.random() * 1000)}`);
    cy.findByTestId('sendButton').click();
  });
});
