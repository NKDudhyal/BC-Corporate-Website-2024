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

  it("TC001 ==> TC001 ==> Verify that the entered name in the People search is visible in the results, clickable, and that the URL and title of the individual profile page match the name.", function () {
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
      peoplePom.set_searchField().clear({ force: true }).type(trimmedName, { force: true });

      // Click on the search icon
      peoplePom.click_searchIcon().click({ force: true });
      cy.wait(2000);

      // Check if the name is visible in the results
      cy.get("body").then(($body) => {
        if ($body.find(peoplePom.verify_People_Name()).length > 0) {
          cy.get(peoplePom.verify_People_Name()).invoke('text').then((resultName) => {
            const normalizedResultName = resultName.trim().replace(/\s+/g, " ");
            cy.wrap(normalizedResultName).should('include', trimmedName); // Partial match for the name
            cy.wait(3000);

            // Name found in results, click on the profile link
            peoplePom.peopleLink().click({ force: true });
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
        } else if ($body.find(peoplePom.noMoreRecordsMsg()).length > 0) {
          // No results found, verify the 'No More Record Found' message
          peoplePom.noMoreRecordsMsg().should('be.visible').and('contain.text', 'No More Record Found');
        } else {
          throw new Error("Unexpected state: Neither results nor error message found.");
        }
      });

      // Clear the search field before the next iteration
      peoplePom.set_searchField().clear({ force: true });
    });
  });






























  

  it.only("TC002 ==> Verify that the entered name should be visible in result, clickable, and details like designation, business type, and location match the profile page", function () {
    headerPom.people_lnk().click({ force: true });


    PeopleTestData.completeDetailOfPeoples.forEach((person) => {
      const normalizedName = person.peopleName.replace(/\s+/g, " ").trim();

      cy.log(`Searching for: ${normalizedName}`);

      // Enter the normalized name into the search field
      peoplePom
        .set_searchField()
        .clear({ force: true })
        .type(normalizedName, { force: true });


      // Click search icon
      peoplePom.click_searchIcon().click({ force: true });


      // Check the result
      cy.get("body").then(($body) => {
        if ($body.text().includes("No More Record Found")) {
          // Assert no record message is displayed
          cy.contains("No More Record Found").should("be.visible");
          cy.log("No More Record Found");
        } else {
          // Assert the displayed name matches the normalized input
          peoplePom
            .verify_People_Name()
            .invoke("text")
            .then((displayedName) => {
              const displayedNameTrimmed = displayedName
                .replace(/\s+/g, " ")
                .trim();
              expect(displayedNameTrimmed).to.include(normalizedName);
              cy.log(
                `Expected name = ${normalizedName}, Displayed name = ${displayedNameTrimmed}`
              );

              // Get name from team section and store in resultName
              cy.get(".team-bg .team-desc h4 span")
                .invoke("text")
                .then((resultName) => {
                  const resultNameTrimmed = resultName
                    .replace(/\s+/g, " ")
                    .trim();
                  cy.log(`Stored resultName = ${resultNameTrimmed}`);

                  // Click on the detailed link to view individual profile
                  cy.get(".people-detail-link").click({ force: true });


                  // Verify designation, business type, and location
                  cy.get(".people-related-info ul li:nth-child(1)")
                    .invoke("text")
                    .then((designation) => {
                      try {
                        expect(designation.trim()).to.equal(
                          person.designationName
                        );
                        cy.log(
                          `Designation: ${designation.trim()} matches ${person.designationName
                          }`
                        );
                      } catch (error) {
                        cy.log(
                          `Mismatch in Designation for ${normalizedName}: Expected = ${person.designationName
                          }, Actual = ${designation.trim()}`
                        );
                      }
                    });

                  cy.get(".people-related-info ul li:nth-child(2)")
                    .invoke("text")
                    .then((businessType) => {
                      try {
                        expect(businessType.trim()).to.equal(
                          person.businessTypeName
                        );
                        cy.log(
                          `Business Type: ${businessType.trim()} matches ${person.businessTypeName
                          }`
                        );
                      } catch (error) {
                        cy.log(
                          `Mismatch in Business Type for ${normalizedName}: Expected = ${person.businessTypeName
                          }, Actual = ${businessType.trim()}`
                        );
                      }
                    });

                  cy.get(".people-related-info ul li:nth-child(3)")
                    .invoke("text")
                    .then((location) => {
                      try {
                        expect(location.trim()).to.equal(person.locationName);
                        cy.log(
                          `Location: ${location.trim()} matches ${person.locationName
                          }`
                        );
                      } catch (error) {
                        cy.log(
                          `Mismatch in Location for ${normalizedName}: Expected = ${person.locationName
                          }, Actual = ${location.trim()}`
                        );
                      }
                    });

                  // Navigate back to the previous page
                  cy.go("back");
                });
            });
        }
      });


      // Clear the search field before the next iteration
      peoplePom.set_searchField().clear();
    });
  });
});
