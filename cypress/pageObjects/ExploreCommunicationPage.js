export default class ExploreCommunicationPage {
    visitHomePage() {
      cy.visit('https://telnyx.com/products#communication');
    }

    checkCommunicationPageUrl() {
      cy.url().should('eq', 'https://telnyx.com/products#communication');
    }
  
    scrollToCommunicationsSection() {
      cy.get('#communications').scrollIntoView();
    }
  
    clickPhoneNumbersLink() {
      cy.get('a[href="/products/phone-numbers"].c-fOQMKa.c-fOQMKa-iIbKSy-kind-list.c-fOQMKa-fwzCzT-background-light.c-fOQMKa-fDDGm-cv.mchNoDecorate').click();
    }
  
    checkPhoneNumbersPageUrl() {
      cy.url().should('eq', 'https://telnyx.com/products/phone-numbers');
    }
  
    scrollToFeatureRichSection() {
      cy.get('#2ULvrnTijRREJziyaK01MA').scrollIntoView();
    }
  
    checkFeatureRichText(expectedText) {
      cy.get('#2ULvrnTijRREJziyaK01MA')
        .invoke('text')
        .then((text) => {
          expect(text).to.include(expectedText);
        });
    }
}