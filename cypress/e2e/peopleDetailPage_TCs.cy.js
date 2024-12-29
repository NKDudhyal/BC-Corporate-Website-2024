import {
  setupEnvironment,
  cookiePom,
  newsPom,
  newsDetialPom,
  randomBusniessOption,
  randomYearOption,
  randomExistBusinessNews,
  randomExistYearNews,
  randomNewsTypes,
  randomNotExistBusiness,
  randomNotExistYear,
  headerPom,
  peoplePom,
  randomPeopleLocation,
  titleSelection,
  randomPeopleBusniess,
  random_people_VenturesFocus,
  random_people_CreditFocus,
  random_people_PrivateEquityFocus,
  random_allpeopleNames,
  PeopleTestData,
  random_peopleNames,
} from "../support/setup";

describe("People Detail Page Test Cases", function () {
  setupEnvironment();

  // it("TC001 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames1; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });

  // it("TC002 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames2; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });

  // it("TC003 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames3; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });

  // it("TC004 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames4; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });

  // it.only("TC005 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames5; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });

  // it("TC006 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames6; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });

  // it("TC007 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames7; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });


  // it("TC008 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames8; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });

  // it("TC009 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames9; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });

  // it("TC010 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames10; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });


  // it("TC011 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames11; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });


  // it("TC012 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames12; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });


  // it("TC013 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames13; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });


  // it("TC014 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames14; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });


  // it("TC015 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames15; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });

  // it("TC016 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
  //   const names = PeopleTestData.allPeopleNames16; // Extract the names array

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of names
  //   names.forEach((name, index) => {
  //     const trimmedName = name.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ")
  //     cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


  //     // Enter the name in the search field 
  //     cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

  //     // Click on the search icon
  //     cy.get("#people-search > .fa-solid").click({ force: true });
  //     cy.wait(2000);

  //     // Check if the name is visible in the results
  //     cy.get("body").then(($body) => {
  //       if ($body.find('.team-bg .team-desc h4 span').length > 0) {
  //         cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
  //           const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
  //           cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
  //           cy.wait(3000);

  //           // Name found in results, click on the profile link
  //           cy.get(".people-detail-link").click({ force: true });
  //           cy.wait(5005);

  //           // Verify that the profile page URL contains the expected format 
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // Navigate back to the search page for the next name
  //           cy.go('back');
  //         });
  //       } else if ($body.find("#people-listing .alert").length > 0) {
  //         // No results found, verify the 'No More Record Found' message
  //         cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
  //       } else {
  //         throw new Error("Unexpected state: Neither results nor error message found.");
  //       }
  //     });

  //     // Clear the search field before the next iteration
  //     cy.get("#peopleSearch").clear({ force: true });
  //   });
  // });

  /****************************************************************************************** */

  it("TC017 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples1; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults1.json', mismatchData);
      }
    });
  });

  it.only("TC018 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples2; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults2.json', mismatchData);
      }
    });
  });

  it("TC019 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples3; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults3.json', mismatchData);
      }
    });
  });

  it("TC020 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples4; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults4.json', mismatchData);
      }
    });
  });


  it("TC021 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples5; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults5.json', mismatchData);
      }
    });
  });


  it("TC022 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples6; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults6.json', mismatchData);
      }
    });
  });


  it.only("TC023 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples7; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults7.json', mismatchData);
      }
    });
  });


  it("TC024 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples8; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults8.json', mismatchData);
      }
    });
  });


  it("TC025 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples9; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults9.json', mismatchData);
      }
    });
  });


  it("TC026 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples10; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults10.json', mismatchData);
      }
    });
  });


  it("TC027 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples11; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults11.json', mismatchData);
      }
    });
  });


  it("TC028 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples12; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults12.json', mismatchData);
      }
    });
  });


  it("TC029 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples13; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults13.json', mismatchData);
      }
    });
  });


  it("TC030 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples14; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults14.json', mismatchData);
      }
    });
  });


  it.only("TC031 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples15; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults15.json', mismatchData);
      }
    });
  });


  it("TC032 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples16; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults16.json', mismatchData);
      }
    });
  });


  it("TC033 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples17; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults17.json', mismatchData);
      }
    });
  });


  it("TC034 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples18; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults18.json', mismatchData);
      }
    });
  });


  it("TC035 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples19; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults19.json', mismatchData);
      }
    });
  });


  it("TC036 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples20; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults20.json', mismatchData);
      }
    });
  });

  /**** */

  it("TC037 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples21; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults21.json', mismatchData);
      }
    });
  });

  /**** */

  it("TC038 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples22; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults22.json', mismatchData);
      }
    });
  });

  /**** */

  it("TC039 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples23; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults23.json', mismatchData);
      }
    });
  });

  /**** */

  it("TC040 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples24; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults24.json', mismatchData);
      }
    });
  });

  /**** */

  it("TC041 ==> Verify that searched people bio detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples25; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000)
    // Iterate through the list of people data
    peopleData.forEach((person, index) => {
      const trimmedName = person.peopleName.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ");
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);
  
      // Enter the name in the search field
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });
      cy.wait(3000)
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(3000)
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(10000);
  
            // Verify that the profile page URL contains the expected format
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);
  
            // -------------------------------
            // Verify details and capture mismatches
            cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
              if (designationText.trim() !== person.designationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "designationName",
                  from_json_expected: person.designationName,
                  from_UI_actual: designationText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
              if (businessTypeText.trim() !== person.businessTypeName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "businessTypeName",
                  expected: person.businessTypeName,
                  actual: businessTypeText.trim(),
                });
              }
            });
            cy.wait(3000)
            cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
              if (locationText.trim() !== person.locationName) {
                mismatchData.push({
                  peopleName: person.peopleName,
                  key: "locationName",
                  expected: person.locationName,
                  actual: locationText.trim(),
                });
              }
            });
            cy.wait(3000)
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
            cy.wait(5000)
          });
        } else if ($body.find("#people-listing .alert").length > 0) {
          // No results found, verify the 'No More Record Found' message
          cy.get("#people-listing .alert").should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });
  
      // Clear the search field before the next iteration
      cy.get("#peopleSearch").clear({ force: true });
    });
  
    // After all iterations, write mismatched data to a JSON file
    cy.then(() => {
      if (mismatchData.length > 0) {
        cy.writeFile('cypress/fixtures/mismatchResults25.json', mismatchData);
      }
    });
  });

  /**** */
});
