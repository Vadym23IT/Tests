export class HomePage {
    visit() {
      cy.visit('https://telnyx.com/');
    }
  
    scrollToOurNetwork() {
      cy.get('a[href="/our-network"]').last().scrollIntoView();
    }
  
    getOurNetworkLinkText() {
      return cy.get('a[href="/our-network"]').last().invoke('text');
    }
  
    clickSolutions() {
      cy.get('button.c-gMsfuT').click();
      cy.get('a[href="/solutions"]').click({ force: true });
    }
  
    clickExploreCommunication() {
      cy.get('a[href="/products#communication"]').click();
    }
}
  
export default HomePage;
  