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
  
    cy.get('div.c-UUKrH.c-UUKrH-kDyeyw-type-error').invoke('text').then((text) => {
      expect(text).to.include('That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.');
    });
  });
  

  it('Check the accuracy and correctness of the texts on pages', () => {
    const differentPages = new DifferentPage();
    differentPages.visitHomePage();
  
    differentPages.checkIntroText('Telnyx provides a comprehensive suite of developer tools, web interfaces and cloud infrastructure to help you build and launch innovative, AI-centric communications and connectivity products anywhere around the world.');
  
    differentPages.scrollToVoiceAISection();
    differentPages.checkVoiceAIText('Telnyx Conversational AI delivers on speed, quality, and knowledge, all from a single platform. Build cost-effective, low-latency Voice AI solutions on one provider');
  });
  

  it('Checking the links for correctness', () => {
    const telnyxPage = new TelnyxPage();
    telnyxPage.visitHomePage();
    telnyxPage.acceptCookies();

    telnyxPage.clickShopLink();
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

    explorePage.scrollToExploreSection();
    explorePage.clickExploreButton();

    explorePage.checkDistributedInfrastructureText('Your one-stop shop for distributed infrastructure.');

    explorePage.scrollToNetworkingSection();
    explorePage.clickCloudVPNLink();

    explorePage.checkCloudVPNUrl('https://telnyx.com/products/cloud-vpn');

    explorePage.scrollToConnectingSection();
    explorePage.checkStartConnectingText('Start connecting');
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
    resourcesPage.acceptCookies();
    resourcesPage.openMenu();
    resourcesPage.clickResourcesLink();

    resourcesPage.checkResourcesPageUrl();
    resourcesPage.checkResourcesHeaderText('Browse all articles, guides, and news');

    resourcesPage.searchForAI();
    resourcesPage.checkSearchResults();
    resourcesPage.checkFirstResultText('MessagingWhat is RCS? Understanding the Future of MessagingBy Michael Bratschi');
  })

  it('Checking "Explore our works" for correctivity', () => {
    const exploreWorksPage = new ExploreWorksPage();

    exploreWorksPage.visitHomePage();

    exploreWorksPage.scrollToCodeSection();
    exploreWorksPage.checkCodeSectionText('Telnyx is committed to putting builders in the driver’s seat. Use a platform developers love to access global communications and connectivity infrastructure through a suite of intuitive APIs. Leverage our developer docs and SDKs to get up and running quickly.');

    exploreWorksPage.clickDevelopersLink();
    exploreWorksPage.checkDevelopersPageUrl();

    exploreWorksPage.scrollToNumberSearchLink();
    exploreWorksPage.clickNumberSearchLink();
    exploreWorksPage.checkNumberSearchPageUrl();

    exploreWorksPage.scrollToRubySection();
    exploreWorksPage.checkRubyText('Ruby');
  })

  it('Explore Communiaction', () => {
    const exploreCommunicationPage = new ExploreCommunicationPage();
    exploreCommunicationPage.visitHomePage();

    exploreCommunicationPage.scrollToCommunicationSection();
    exploreCommunicationPage.clickCommunicationLink();
    exploreCommunicationPage.checkCommunicationPageUrl();

    exploreCommunicationPage.scrollToCommunicationsSection();
    exploreCommunicationPage.clickPhoneNumbersLink();
    exploreCommunicationPage.checkPhoneNumbersPageUrl();

    exploreCommunicationPage.scrollToFeatureRichSection();
    exploreCommunicationPage.checkFeatureRichText('Feature rich phone numbers at your fingertips');

    exploreCommunicationPage.checkCustomerFeedback('We use Telnyx to purchase and assign DIDs to our Genesys Cloud phone system. The ease of use allows our Tier 2 team to perform the tasks and reduces man-hours to obtain the DID itself.');
  })

})
