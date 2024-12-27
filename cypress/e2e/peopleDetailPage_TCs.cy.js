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

describe("People Page Tests", function () {
  setupEnvironment();

  it("TC001 ==> Verify that searched people should be visible in result section, clickable, title and url should be visible.", function () {
    const names = PeopleTestData.allPeopleNames; // Extract the names array

    headerPom.people_lnk().click({ force: true });

    // Iterate through the list of names
    names.forEach((name, index) => {
      const trimmedName = name.trim()
        .replace(/\s+/g, " ")
        .replace(/\(+/g, "")
        .replace(/\)+/g, "")
        .replace(/\'+/g, " ")
        .replace(/\,+/g, " ")
      cy.log(`Processing Name: ${trimmedName} (Index: ${index})`);


      // Enter the name in the search field 
      cy.get("#peopleSearch").clear({ force: true }).type(trimmedName, { force: true });

      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(2000);

      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);

            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(5005);

            // Verify that the profile page URL contains the expected format 
            const formattedName = trimmedName.replace(/\s+/g, "-")
              .replace(/\.+/g, "")
              .replace(/\(+/g, "")
              .replace(/\)+/g, "")
              .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
            cy.url().should('include', `/people/${formattedName}`);
            cy.wait(3000);

            // Navigate back to the search page for the next name
            cy.go('back');
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
  });


  // it("Tc002 ==> Verify each name in the People search and handle results accordingly", function () {
  //   const peopleData = PeopleTestData.completeDetailOfPeoples; // Extract all people data

  //   headerPom.people_lnk().click({ force: true });

  //   // Iterate through the list of people data
  //   peopleData.forEach((person, index) => {
  //     const trimmedName = person.peopleName.trim()
  //       .replace(/\s+/g, " ")
  //       .replace(/\(+/g, "")
  //       .replace(/\)+/g, "")
  //       .replace(/\'+/g, " ")
  //       .replace(/\,+/g, " ");
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
  //           cy.wait(5000);

  //           // Verify that the profile page URL contains the expected format
  //           const formattedName = trimmedName.replace(/\s+/g, "-")
  //             .replace(/\.+/g, "")
  //             .replace(/\(+/g, "")
  //             .replace(/\)+/g, "")
  //             .replace(/\,+/g, " ").toLowerCase(); // Include accented characters
  //           cy.url().should('include', `/people/${formattedName}`);
  //           cy.wait(3000);

  //           // -------------------------------

  //           // Verify Designation Name
  //           cy.get('.people-related-info li:nth-child(1)').invoke('text').then((designationText) => {
  //             expect(designationText.trim()).to.equal(person.designationName);
  //           });

  //           // Verify Business Type Name
  //           cy.get('.people-related-info li:nth-child(2)').invoke('text').then((businessTypeText) => {
  //             expect(businessTypeText.trim()).to.equal(person.businessTypeName);
  //           });

  //           // Verify Location Name
  //           cy.get('.people-related-info li:nth-child(3)').invoke('text').then((locationText) => {
  //             expect(locationText.trim()).to.equal(person.locationName);
  //           });

  //           // -------------------------------

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


  it("TC002 ==> Verify that searched people detail should be matched properly.", function () {
    const peopleData = PeopleTestData.completeDetailOfPeoples; // Extract all people data
    const mismatchData = []; // Array to store mismatched entries
  
    headerPom.people_lnk().click({ force: true });
  
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
  
      // Click on the search icon
      cy.get("#people-search > .fa-solid").click({ force: true });
      cy.wait(2000);
  
      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find('.team-bg .team-desc h4 span').length > 0) {
          cy.get('.team-bg .team-desc h4 span').invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);
  
            // Name found in results, click on the profile link
            cy.get(".people-detail-link").click({ force: true });
            cy.wait(5000);
  
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
  
            // -------------------------------
            // Navigate back to the search page for the next name
            cy.go('back');
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
        cy.writeFile('cypress/fixtures/mismatchResults.json', mismatchData);
      }
    });
  });

  
});
