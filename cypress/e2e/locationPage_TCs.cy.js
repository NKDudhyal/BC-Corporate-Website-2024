import {
  headerPom,
  locationPom,
  setupEnvironment,
  americasAll,
  americasCredit,
  americasDoubleImpact,
  americasInsurance,
  americasLifeSci,
  americasPartnesShip,
  americasPrivateEquity,
  americasPublicEquity,
  americasRealEstate,
  americasSpecialSitu,
  americasTechOp,
  americasVentures,
  americasCrypto,
  asiaAll,
  asiaSpecialSitu,
  asiaCredit,
  asiaPrivateEquity,
  europeAll,
  europeCredit,
  europeInsurance,
  europePrivateEquity,
  europeSpecialSituation,
  europeTechOpp,
  nolocation,
  urls,
} from "../support/setup";

describe("Location Page test Cases", function () {
  setupEnvironment();
  it("TC001 ==> Verify that location functionality works properly and url should proper.", function () {
    headerPom.location_lnk().click({ force: true });

    cy.url().should("eq", urls.Locations);
  });

  it("TC002 ==> Verify that Americas tab functionality works and verifies location name and address visibility for all types of businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.americasTab().click({ force: true });


    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasAll), (key) => {
      const locationDetails = americasAll[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC003 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Credit businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.americasTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationCreditOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasCredit), (key) => {
      const locationDetails = americasCredit[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC004 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Double Impact businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.americasTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationDoubleImpactOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasDoubleImpact), (key) => {
      const locationDetails = americasDoubleImpact[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC005 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Insurance businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.americasTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationInsuranceOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasInsurance), (key) => {
      const locationDetails = americasInsurance[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC006 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Life Sci businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.americasTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationLifeSciOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasLifeSci), (key) => {
      const locationDetails = americasLifeSci[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  /***********************************************************************************************************************
   * *********************************************************************************************************************
   * ****************************************************************************
   */

  it("TC007 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Partnership businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.americasTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationPartnershipStaOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasPartnesShip), (key) => {
      const locationDetails = americasPartnesShip[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC008 ==> Verify that Americas tab functionality works and verifies location name and address visibility for private Equity businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.americasTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationPrivateEqOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasPrivateEquity), (key) => {
      const locationDetails = americasPrivateEquity[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC009 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Public Equity businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.americasTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationPublicEqOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasPublicEquity), (key) => {
      const locationDetails = americasPublicEquity[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC010 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Real Estate businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.americasTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationRealEstateOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasRealEstate), (key) => {
      const locationDetails = americasRealEstate[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC011 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Special Situation businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.americasTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationSpecialSituationOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasSpecialSitu), (key) => {
      const locationDetails = americasSpecialSitu[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC012 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Tech Opp businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.americasTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationTechOpOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasTechOp), (key) => {
      const locationDetails = americasTechOp[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC013 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Ventures businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.americasTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationVenturesOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasVentures), (key) => {
      const locationDetails = americasVentures[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC014 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Crypto businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.americasTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationCryptoOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasCrypto), (key) => {
      const locationDetails = americasCrypto[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  /******************************************************************
   * *********************************************************
   * *************************************************************
   * ****************************************************************
   */

  it("TC015 ==> Verify that Asia Pacific tab functionality works and verifies location name and address visibility for All businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.asiaPacificTab().click({ force: true });



    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(asiaAll), (key) => {
      const locationDetails = asiaAll[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.include(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC016 ==> Verify that Asia Pacific tab functionality works and verifies location name and address visibility for Special Situation businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.asiaPacificTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationSpecialSituationOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(asiaSpecialSitu), (key) => {
      const locationDetails = asiaSpecialSitu[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC017 ==> Verify that Asia Pacific tab functionality works and verifies location name and address visibility for Credit businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.asiaPacificTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationCreditOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(asiaCredit), (key) => {
      const locationDetails = asiaCredit[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.include(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC018 ==> Verify that Asia Pacific tab functionality works and verifies location name and address visibility for Private Equity businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.asiaPacificTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationPrivateEqOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(asiaPrivateEquity), (key) => {
      const locationDetails = asiaPrivateEquity[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });


  /************************************************************************************************************************************
   * 
   * 
   * 
   * 
   * 
   * ************************************************
   */

  it("TC019 ==> Verify that Europe tab functionality works and verifies location name and address visibility for All businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.europeTab().click({ force: true });

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(europeAll), (key) => {
      const locationDetails = europeAll[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.include(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC020 ==> Verify that Europe tab functionality works and verifies location name and address visibility Credit businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.europeTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationCreditOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(europeCredit), (key) => {
      const locationDetails = europeCredit[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.include(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC021 ==> Verify that Europe tab functionality works and verifies location name and address visibility for Insurance businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.europeTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationInsuranceOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(europeInsurance), (key) => {
      const locationDetails = europeInsurance[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC022 ==> Verify that Europe tab functionality works and verifies location name and address visibility for Private Equity businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.europeTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationPrivateEqOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(europePrivateEquity), (key) => {
      const locationDetails = europePrivateEquity[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.include(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it("TC023 ==> Verify that Europe tab functionality works and verifies location name and address visibility for Special Situation businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.europeTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationSpecialSituationOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(europeSpecialSituation), (key) => {
      const locationDetails = europeSpecialSituation[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.include(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });


  it("TC024 ==> Verify that Europe tab functionality works and verifies location name and address visibility for Tech Opp businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });

    locationPom.europeTab().click({ force: true });


    locationPom.location_Buniess().click({ force: true });
    locationPom.locationTechOpOption();

    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(europeTechOpp), (key) => {
      const locationDetails = europeTechOpp[key];
      const { locationName, address } = locationDetails;

      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom
                  .getLocationName()
                  .invoke("text")
                  .then((uiLocationName) => {
                    const normalizedLocationName = uiLocationName
                      .trim()
                      .replace(/\s+/g, " ");
                    cy.log(
                      "UI Location Name (Normalized):",
                      normalizedLocationName
                    );
                    expect(normalizedLocationName).to.equal(locationName);
                  });

                // Find and validate the address
                locationPom
                  .getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address
                      .replace(/\s+/g, " ")
                      .trim();

                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);

                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });

    });
  });

  it('TC025 ==> Verify that if location not present then it should show "No Location data Found".', function () {
    headerPom.location_lnk().click({ force: true });
    cy.wait(5000)
    locationPom.asiaPacificTab().click({ force: true })

    locationPom.location_Buniess().click({ force: true });
    cy.wait(2000)
    locationPom.locationCryptoOption();
    cy.wait(2000)
    locationPom.aisanoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })

    locationPom.location_Buniess().click({ force: true });
    cy.wait(2000)
    locationPom.locationDoubleImpactOption();
    cy.wait(2000)
    locationPom.aisanoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })

    locationPom.location_Buniess().click({ force: true });
    cy.wait(2000)
    locationPom.locationInsuranceOption();
    cy.wait(2000)
    locationPom.aisanoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })

    locationPom.location_Buniess().click({ force: true });
    cy.wait(2000)
    locationPom.locationLifeSciOption();
    cy.wait(2000)
    locationPom.aisanoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })

    locationPom.location_Buniess().click({ force: true });
    cy.wait(2000)
    locationPom.locationPartnershipStaOption();
    cy.wait(2000)
    locationPom.aisanoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })

    locationPom.location_Buniess().click({ force: true });
    cy.wait(2000)
    locationPom.locationPublicEqOption();
    cy.wait(2000)
    locationPom.aisanoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })

    locationPom.location_Buniess().click({ force: true });
    cy.wait(2000)
    locationPom.locationRealEstateOption();
    cy.wait(2000)
    locationPom.aisanoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })

    locationPom.location_Buniess().click({ force: true });
    cy.wait(2000)
    locationPom.locationTechOpOption();
    cy.wait(2000)
    locationPom.aisanoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })

    locationPom.location_Buniess().click({ force: true });
    cy.wait(2000)
    locationPom.locationVenturesOption();
    cy.wait(2000)
    locationPom.aisanoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })


    locationPom.europeTab().click({ force: true })
    cy.wait(5000)

    locationPom.location_Buniess().click({ force: true });
    cy.wait(2000)
    locationPom.locationCryptoOption();
    cy.wait(2000)
    locationPom.europeNoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })

    locationPom.location_Buniess().click({ force: true });
    cy.wait(2000)
    locationPom.locationDoubleImpactOption();
    cy.wait(2000)
    locationPom.europeNoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })

    locationPom.location_Buniess().click({ force: true });
    cy.wait(2000)
    locationPom.locationLifeSciOption();
    cy.wait(2000)
    locationPom.europeNoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })

    locationPom.location_Buniess().click({ force: true });
    cy.wait(2000)
    locationPom.locationPartnershipStaOption();
    cy.wait(2000)
    locationPom.europeNoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })

    locationPom.location_Buniess().click({ force: true });
    cy.wait(2000)
    locationPom.locationPublicEqOption();
    cy.wait(2000)
    locationPom.europeNoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })

    locationPom.location_Buniess().click({ force: true }); cy.wait(2000)
    locationPom.locationRealEstateOption(); cy.wait(2000)
    locationPom.europeNoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })

    locationPom.location_Buniess().click({ force: true }); cy.wait(2000)
    locationPom.locationVenturesOption(); cy.wait(2000)
    locationPom.europeNoLocationRecord().invoke('text').then((errorMsg) => {
      expect(errorMsg).to.include(nolocation.noLocationFoundMsg);
    })

  })

});
