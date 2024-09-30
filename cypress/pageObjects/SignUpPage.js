export class SignUpPage {
    visit() {
      cy.visit('https://telnyx.com/sign-up');
    }
  
    fillEmail(email) {
      cy.get('#email').type(email);
    }
  
    fillFirstName(firstName) {
      cy.get('#first_name').type(firstName);
    }
  
    fillLastName(lastName) {
      cy.get('#last_name').type(lastName);
    }
  
    fillPassword(password) {
      cy.get('#password').type(password);
    }
  
    agreeToTerms() {
      cy.get('#terms_and_conditions').click();
    }
  
    subscribe() {
      cy.get('#subscription_opt_in').click();
    }
  
    submitForm() {
      cy.get('button[type="submit"]').first().click();
    }
}
  
export default SignUpPage;
  