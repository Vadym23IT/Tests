export default class SolutionsPage {
    // Елементи сторінки
    get solutionsLink() {
      return cy.get('a[href="/solutions"]');
    }
  
    get headerText() {
      return cy.get('h1.c-PJLV.c-fGbiyG.c-PJLV-cHtIMp-dark-false').first();
    }
  
    // Методи для взаємодії з елементами
    clickSolutionsLink() {
      this.solutionsLink.click({ force: true });
    }
  
    checkHeaderText(expectedText) {
      this.headerText.invoke('text').then((text) => {
        cy.log(text);
        expect(text).to.include(expectedText);
      });
    }
}

  