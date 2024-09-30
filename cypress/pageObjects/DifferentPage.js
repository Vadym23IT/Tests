export default class DifferentPage {
    visitHomePage() {
      cy.visit('https://telnyx.com/');
    }
  
    checkIntroText(expectedText) {
      cy.get('p.c-PJLV.c-PJLV-cHtIMp-dark-false.c-PJLV-ghYBfS-lead-true.c-PJLV-iliYLyy-css')
        .invoke('text')
        .then((text) => {
          cy.log(text);
          expect(text).to.include(expectedText);
        });
    }
  
    scrollToVoiceAISection() {
      cy.get('#voice-ai').scrollIntoView();
    }
  
    checkVoiceAIText(expectedText) {
      cy.get('#voice-ai').invoke('text').then((text) => {
        cy.log(text);
        expect(text).to.include(expectedText);
      });
    }
  
  }

  