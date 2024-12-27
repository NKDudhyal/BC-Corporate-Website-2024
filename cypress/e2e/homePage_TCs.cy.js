import {
  headerPom,
  setupEnvironment,
  urls,
  moreMenuPom,
  homePom,
} from "../support/setup";

describe("Home Page Tests", function () {
  setupEnvironment();
  it("TC001 ==> Verify that moremenu functionality works properly.", function () {
    headerPom
      .moreMenu()
      .invoke("text")
      .then((text) => {
        if (text.trim().toLowerCase() === "more") {
          // Click the More menu popup if text is "More"
          cy.get("#more_menu_popup").click({ force: true });
          // Verify that the text changes to "Close"
          cy.get("#more_menu_popup .model_text").should("have.text", "close");
        } else if (text.trim().toLowerCase() === "close") {
          // If the text is already "Close", log the result
          cy.log("The menu is already in the Close state");
        } else {
          // Log if the text is neither "More" nor "Close"
          cy.log("Unexpected text: " + text);
        }
      });
  });
  it("TC002 ==> Verify that all baincapital menu inside moremenu are clickable", function () {
    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom
      .moreAboutus()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("eq", urls.About_Us);
    cy.wait(5000);
    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moreEsgImpact().click();
    cy.url().should("eq", urls.ESG_Impact);
    cy.wait(5000);
    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.morePeople().click({ force: true });
    cy.url().should("eq", urls.People);
    cy.wait(5000);
    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moreCareer().click({ force: true });
    cy.url().should("eq", urls.Careers);
    cy.wait(5000);
    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moreNews().click({ force: true });
    cy.url().should("eq", urls.News);
    cy.wait(5000);
    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moreLocation().click({ force: true });
    cy.url().should("eq", urls.Locations);
  });

  it("TC003 ==> Verfy that businesses unit are clickable properly inside moremenu", function () {
    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuPrivateEquity().click();
    cy.origin(
      urls.bcpe,
      { args: { expectedUrl: urls.bcpe } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuCredit().click();
    cy.origin(
      urls.bcc,
      { args: { expectedUrl: urls.bcc } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuRealEstate().click({ force: true });
    cy.origin(
      urls.bcre,
      { args: { expectedUrl: urls.bcre } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuSpecialSituations().click();
    cy.origin(
      urls.bcss,
      { args: { expectedUrl: urls.bcss } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuLifeSciences().click();
    cy.origin(
      urls.bcls,
      { args: { expectedUrl: urls.bcls } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuPublicEquity().click();
    cy.origin(
      urls.bcpublicequity,
      { args: { expectedUrl: urls.bcpublicequity } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuPartnershipStrategies().click();
    cy.origin(
      urls.bcps,
      { args: { expectedUrl: urls.bcps } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuTechOpportunities().click();
    cy.origin(
      urls.bcto,
      { args: { expectedUrl: urls.bcto } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuDoubleImpact().click();
    cy.origin(
      urls.bcdi,
      { args: { expectedUrl: urls.bcdi } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuInsurance().click();
    cy.origin(
      urls.bci,
      { args: { expectedUrl: urls.bci } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuCrypto().click();
    cy.url().should("eq", urls.bccrypto);

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuVentures().click({force:true});
    cy.url().should("eq", urls.bcventures);
    cy.wait(2500);
  });

  it("TC004 ==> Verify that Copyright footer section links display and works properly", function () {
    headerPom.moreMenu().click({ force: true });
    cy.log("clicked on more menu");
    cy.wait(5000);
    moreMenuPom.moremenuPrivacyPolicy().click();
    cy.log("clicked on Privacypolicy");
    cy.wait(5000);
    cy.url().should("eq", urls.Privacypolicy);
    cy.log("validate privacy url");
    cy.go("back");

    headerPom.moreMenu().click({ force: true });
    cy.log("clicked on more menu");
    cy.wait(5000);
    moreMenuPom.moremenuTerms().click({ force: true });
    cy.log("clicked on Terms");
    cy.url().should("eq", urls.Terms);
    cy.log("validate URL terms");

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuRegulatory().click({ force: true });
    cy.url().should("eq", urls.RegulatoryD);

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuWebFraudEng().click({ force: true });
    cy.url().should("eq", urls.WebFraudEng);

    // headerPom.moreMenu().click({ force: true });
    // cy.wait(5000);
    // moreMenuPom.moremenuWebFraudChinese().click({ force: true });
    // cy.url().should("eq", urls.WebFraudChinese);

    // headerPom.moreMenu().click({ force: true });
    // cy.wait(5000);
    // moreMenuPom.moremenuWebFraudSpanish().click({ force: true });
    // cy.url().should("eq", urls.WebFraudSpanish);
  });

  it("TC005 ==> Verify that copyright year and text display and updated properly in more menu", function () {
    headerPom.moreMenu().click({ force: true });
    const currentYear = new Date().getFullYear();

    cy.get(".copyright-txt")
      .should("be.visible") // Ensure the element is visible
      .and("contain", `© 2012-${currentYear}`);
  });

  it("TC006 ==> Verify that search functionality display and works properly for people in more menu.", function () {
    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    const name = "David";
    moreMenuPom.moreMenuSearchField().type(`${name}{enter}`);
    cy.wait(5000);

    moreMenuPom
      .SearchResultListForPeople() // Replace with your actual selector
      .should("contain.text", "David"); // Ensure that results are present

    const nameToLowerCase = name.toLowerCase();

    cy.url().should(
      "eq",
      `https://bccorp-staging.lousch.agency/search?search_api=${name}&build_id=form-IrXciwrViLTuI5g219i8UFSmvnz5a5eDQN4NgNQUW_c&op=%C2%A0`
    );
  });

  it("TC007 ==> Verify that search functionality display and works properly for News in more menu.", function () {
    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    const newsName = "Aptia formally launches";
    moreMenuPom
      .moreMenuSearchField()
      .type(`${newsName}{enter}`, { delay: 100 });
    cy.wait(5000);

    moreMenuPom
      .SearchResultListForNews() // Replace with your actual selector
      .should("contain.text", newsName) // Ensure that results are present

    const searchedURL = newsName
      .replace(/[:]/g, "%3A")
      .replace(/[,]/g, "%2C")
      .replace(/\s+/g, "+")
      .replace(/\s+/g, "%2C");

    cy.url().should(
      "eq",
      `https://bccorp-staging.lousch.agency/search?search_api=${searchedURL}&build_id=form-IrXciwrViLTuI5g219i8UFSmvnz5a5eDQN4NgNQUW_c&op=%C2%A0`
    );
  });

  it("TC008 ==> Verify that search functionality works properly on top header.", function () {
    headerPom.search().click({ force: true });

    cy.wait(2000);
    const newsName =
      "Terra Natural Capital Launches to Invest in Scaling Carbon Projects and Natural Assets";
    headerPom.searchField().type(`${newsName}{enter}`, { delay: 100 });
    cy.wait(5000);

    moreMenuPom
      .SearchResultListForNews() // Replace with your actual selector
      .should("contain.text", newsName); // Ensure that results are present

    // const newsNameToLowerCase = newsName.toLowerCase()
    // .replace(/[:]/g, '%3A')
    // .replace(/[,]/g, '%2C')
    // .replace(/\s+/g, '+').replace(/\s+/g, '%2C');

    // cy.url().should('eq',`https://bccorp-staging.lousch.agency/search?search_api=${newsNameToLowerCase}&build_id=form-IrXciwrViLTuI5g219i8UFSmvnz5a5eDQN4NgNQUW_c&op=%C2%A0`)
  });

  it("TC009 ==> Verify that logo functionality works properly.", function () {
    headerPom.aboutUs_lnk().click({ force: true });
    cy.wait(5000);
    cy.url().should("contain", "about-us");
    headerPom.logo().click({ force: true });
    cy.wait(5000);
    cy.url().should("eq", urls.baseurl);
  });

  it("TC010 ==> Verify that about, busniesses, ESG&Impact, Careers functionlaity works properly.", function () {

    cy.url().should("eq", urls.baseurl);
    headerPom.business_lnk().click({ force: true });
    cy.wait(5000);
    cy.url().should("eq", urls.ourInt);
    cy.wait(5000);
    cy.scrollTo("top", { duration: 2000, ensureScrollable: false });
    cy.wait(5000);

    headerPom.aboutUs_lnk().click({ force: true });
    cy.wait(5000);
    cy.url().should("eq", urls.About_Us);
    cy.wait(5000);

    headerPom.esgImpact_lnk().click({ force: true });
    cy.wait(5000);
    cy.url().should("eq", urls.ESG_Impact);
    cy.wait(5000);

    headerPom.career_lnk().click({ force: true });
    cy.wait(5000);
    cy.url().should("eq", urls.Careers);
  });

  it("TC011 ==> Verify that banner slider animation works properly.", function () {

    homePom
      .sliderHowWeAreDifferent()
      .should("have.class", "slick-current") // Wait until class includes slick-current
      .then(() => {
        // Verify the button is visible and clickable
        homePom
          .bannerEsgButton()
          .should("be.visible")
          .and("not.be.disabled")
          .click({ force: true });

        // Verify navigated URL
        cy.url().should("eq", urls.ESG_Impact);
      });

    cy.go("back");
    cy.wait(4000);
    cy.url().should("eq", urls.baseurl);
    homePom
      .sliderARewardingCareer()
      .should("have.class", "slick-current") // Wait until class includes slick-current
      .then(() => {
        // Verify the button is visible and clickable
        homePom
          .bannerCareerButton()
          .should("be.visible")
          .and("not.be.disabled")
          .click({ force: true });

        // Verify navigated URL
        cy.url().should("eq", urls.Careers);
      });
  });

  it("TC012 ==> Verify that Our integrated section with all busniess options display and works properly.", function () {
    /** =======================  Priavte Equity Option =========================== */

    homePom.orsPrivateEquityOption().click({
      force: true,
    });

    homePom
      .orsPrivateEquityOptionText()
      .invoke("text")
      .then((buttonText) => {
        cy.log("Button Text:", buttonText);

        // Step 3: Get the text from the target element
        homePom
          .orsPrivateEquityRightColumnTextHeading()
          .invoke("text")
          .then((contentText) => {
            cy.log("Content Text:", contentText);

            // Compare button text and content text
            expect(buttonText.trim()).to.equal(contentText.trim());
          });
      });

    const expectedItems = [
      "Global Private Equity>",
      "Double Impact>",
      "Insurance>",
    ];

    homePom.orsPrivateEquityRightColumnBusinessList().each(($el, index) => {
      cy.wrap($el)
        .invoke("text")
        .then((listItemText) => {
          cy.log(`List Item ${index + 1}:`, listItemText);

          // Compare with the expected items
          expect(listItemText.trim()).to.equal(expectedItems[index]);
        });
    });

    cy.wait(4000);

    /** =======================  Growth & Venture Option =========================== */

    homePom.orsGrowthAndVentuersOptionText().click({
      force: true,
    });

    homePom
      .orsGrowthAndVentuersOptionText()
      .invoke("text")
      .then((buttonText) => {
        cy.log("Button Text:", buttonText);

        // Step 3: Get the text from the target element
        homePom
          .orsGrowthAndVentuersRightColumnTextHeading()
          .invoke("text")
          .then((contentText) => {
            cy.log("Content Text:", contentText);

            // Compare button text and content text
            expect(buttonText.trim()).to.equal(contentText.trim());
          });
      });

    const expectedItems2 = [
      "Ventures>",
      "Life Sciences>",
      "Tech Opps>",
      "Crypto>",
    ];

    homePom.orsGrowthAndVentuersRightColumnBusinessList().each(($el, index) => {
      cy.wrap($el)
        .invoke("text")
        .then((listItemText) => {
          cy.log(`List Item ${index + 1}:`, listItemText);

          // Compare with the expected items
          expect(listItemText.trim()).to.equal(expectedItems2[index]);
        });
    });

    cy.wait(4000);

    /** =======================  Capital Solutions Option =========================== */

    homePom.orsCapitalSolutionsOption().click({
      force: true,
    });

    homePom
      .orsCapitalSolutionsOptionText()
      .invoke("text")
      .then((buttonText) => {
        cy.log("Button Text:", buttonText);

        // Step 3: Get the text from the target element
        homePom
          .orsCapitalSolutionsRightColumnTextHeading()
          .invoke("text")
          .then((contentText) => {
            cy.log("Content Text:", contentText);

            // Compare button text and content text
            expect(buttonText.trim()).to.equal(contentText.trim());
          });
      });

    const expectedItems3 = [
      "Special Situations>",
      "Partnership Strategies>",
      "Insurance>",
    ];

    homePom.orsCapitalSolutionsRightColumnBusinessList().each(($el, index) => {
      cy.wrap($el)
        .invoke("text")
        .then((listItemText) => {
          cy.log(`List Item ${index + 1}:`, listItemText);

          // Compare with the expected items
          expect(listItemText.trim()).to.equal(expectedItems3[index]);
        });
    });

    cy.wait(4000);

    /** =======================  Credit and Capital Markets Option =========================== */

    homePom.orsCreditCapitalMarketsOption().click({
      force: true,
    });

    homePom
      .orsCreditCapitalMarketsOptionText()
      .invoke("text")
      .then((buttonText) => {
        cy.log("Button Text:", buttonText);

        // Step 3: Get the text from the target element
        homePom
          .orsCreditCapitalMarketsRightColumnTextHeading()
          .invoke("text")
          .then((contentText) => {
            cy.log("Content Text:", contentText);

            // Compare button text and content text
            expect(buttonText.trim()).to.equal(contentText.trim());
          });
      });

    const expectedItems4 = ["Credit>", "Public Equity>"];

    homePom
      .orsCreditCapitalMarketsRightColumnBusinessList()
      .each(($el, index) => {
        cy.wrap($el)
          .invoke("text")
          .then((listItemText) => {
            cy.log(`List Item ${index + 1}:`, listItemText);

            // Compare with the expected items
            expect(listItemText.trim()).to.equal(expectedItems4[index]);
          });
      });

    cy.wait(4000);

    /** =======================  Real Estate Option =========================== */

    homePom.orsRealEstateOption().click({
      force: true,
    });

    homePom
      .orsRealEstateOptionText()
      .invoke("text")
      .then((buttonText) => {
        cy.log("Button Text:", buttonText);

        // Step 3: Get the text from the target element
        homePom
          .orsRealEstateRightColumnTextHeading()
          .invoke("text")
          .then((contentText) => {
            cy.log("Content Text:", contentText);

            // Compare button text and content text
            expect(buttonText.trim()).to.equal(contentText.trim());
          });
      });

    const expectedItems5 = ["Real Estate>", "Special Situations>"];

    homePom.orsRealEstateRightColumnBusinessList().each(($el, index) => {
      cy.wrap($el)
        .invoke("text")
        .then((listItemText) => {
          cy.log(`List Item ${index + 1}:`, listItemText);

          // Compare with the expected items
          expect(listItemText.trim()).to.equal(expectedItems5[index]);
        });
    });
  });

  it("TC013 ==> Verify that Technology functionlaity works properly from veritcal spotlight.", function () {
    homePom
      .techTagText()
      .invoke("text")
      .then((techTagName) => {
        cy.log("Name from home page:", techTagName);

        homePom.techlnk().invoke("removeAttr", "target").click({ force: true });

        cy.wait(4000);
        const lowerCaseNametech = techTagName.toLowerCase().trim();
        cy.url().should("include", lowerCaseNametech);
      });
  });

  it("TC014 ==> Verify that Healthcare functionlaity works properly from veritcal spotlight.", function () {
    homePom
      .healthTagText()
      .invoke("text")
      .then((healtTagName) => {
        cy.log("Name from home page:", healtTagName);
        homePom
          .healthcarelnk()
          .invoke("removeAttr", "target")
          .click({ force: true });

        cy.wait(4000);
        const lowerCaseNamehealth = healtTagName.toLowerCase().trim();
        cy.url().should("include", lowerCaseNamehealth);
      });
  });

  it("TC015 ==> Verify that Meet our people functionlaity works properly.", function () {
    homePom.peoplelnk().click({ force: true });
    cy.wait(5000);
    cy.url().should("include", "/people");
  });

  it("TC016 ==> Verify that See all news functionlaity works properly.", function () {
    homePom.newslnk().click({ force: true });
    cy.wait(5000);
    cy.url().should("include", "/news");
  });

  it("TC017 ==> Verify that hover action functionality properly on ESG all options.", function () {
    cy.get("#section5").scrollIntoView({ duration: 10000 });

    homePom
      .esgLeftSideActivegovernanceAndStewardship()
      .realHover({ duration: 6000 })
      .invoke("text")
      .then((esgName1) => {
        let trimedEsgName1 = esgName1.replace(/\s+/g, " ").trim(); // Correct regex syntax
        homePom
          .esgRightSideActivegovernanceAndStewardship()
          .should("have.text", trimedEsgName1);
      });

    homePom
      .esgLeftSideSustainableGrowthAndReducingClimateImpact()
      .realHover({ duration: 6000 })
      .invoke("text")
      .then((esgName1) => {
        let trimedEsgName1 = esgName1.replace(/\s+/g, " ").trim(); // Correct regex syntax
        homePom
          .esgRightSideSustainableGrowthAndReducingClimateImpact()
          .should("have.text", trimedEsgName1);
      });

    homePom
      .esgLeftSideFairEmploymentEngagementAndWellBeing()
      .realHover({ duration: 6000 })
      .invoke("text")
      .then((esgName1) => {
        let trimedEsgName1 = esgName1.replace(/\s+/g, " ").trim(); // Correct regex syntax
        homePom
          .esgRightSideFairEmploymentEngagementAndWellBeing()
          .should("have.text", trimedEsgName1);
      });

    homePom
      .esgLeftSideDiversityEquityAndInclusion()
      .realHover({ duration: 6000 })
      .invoke("text")
      .then((esgName1) => {
        let trimedEsgName1 = esgName1.replace(/\s+/g, " ").trim(); // Correct regex syntax
        homePom
          .esgRightSideDiversityEquityAndInclusion()
          .should("have.text", trimedEsgName1);
      });

    homePom
      .esgLeftSideCommunityEngagement()
      .realHover({ duration: 6000 })
      .invoke("text")
      .then((esgName1) => {
        let trimedEsgName1 = esgName1.replace(/\s+/g, " ").trim(); // Correct regex syntax
        homePom
          .esgRightSideCommunityEngagement()
          .should("have.text", trimedEsgName1);
      });
  });;
});
