import { auth } from 'firebase';

const password = `${Math.floor(Math.random() * 1000)}+cypress_user`;
const email = `${Math.floor(Math.random() * 1000)}-signup@cypress.com`;
const user = `Cypress User ${Math.random() * 1000}`;

describe('Whatsapp copy | Application', () => {
  before(() => {
    cy.visit('/');
    auth.signOut();
    cy.visit('/');
  });
  it('Checks is render auth view', () => {
    cy.findByText(/Zaloguj się/i).should('exist');
    cy.findByText(/Stwórz konto/i).should('exist');
  });
  it('Checks is login validation correct', () => {
    cy.findByText(/Spróbuj ponownie/i).should('not.exist');
    cy.findByText(/Zaloguj się/i).click();
    cy.findByText(/Wszystkie pola muszą być uzupełnione!/i).should('be.visible');
    cy.findByPlaceholderText(/your@mail.com/i).type(`${Math.floor(Math.random() * 1000)}-login@cypress.com`);
    cy.findByText(/Wszystkie pola muszą być uzupełnione!/i).should('be.visible');
    cy.findAllByLabelText(/Password/i)
      .first()
      .type(`${Math.floor(Math.random() * 1000)}password-cypress`);
    cy.findByText(/Zaloguj się/i).click();
    cy.findByText(/Wszystkie pola muszą być uzupełnione!/i).should('not.exist');
    cy.findByText(/Spróbuj ponownie/i).should('exist');
  });
  it('Checks is creating account protocol working', () => {
    cy.reload();
    cy.findByLabelText(/Name/i).should('exist').click().type(user);
    cy.findByPlaceholderText(/example@mail.com/i).type(email);
    cy.findByText(/Stwórz konto/i).click();
    cy.findByText(/Trzy pierwsze pola/i).should('exist');
    cy.findAllByLabelText(/New password/i)
      .should('exist')
      .click()
      .type(password);
    cy.findByText(/Stwórz konto/i).click();
    cy.findByText(/Trzy pierwsze pola/i).should('not.exist');
    cy.findByText('Telefon musi być stale połączony').should('exist');
  });
  it('Checks login protocol', () => {
    auth.signOut();
    cy.visit('/');
    cy.findByText('Telefon musi być stale połączony').should('not.exist');
    cy.findByPlaceholderText(/your@mail/i).type(email);
    cy.findAllByLabelText(/Password/i)
      .first()
      .type(password);
    cy.findByText(/Zaloguj się/i).click();
    cy.findByText('Telefon musi być stale połączony').should('exist');
  });
});
