export default class ExplorePage {
    visitHomePage() {
      cy.visit('https://telnyx.com/');
    }
  
    clickExploreButton() {
      cy.get('a[href="/products/inference"].c-fOQMKa.c-fOQMKa-fwzCzT-background-light.c-fOQMKa-cOvXws-cv').scrollIntoView();
      cy.get('a[href="/products/inference"].c-fOQMKa.c-fOQMKa-fwzCzT-background-light.c-fOQMKa-cOvXws-cv').click();
    }
  
    checkDistributedInfrastructureText() {
      cy.get('.c-PJLV.c-fNZqWL.c-PJLV-cHtIMp-dark-false')
        .invoke('text')
        .then((text) => {
          cy.log(text);
          expect(text).to.include('ABOUT');
        });
    }
  
    scrollToAiOverview() {
      cy.get('a[href="https://telnyx.com/resources/function-calling-ai-overview"]').scrollIntoView();
      cy.get('a[href="https://telnyx.com/resources/function-calling-ai-overview"]').click();
    }
}

  