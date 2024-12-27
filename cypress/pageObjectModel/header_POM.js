class header_pageObjectModel {

  logo(){
    return cy.get('.navbar-brand > img')
  }
  search(){
    return cy.get("#btn-search")
  }
  moreMenu() {
    return cy.get("#more_menu_popup").invoke('removeAttr','target')
  }
  
  news_lnk() {
    return cy.get("#navbarDropdown6");
  }

  people_lnk() {
    return cy.get(".navbar-nav > :nth-child(6) > .nav-link");
  }

  location_lnk() {
    return cy
      .get(
        "div[class='top-header d-none d-lg-block'] li:nth-child(2) a:nth-child(1)"
      )
      .invoke("removeAttr", "target")
      
  }

  aboutUs_lnk(){
    return cy.get("#navbarDropdown1")
  }

  business_lnk(){
    return cy.get("#navbarDropdown2")
  }

  esgImpact_lnk(){
    return cy.get("#navbarDropdown3")
  }

  searchField(){
    return cy.get(".search  #edit-search-api")
  }

  career_lnk(){
    return cy.get('#navbarDropdown5')
  }
}

export default header_pageObjectModel;
