export default class DifferentPage {
    visitHomePage() {
      cy.visit('https://telnyx.com/voice-ai');
    }
  
    scrollToVoiceAISection() {
      cy.get('#features').first().scrollIntoView();
    }
  
    checkVoiceAI() {
      cy.get('#features')
        .invoke('text')
        .then((text) => {
          expect(text).to.include('The building blocks for Voice AI—all in one place');
        });
    }
  
}

  