export default class TelnyxPage {
    visitHomePage() {
      cy.visit('https://shop.telnyx.com');
    }

    checkUrl(expectedUrl) {
      cy.url().should('eq', expectedUrl);
    }
  
    checkFeaturedProductsText(expectedText) {
      cy.get('h2.title.inline-richtext.h2.scroll-trigger.animate--slide-in')
        .invoke('text')
        .then((text) => {
          cy.log(text);
          expect(text).to.include(expectedText);
        });
    }
  
    scrollToAccessoriesSection() {
      cy.get('#ImageWithText--template--14828910772302__178f5744-6443-44de-be85-40ec0ab6cead').scrollIntoView();
    }
  
    clickAccessoriesButton() {
      cy.get('a[href="/collections/telnyx-accessories"].button.button--primary').last().click();
    }
  
    scrollToFooter() {
      cy.get('footer').scrollIntoView();
    }
  
    clickFacebookLink() {
      cy.get('a[href="https://www.facebook.com/Telnyx/"].link.list-social__link').last().invoke('removeAttr', 'target').click();
    }
}
  