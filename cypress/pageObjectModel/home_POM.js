class home_POM {
  sliderHowWeAreDifferent() {
    return cy.get(
      "body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)"
    );
  }

  bannerEsgButton() {
    return cy.get('.btn.btn-outline.btn-blue[href="/esgandimpact"]');
  }

  sliderARewardingCareer() {
    return cy.get(
      "body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)"
    );
  }

  bannerCareerButton() {
    return cy.get('.btn.btn-outline.btn-blue[href="/careers"]');
  }

  /************************************************************************************************************* */

  /** =======================  Priavte Equity Option =========================== */
  orsPrivateEquityOption() {
    return cy.get("button[id='circleTab1'] span[class='btn-text']");
  }

  orsPrivateEquityOptionText() {
    return cy.get("button[id='circleTab1'] span");
  }

  orsPrivateEquityRightColumnTextHeading() {
    return cy.get("#circleTabContant1 .patform-tab-wrap h3");
  }

  orsPrivateEquityRightColumnBusinessList() {
    return cy.get(
      "#circleTabContant1 .patform-tab-wrap .business-listing li a"
    );
  }

  /** =======================  Growth & Venture Option =========================== */
  orsGrowthAndVentuersOption() {
    return cy.get("button[id='circleTab2'] span[class='btn-text']");
  }

  orsGrowthAndVentuersOptionText() {
    return cy.get("button[id='circleTab2'] span");
  }

  orsGrowthAndVentuersRightColumnTextHeading() {
    return cy.get("#circleTabContant2 .patform-tab-wrap h3");
  }

  orsGrowthAndVentuersRightColumnBusinessList() {
    return cy.get(
      "#circleTabContant2 .patform-tab-wrap .business-listing li a"
    );
  }

  /** =======================  Capital Solutions Option =========================== */
  orsCapitalSolutionsOption() {
    return cy.get("button[id='circleTab3'] span[class='btn-text']");
  }

  orsCapitalSolutionsOptionText() {
    return cy.get("button[id='circleTab3'] span");
  }

  orsCapitalSolutionsRightColumnTextHeading() {
    return cy.get("#circleTabContant3 .patform-tab-wrap h3");
  }

  orsCapitalSolutionsRightColumnBusinessList() {
    return cy.get(
      "#circleTabContant3 .patform-tab-wrap .business-listing li a"
    );
  }

  /** =======================  Credit and Capital Markets Option =========================== */
  orsCreditCapitalMarketsOption() {
    return cy.get("button[id='circleTab4'] span[class='btn-text']");
  }

  orsCreditCapitalMarketsOptionText() {
    return cy.get("button[id='circleTab4'] span");
  }

  orsCreditCapitalMarketsRightColumnTextHeading() {
    return cy.get("#circleTabContant4 .patform-tab-wrap h3");
  }

  orsCreditCapitalMarketsRightColumnBusinessList() {
    return cy.get(
      "#circleTabContant4 .patform-tab-wrap .business-listing li a"
    );
  }

  /** =======================  Real Estate Option =========================== */
  orsRealEstateOption() {
    return cy.get("button[id='circleTab5'] span[class='btn-text']");
  }

  orsRealEstateOptionText() {
    return cy.get("button[id='circleTab5'] span");
  }

  orsRealEstateRightColumnTextHeading() {
    return cy.get("#circleTabContant5 .patform-tab-wrap h3");
  }

  orsRealEstateRightColumnBusinessList() {
    return cy.get(
      "#circleTabContant5 .patform-tab-wrap .business-listing li a"
    );
  }

  /***************************** Vertical Spotlight ************************************* */
  techTagText() {
    return cy.get(".spotlight-section .slide-single:nth-child(1) a span");
  }

  techlnk() {
    return cy.get(".spotlight-section .slide-single:nth-child(1) a");
  }

  healthTagText() {
    return cy.get(".spotlight-section .slide-single:nth-child(2) a span");
  }

  healthcarelnk() {
    return cy.get(".spotlight-section .slide-single:nth-child(2) a");
  }

  /****************************** People Section ************************************* */
  peoplelnk() {
    return cy.get(".our-people-section .row .col-xl-6 a");
  }

  newslnk() {
    return cy.get(
      "div[class='row news-listing-wrap'] a[class='btn btn-outline btn-blue']"
    );
  }

  /************************************ESG Section ********************************* */
  esgLeftSideActivegovernanceAndStewardship() {
    return cy.get("#esg-tab-3");
  }
  esgRightSideActivegovernanceAndStewardship() {
    return cy.get(
      "div[id='esg-tabContent-3'] h4[class='h3 esg-approach-title']"
    );
  }

  esgLeftSideSustainableGrowthAndReducingClimateImpact() {
    return cy.get("#esg-tab-4");
  }
  esgRightSideSustainableGrowthAndReducingClimateImpact() {
    return cy.get(
      "div[id='esg-tabContent-4'] h4[class='h3 esg-approach-title']"
    );
  }

  esgLeftSideFairEmploymentEngagementAndWellBeing() {
    return cy.get("#esg-tab-5");
  }
  esgRightSideFairEmploymentEngagementAndWellBeing() {
    return cy.get(
      "div[id='esg-tabContent-5'] h4[class='h3 esg-approach-title']"
    );
  }

  esgLeftSideDiversityEquityAndInclusion() {
    return cy.get("#esg-tab-6");
  }
  esgRightSideDiversityEquityAndInclusion() {
    return cy.get(
      "div[id='esg-tabContent-6'] h4[class='h3 esg-approach-title']"
    );
  }

  esgLeftSideCommunityEngagement() {
    return cy.get("#esg-tab-7");
  }
  esgRightSideCommunityEngagement() {
    return cy.get(
      "div[id='esg-tabContent-7'] h4[class='h3 esg-approach-title']"
    );
  }
}

export default home_POM;
