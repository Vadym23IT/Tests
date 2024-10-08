export default class ExploreWorksPage {
    visitHomePage() {
      cy.visit('https://telnyx.com/');
    }

    checkCodeSectionText() {
      cy.get('.c-PJLV.c-PJLV-kmbBBS-dark-true.c-PJLV-ealYFu-lead-false').scrollIntoView();
      cy.get('.c-PJLV.c-PJLV-kmbBBS-dark-true.c-PJLV-ealYFu-lead-false')
        .invoke('text')
        .then((text) => {
          expect(text).to.include('');
        });
    }
  
    clickDevelopersLink() {
      cy.visit('https://developers.telnyx.com');
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
}
  