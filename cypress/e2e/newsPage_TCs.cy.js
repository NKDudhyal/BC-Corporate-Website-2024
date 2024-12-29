import {
  setupEnvironment,
  newsPom,
  randomBusniessOption,
  randomYearOption,
  randomExistBusinessNews,
  randomExistYearNews,
  randomNewsTypes,
  randomNotExistBusiness,
  randomNotExistYear,
  headerPom,
  urls,
} from "../support/setup";

describe("News Page Test Cases", () => {
  setupEnvironment();

  it("TC001 ==> Verify that business dropdown functionality works and selected option should reflects in listing properly.", () => {
    const actualBusniessName = randomBusniessOption;
    cy.wait(2000)
    headerPom.news_lnk().click();
    cy.wait(2000)
    newsPom.busniess_Dropdown().click({ force: true });
    cy.wait(2000)
    newsPom
      .select_Busniess_Option_From_Dropdown(randomBusniessOption)
      .click({ force: true });

    newsPom.press_Releases_btn().click({ force: true });
    cy.wait(2000)
    cy.scrollToLastNews(newsPom);
    cy.wait(2000)
    cy.verifyBusinessTags(
      newsPom.get_Business_Tags_From_List,
      actualBusniessName
    );
  });

  it("TC002 ==> Verify that year dropdown functionality works and selected option should reflects in listing properly.", () => {
    const actualYearText = randomExistYearNews;
    cy.wait(2000)
    headerPom.news_lnk().click({ force: true });
    cy.wait(2000)
    newsPom.year_Dropdown().click({ force: true });
    cy.wait(2000)
    newsPom
      .select_Year_Option_From_Dropdown(randomExistYearNews)
      .click({ force: true });
    cy.wait(2000)
    newsPom.press_Releases_btn().click({ force: true });
    cy.wait(2000)
    cy.scrollToLastNews(newsPom);
    cy.wait(2000)
    cy.verifyYearTags(newsPom.get_Year_Tags_From_List, actualYearText);
  });

  it("TC003 ==> Verify that Press Release functionality works and should reflects in listing properly.", () => {
    const actualNewsType = "PRESS RELEASES";
    cy.wait(2000)
    headerPom.news_lnk().click({ force: true });
    cy.wait(2000)
    newsPom.busniess_Dropdown().click({ force: true });
    cy.wait(2000)
    newsPom
      .select_Busniess_Option_From_Dropdown(randomBusniessOption)
      .click({ force: true });
    cy.wait(2000);
    newsPom.press_Releases_btn().click({ force: true });
    cy.wait(2000);
    cy.scrollToLastNews(newsPom);
    cy.wait(2000)
    cy.verifyTagsIncludeType(
      newsPom.get_newType_Tags_From_List,
      actualNewsType
    );
  });

  it("TC004 ==> Verify that In The News functionality works and should reflects in listing properly.", () => {
    let actualNewsType = "IN THE NEWS";
    headerPom.news_lnk().click({ force: true });
    cy.wait(2000)
    newsPom.busniess_Dropdown().click({ force: true });
    cy.wait(2000)
    newsPom
      .select_Busniess_Option_From_Dropdown(randomExistBusinessNews)
      .click({ force: true });
    cy.wait(2000)
    newsPom.year_Dropdown().click({ force: true });
    cy.wait(2000)
    newsPom
      .select_Year_Option_From_Dropdown(randomExistYearNews)
      .click({ force: true });
    cy.wait(2000)
    newsPom.inTheNews_btn().click({ force: true });
    cy.wait(2000)
    cy.scrollToLastNews(newsPom);
  });

  it("TC005 ==> Verify that after selecting business, year option and press releases type then selected options should be visible in listing properly.", () => {
    const actualNewsType = "PRESS RELEASES";
    const actualBusniessName = randomExistBusinessNews;
    const actualYearText = randomExistYearNews;
    cy.wait(2000)
    headerPom.news_lnk().click({ force: true });
    cy.wait(2000)
    newsPom.busniess_Dropdown().click({ force: true });
    cy.wait(2000)
    newsPom
      .select_Busniess_Option_From_Dropdown(randomExistBusinessNews)
      .click({ force: true });
    cy.wait(2000)
    newsPom.year_Dropdown().click({ force: true });
    cy.wait(2000)
    newsPom
      .select_Year_Option_From_Dropdown(randomExistYearNews)
      .click({ force: true });
    cy.wait(2000)
    newsPom.press_Releases_btn().click({ force: true });
    cy.wait(2000)
    cy.scrollToLastNews(newsPom);
    cy.wait(2000)
    // Verify press release tag
    cy.verifyTagsIncludeType(
      newsPom.get_newType_Tags_From_List,
      actualNewsType
    );
    cy.wait(2000)
    // Verify business tag
    cy.verifyBusinessTags(
      newsPom.get_Business_Tags_From_List,
      actualBusniessName
    );
    cy.wait(2000)
    // Verify year tag
    cy.verifyYearTags(newsPom.get_Year_Tags_From_List, actualYearText);
  });

  it("TC006 ==> Verify that after selecting business, year option and In the news type then selected options should be visible in listing properly.", () => {
    const actualNewsType = "IN THE NEWS";
    const actualBusniessName = randomExistBusinessNews;
    const actualYearText = randomExistYearNews;
    cy.wait(2000)
    headerPom.news_lnk().click({ force: true });
    cy.wait(2000)
    newsPom.busniess_Dropdown().click({ force: true });
    cy.wait(2000)
    newsPom
      .select_Busniess_Option_From_Dropdown(randomExistBusinessNews)
      .click({ force: true });
    cy.wait(2000)
    newsPom.year_Dropdown().click({ force: true });
    cy.wait(2000)
    newsPom
      .select_Year_Option_From_Dropdown(randomExistYearNews)
      .click({ force: true });
    cy.wait(2000)
    newsPom.inTheNews_btn().click({ force: true });
    cy.wait(2000)
    cy.scrollToLastNews(newsPom);
    cy.wait(2000)
    // Verify press release tag
    cy.verifyTagsIncludeType(
      newsPom.get_newType_Tags_From_List,
      actualNewsType
    );
    cy.wait(2000)
    // Verify business tag
    cy.verifyBusinessTags(
      newsPom.get_Business_Tags_From_List,
      actualBusniessName
    );
    cy.wait(2000)
    // Verify year tag
    cy.verifyYearTags(newsPom.get_Year_Tags_From_List, actualYearText);
  });

  it("TC007 ==> Verify that after selecting options, if no news is found, a 'No News Found' message is displayed properly.", () => {
    headerPom.news_lnk().click({ force: true });
    cy.wait(2000)
    newsPom.busniess_Dropdown().click({ force: true });
    cy.wait(2000)
    newsPom
      .select_Busniess_Option_From_Dropdown(randomNotExistBusiness)
      .click({ force: true });
    cy.wait(2000)
    newsPom.verify_Selected_Busniess_Option_Visible(randomNotExistBusiness);
    cy.wait(2000)
    newsPom.year_Dropdown().click({ force: true });
    cy.wait(2000)
    newsPom
      .select_Year_Option_From_Dropdown(randomNotExistYear)
      .click({ force: true });
    cy.wait(2000)
    newsPom.verify_News_Type_List_Not_Empty_Or_Show_Message();
  });

  it("TC008 ==> Verify that featured news functionality works properly.", () => {
    headerPom.news_lnk().click({ force: true });
    cy.wait(2000)
    newsPom.feature_Image_Lnk().click({ force: true });
    cy.wait(2000)
    cy.url().then((currentUrl) => {
      expect(currentUrl).to.include("https://bccorp-staging.lousch.agency/news/bain-capital-acquire-somacis");
    });
    cy.go("back");
    cy.wait(2000)
    cy.url().then((currentUrl) => {
      expect(currentUrl).to.eq(urls.News);
    });
  });
});
