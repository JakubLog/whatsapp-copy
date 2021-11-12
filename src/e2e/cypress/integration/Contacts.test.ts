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
  it('Checks is contacts add/remove mechanisms works', () => {
    cy.findByTestId('optionsForProfile').click().findByTestId('createMessage').click();
    cy.findAllByPlaceholderText('Fullname').last().type('Jakub Michał Fedoszczak', { force: true });
    cy.findAllByText("Let's talk!").last().click({ force: true });
    cy.wait(2000);
    cy.findByTestId('closeSlider').click();
    cy.findByText('Jakub Michał Fedoszczak').parent().click();
    cy.findByTestId('optionsForContact').click().findByTestId('removeContact').should('exist').click();
    cy.findByText('Jakub Michał Fedoszczak').should('not.exist');
    cy.wait(2000);
  });
  it('Checks is contacts toggling mechanisms works', () => {
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
    cy.findByText('Jakub Michał Fedoszczak').parent().click();
    cy.findByText('Kuba Menel').parent().click();
    cy.findByText('Jakub Michał Fedoszczak').parent().click();
    cy.findByTestId('optionsForContact').click().findByTestId('removeContact').should('exist').click();
    cy.findByText('Kuba Menel').parent().click();
    cy.findByTestId('optionsForContact').click().findByTestId('removeContact').should('exist').click();
    cy.findByText('Jakub Michał Fedoszczak').should('not.exist');
    cy.findByText('Kuba Menel').should('not.exist');
  });
});
