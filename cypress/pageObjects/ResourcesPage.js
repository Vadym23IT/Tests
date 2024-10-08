export default class ResourcesPage {
    visitHomePage() {
      cy.visit('https://telnyx.com/resources');
    }
  
    checkResourcesPageUrl() {
      cy.url().should('eq', 'https://telnyx.com/resources');
    }
  
    checkResourcesHeaderText(expectedText) {
      cy.get('h1.c-PJLV.c-fKwEGa.c-PJLV-kmbBBS-dark-true')
        .invoke('text')
        .then((text) => {
          expect(text).to.include(expectedText);
        });
    }
  
    searchForAI() {
      cy.get('input[type="search"]').type('AI{enter}');
    }
  
    checkSearchResults() {
      cy.get('#2lgnxv8jmozrdv4LFCdA9I').find('li').should('have.length.greaterThan', 0);
    }
  
    checkFirstResultText(expectedText) {
      cy.get('li').first().invoke('text').should('include', expectedText);
    }
  }
  