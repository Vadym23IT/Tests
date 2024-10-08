import HomePage from '../pageObjects/HomePage'
import SignUpPage from '../pageObjects/SignUpPage';
import ContactUsPage from '../pageObjects/ContactUsPage';
import SolutionsPage from '../pageObjects/SolutionsPage';
import DifferentPage from '../pageObjects/DifferentPage';
import TelnyxPage from '../pageObjects/TelnyxPage';
import ExplorePage from '../pageObjects/ExplorePage';
import ResourcesPage from '../pageObjects/ResourcesPage';
import ExploreWorksPage from '../pageObjects/ExploreWorksPage';
import ExploreCommunicationPage from '../pageObjects/ExploreCommunicationPage';

describe('10 Test cases for Telnyx website', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Повертати false, щоб запобігти падінню тесту через uncaught exceptions
    if (err.message.includes('The play() request was interrupted by a call to pause()')) {
      return false;
    }
    return true; // Дозволяє обробляти інші помилки
  });

  it('Should load the Telnyx homepage, and check text "OUR NETWORK"', () => {
    const homePage = new HomePage();  
    homePage.visit();
    homePage.scrollToOurNetwork();
    homePage.getOurNetworkLinkText().then((linkText) => {
      expect(linkText).to.include('Our Network');
    });
  });  

  it('Check correct text in Solutions page', () => {
    const solutionsPage = new SolutionsPage();
    cy.visit('https://telnyx.com/');

    cy.get('button.c-gMsfuT').click(); // Приймаємо cookies
    solutionsPage.clickSolutionsLink();
    solutionsPage.checkHeaderText('Solutions for scaling your business');
  });

  it('Check sign up button and their inputs', () => {
    const signUpPage = new SignUpPage();  
    signUpPage.visit();
    signUpPage.fillEmail('wrwrw@gka.com');
    signUpPage.fillFirstName('Admin01232');
    signUpPage.fillLastName('Rambo');
    signUpPage.fillPassword('Superpassswword12/');
    signUpPage.agreeToTerms();
    signUpPage.subscribe();
    signUpPage.submitForm();
  });
  

  it('Check the accuracy and correctness of the text on page', () => {
    const differentPages = new DifferentPage();
    differentPages.visitHomePage();
    differentPages.scrollToVoiceAISection();

    differentPages.checkVoiceAI('The building blocks for Voice AI—all in one place');
  });
  

  it('Checking the links for correctness', () => {
    const telnyxPage = new TelnyxPage();
    telnyxPage.visitHomePage();
    
    telnyxPage.checkUrl('https://shop.telnyx.com/');

    telnyxPage.checkFeaturedProductsText('Featured products');

    telnyxPage.scrollToAccessoriesSection();
    telnyxPage.clickAccessoriesButton();
    telnyxPage.checkUrl('https://shop.telnyx.com/collections/telnyx-accessories');

    telnyxPage.scrollToFooter();
    telnyxPage.clickFacebookLink();
  })

  it('Checking explore button and info about that', () => {
    const explorePage = new ExplorePage()
    explorePage.visitHomePage();

    explorePage.clickExploreButton();

    explorePage.checkDistributedInfrastructureText('ABOUT');

    explorePage.scrollToAiOverview();
  })

  it('Checking correctivity of Contact Us', () => {
    const contactUsPage = new ContactUsPage();  
    contactUsPage.visit();
    contactUsPage.selectReason('Sales-Inquiry');
    contactUsPage.fillFirstName('Arastab');
    contactUsPage.fillLastName('Vastarchak');
    contactUsPage.fillEmail('Vastar20@gmail.com');
    contactUsPage.fillPhoneNumber('+380', '+380991934562');
    contactUsPage.fillcompanyWebsite('-');
    contactUsPage.fiilProductInterest('Networking');
    contactUsPage.fillCase('Programmable Network');
    contactUsPage.fillMonthlySpend('$500 - $1000');
    contactUsPage.fillAdditionalInfo('For studying');
    contactUsPage.fillHear('Facebook');
    contactUsPage.submitForm();
  
    cy.get('h1.c-PJLV.c-fGbiyG.c-PJLV-kmbBBS-dark-true').invoke('text').then((text1) => {
      expect(text1).to.include('Thank you.');
    });
  });
  

  it('Checking info in resources and results of AI in blog', () => {
    const resourcesPage = new ResourcesPage();

    resourcesPage.visitHomePage();

    resourcesPage.checkResourcesPageUrl();
    resourcesPage.checkResourcesHeaderText('Browse all articles, guides, and news');

    resourcesPage.searchForAI();
    resourcesPage.checkSearchResults();
    resourcesPage.checkFirstResultText('InferenceAI training vs. fine-tuning: What’s the difference?By Emily Bowen');
  })

  it('Checking "Explore our works" for correctivity', () => {
    const exploreWorksPage = new ExploreWorksPage();

    exploreWorksPage.visitHomePage();

    exploreWorksPage.checkCodeSectionText('Sign up for our marketing newsletter for new products and feature updates, tutorials, and events.');

    exploreWorksPage.clickDevelopersLink();
    exploreWorksPage.checkDevelopersPageUrl();

    exploreWorksPage.scrollToNumberSearchLink();
    exploreWorksPage.clickNumberSearchLink();
    exploreWorksPage.checkNumberSearchPageUrl();

    exploreWorksPage.scrollToRubySection();
  })

  it('Explore Communiaction', () => {
    const exploreCommunicationPage = new ExploreCommunicationPage();
    exploreCommunicationPage.visitHomePage();

    exploreCommunicationPage.checkCommunicationPageUrl();

    exploreCommunicationPage.scrollToCommunicationsSection();
    exploreCommunicationPage.clickPhoneNumbersLink();
    exploreCommunicationPage.checkPhoneNumbersPageUrl();

    exploreCommunicationPage.scrollToFeatureRichSection();
    exploreCommunicationPage.checkFeatureRichText('Feature rich phone numbers at your fingertips');
  })

})
