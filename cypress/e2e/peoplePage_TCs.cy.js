import {
  setupEnvironment,
  headerPom,
  peoplePom,
  randomPeopleLocation,
  titleSelection,
  randomPeopleBusniess,
  random_people_VenturesFocus,
  random_people_CreditFocus,
  random_people_PrivateEquityFocus,
  random_peopleNames,
  PeopleTestData,
} from "../support/setup";

describe("People Page Test Cases", function () {
  setupEnvironment();

  it("TC001 ==> Verfiy that location dropdown work properly.", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    peoplePom.peopleLocation_Dropdown_btn().click({ force: true });
    peoplePom
      .select_People_Location_Option(randomPeopleLocation)
      .click({ force: true });
    peoplePom.verify_Selected_Location_Option_Visible(randomPeopleLocation);
  });

  it("TC002 ==> Verfiy that title dropdown work properly.", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    peoplePom.peopleTitle_Dropdown_btn().click({ force: true });
    peoplePom.select_People_Title_Option(titleSelection).click({ force: true });
    peoplePom.verify_Selected_People_Title_Option_Visible(titleSelection);
  });

  it("TC003 ==> Verfiy that business dropdown work properly.", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    peoplePom.peopleBusiness_dropdown_btn().click({ force: true });
    peoplePom
      .select_People_Busniess_Option(randomPeopleBusniess)
      .click({ force: true });
    peoplePom.verify_Selected_People_Busniess_Option_Visible(
      randomPeopleBusniess
    );
  });

  it("TC004 ==> Verify that after selecting Credit, Private Equity, and Ventures options, the Focus dropdown is visible.", function () {
    // Navigate to People page
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    // Load data from PeopleTestData.json
    cy.fixture("PeopleTestData.json").then((data) => {
      const businessOptionsToSelect = ["Credit", "Private Equity", "Ventures"]; // Filtered options to test

      // Iterate through each required business option
      businessOptionsToSelect.forEach((businessName) => {
        // Click on the Business dropdown
        cy.get(":nth-child(5) > .btn").click({ force: true });

        // Select the specific business option from the dropdown
        peoplePom
          .select_People_Busniess_Option(businessName)
          .click({ force: true });

        // Verify that the Focus dropdown is visible
        cy.get("#dropdownFocusArea > .btn")
          .should("be.visible")
          .and("contain", "Focus"); // Adjust the expected dropdown content if necessary

        // Log the selected option and verification result
        cy.log(`${businessName} selected, and Focus dropdown is visible.`);
      });
    });
  });

  it("TC005 ==> Verfiy that focus dropdown work properly for Business Ventures option.", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    peoplePom.peopleBusiness_dropdown_btn().click({ force: true });
    cy.wait(2000);

    peoplePom.select_People_Busniess_Option("Ventures").click({ force: true });
    cy.wait(2000);

    peoplePom.peopleFocus_Dropdown_btn().click({ force: true });
    cy.wait(2000);

    peoplePom
      .select_People_Focus_Option(random_people_VenturesFocus)
      .click({ force: true });
    peoplePom.verify_Selected_People_Focus_Option_Visible(
      random_people_VenturesFocus
    );
  });

  it("TC006 ==> Verfiy that focus dropdown work properly for Business Credit option.", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    peoplePom.peopleBusiness_dropdown_btn().click({ force: true });
    cy.wait(2000);

    peoplePom.select_People_Busniess_Option("Credit").click({ force: true });
    cy.wait(2000);

    peoplePom.peopleFocus_Dropdown_btn().click({ force: true });
    cy.wait(2000);

    peoplePom
      .select_People_Focus_Option(random_people_CreditFocus)
      .click({ force: true });
    peoplePom.verify_Selected_People_Focus_Option_Visible(
      random_people_CreditFocus
    );
  });

  it("TC007 ==> Verfiy that focus dropdown work properly for Business Private Equity option.", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    peoplePom.peopleBusiness_dropdown_btn().click({ force: true });
    cy.wait(2000);

    peoplePom
      .select_People_Busniess_Option("Private Equity")
      .click({ force: true });
    cy.wait(2000);

    peoplePom.peopleFocus_Dropdown_btn().click({ force: true });
    cy.wait(2000);

    peoplePom
      .select_People_Focus_Option(random_people_PrivateEquityFocus)
      .click({ force: true });
    peoplePom.verify_Selected_People_Focus_Option_Visible(
      random_people_PrivateEquityFocus
    );
  });

  it("TC008 ==> Verfiy search functionality works properly.", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    peoplePom.set_searchField().type("Darren Abrahamson", { force: true });
    cy.wait(5000);
    peoplePom.click_searchIcon().click({ force: true });
    cy.wait(4000);
    peoplePom
      .verify_People_Name()
      .invoke("text")
      .should("eq", "Darren Abrahamson");
  });

  it('TC009 ==> Verify that place holder display properly on search field.', function () {
    headerPom.people_lnk().click({ force: true })

    peoplePom.set_searchField().should('have.attr', 'placeholder', 'Search by name...')
  })

  it('TC010 ==> Verify that grid and list view display and works properly.', function () {
    headerPom.people_lnk().click({ force: true })

    cy.wait(10000)

    if (peoplePom.gridViewBtn().should('have.class', "active")) {
      peoplePom.listViewBtn().click({ force: true })
      peoplePom.listViewBtn().should('have.class', "active")
    } else {
      throw new Error("The list view is not active as expected.");
    }
    cy.wait(10000)

  })

  it('TC011 ==> Verify that after selecting Location, Title, Business, Focus options then it should display the result section properly.', function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(5000);
  
    // Step 1: Select Location and verify
    peoplePom.peopleLocation_Dropdown_btn().click({ force: true });
    peoplePom.select_People_Boston_Location().invoke('text').then((locationname) => {
      const selectedLocation = locationname.trim();
      expect(selectedLocation).to.eq('Boston'); // Assert location is correct
      peoplePom.select_People_Boston_Location().click({ force: true });
  
      // Step 2: Select Title and verify
      peoplePom.peopleTitle_Dropdown_btn().click({ force: true });
      peoplePom.select_People_Partner_Title_Option().invoke('text').then((titlename) => {
        const selectedTitle = titlename.trim();
        expect(selectedTitle).to.eq('Partner'); // Assert title is correct
        peoplePom.select_People_Partner_Title_Option().click({ force: true });
  
        // Step 3: Select Business and verify
        peoplePom.peopleBusiness_dropdown_btn().click({ force: true });
        peoplePom.select_People_Credit_Busniess().invoke('text').then((businessname) => {
          const selectedBusiness = businessname.trim();
          expect(selectedBusiness).to.eq('Credit'); // Assert business is correct
          peoplePom.select_People_Credit_Busniess().click({ force: true });
  
          // Step 4: Select Focus and verify
          peoplePom.peopleFocus_Dropdown_btn().click({ force: true });
          peoplePom.select_People_Industry_Research_Focus().invoke('text').then((focusname) => {
            const selectedFocus = focusname.trim();
            expect(selectedFocus).to.eq('Industry Research'); // Assert focus is correct
            peoplePom.select_People_Industry_Research_Focus().click({ force: true });
  
            // Step 5: Verify result section
            cy.get('.team-bg .team-footer .team-location').as('teamLocation'); // Alias creation
            cy.get('@teamLocation').should('have.text', selectedLocation);
  
            peoplePom.verifyrResultTitle().should('have.text', selectedTitle);
            peoplePom.verifyResultBusniess().should('have.text', selectedBusiness);
          });
        });
      });
    });
  });
  



});
