export default class ExplorePage {
    visitHomePage() {
      cy.visit('https://telnyx.com/');
    }
  
    scrollToExploreSection() {
      cy.get('.c-VtwRU').scrollIntoView();
    }
  
    clickExploreButton() {
      cy.get('a[href="/products#communication"]').click();
    }
  
    checkDistributedInfrastructureText(expectedText) {
      cy.get('.c-PJLV.c-fGbiyG.c-PJLV-kmbBBS-dark-true')
        .invoke('text')
        .then((text) => {
          cy.log(text);
          expect(text).to.include(expectedText);
        });
    }
  
    scrollToNetworkingSection() {
      cy.get('#networking').scrollIntoView();
    }
  
    clickCloudVPNLink() {
      cy.get('a[href="/products/cloud-vpn"]').click();
    }
  
    checkCloudVPNUrl(expectedUrl) {
      cy.url().should('eq', expectedUrl);
    }
  
    scrollToConnectingSection() {
      cy.get('#1gMlk6gveEAonSVAYP6PiA').scrollIntoView();
    }
  
    checkStartConnectingText(expectedText) {
      cy.get('.c-PJLV.c-fKwEGa')
        .invoke('text')
        .then((text) => {
          cy.log(text);
          expect(text).to.include(expectedText);
        });
    }
}

  