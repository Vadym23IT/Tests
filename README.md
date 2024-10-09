## Telnyx Website Automated Testing with Cypress

This repository contains automated test cases for the Telnyx website using Cypress. The test suite ensures that key features of the website function correctly, focusing on aspects such as the homepage, sign-up form, page links, and other crucial elements of the site.

Prerequisites

Before running the tests, ensure you have the following installed on your system: Node.js (version 18.x.x recommended), npm, and Cypress (which will be installed with dependencies).

Installation

To set up and run this project locally, follow these steps:

Clone the repository:

git clone https://github.com/your-repo/telnyx-tests.git

Navigate to the project directory:

cd Tests

Install the dependencies:

```bash
npm install

Running Tests

You can run the Cypress tests in either an interactive mode or a headless mode:
Run tests in Cypress Interactive Mode: This will open the Cypress Test Runner GUI where you can run and debug individual test cases:

npx cypress open

Run tests in Headless Mode: To run all tests without a GUI, use the following command:

npx cypress run

This will run the tests in the Microsoft Edge browser by default, and all results will be displayed directly in the terminal.

Test Cases Overview

The test suite covers the following key scenarios for the Telnyx website:

Homepage Load Test: Ensures that the homepage loads correctly and verifies the presence of the text "OUR NETWORK".
Solutions Page: Checks the text content on the Solutions page.
Sign-up Button & Form: Verifies the functionality of the sign-up button and form inputs.
Text Accuracy: Ensures the correctness of the text on key pages.
Link Checking: Verifies that links on the site lead to the correct destinations.
Explore Button Test: Ensures that the "Explore" button works as expected.
Contact Us Form: Checks the accuracy and functionality of the Contact Us form.
AI Blog Check: Verifies AI-related content in the Resources section.
"Explore Our Works" Section: Ensures this section displays and functions correctly.
Communication Section: Verifies the correct functionality of communication features.
Example of a Successful Test Run

After running the tests, a summary will be displayed like this:
  (Run Finished)
  ┌────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        10                                                                            │
  │ Passing:      10                                                                            │
  │ Failing:      0                                                                             │
  │ Pending:      0                                                                             │
  │ Skipped:      0                                                                             │
  │ Duration:     33 seconds                                                                    │
  │ Spec Ran:     test.cy.js                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:33       10       10        -        -        -
All tests passed successfully in this example, with a duration of 33 seconds.
