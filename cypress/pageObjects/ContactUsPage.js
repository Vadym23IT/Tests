export class ContactUsPage {
    
    visit() {
      cy.visit('https://telnyx.com/contact-us');
    }
  
    selectReason(reason) {
      cy.get('#Reason_for_Contact__c').select(reason);
    }
  
    fillFirstName(firstName) {
      cy.get('#FirstName').type(firstName);
    }
  
    fillLastName(lastName) {
      cy.get('#LastName').type(lastName);
    }
  
    fillEmail(email) {
      cy.get('#Email').type(email);
    }
  
    fillPhoneNumber(countryCode, phoneNumber) {
      cy.get('#Phone_Number_Extension__c').select(countryCode);
      cy.get('#Phone_Number_Base__c').type(phoneNumber);
    }

    fillcompanyWebsite(nameCompany) {
      cy.get('#Website').type(nameCompany);
    }

    fiilProductInterest(interest) {
      cy.get('#Form_Product__c').select(interest);
    }

    fillCase(infocase) {
      cy.get('#Use_Case_Form__c').select(infocase);
    }

    fillMonthlySpend(money) {
      cy.get('#Form_Budget__c').select(money);
    }
  
    fillAdditionalInfo(info) {
      cy.get('#Form_Additional_Information__c').type(info);
    }

    fillHear(where) {
      cy.get('#How_did_you_hear_about_Telnyx_Open__c').type(where);
    }
  
    submitForm() {
      cy.get('button.mktoButton').click();
    }

}
  
export default ContactUsPage;
  