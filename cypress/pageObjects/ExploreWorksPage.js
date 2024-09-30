export default class ExploreWorksPage {
    visitHomePage() {
      cy.visit('https://telnyx.com/');
    }
  
    scrollToCodeSection() {
      cy.get('#code').scrollIntoView();
    }
  
    checkCodeSectionText(expectedText) {
      cy.get('.c-PJLV.c-PJLV-kmbBBS-dark-true.c-PJLV-ealYFu-lead-false')
        .invoke('text')
        .then((text) => {
          expect(text).to.include(expectedText);
        });
    }
  
    clickDevelopersLink() {
      cy.get('a[href="https://developers.telnyx.com/"]').last().click();
    }
  
    checkDevelopersPageUrl() {
      cy.url().should('eq', 'https://developers.telnyx.com/');
    }
  
    scrollToNumberSearchLink() {
      cy.get('a[href="/docs/numbers/phone-numbers/number-search"]').last().scrollIntoView();
    }
  
    clickNumberSearchLink() {
      cy.get('a[href="/docs/numbers/phone-numbers/number-search"]').last().click();
    }
  
    checkNumberSearchPageUrl() {
      cy.url().should('eq', 'https://developers.telnyx.com/docs/numbers/phone-numbers/number-search');
    }
  
    scrollToRubySection() {
      cy.get('#ruby').scrollIntoView();
    }
  
    checkRubyText(expectedText) {
      cy.get('#ruby')
        .invoke('text')
        .then((text) => {
          expect(text).to.include(expectedText);
        });
    }
  }
  