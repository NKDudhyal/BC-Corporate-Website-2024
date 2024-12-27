class newsDetail_pageObjectModel{

    verifyBreadcrumbText(){
        return cy.get(".breadcrumb-item")
    }

    clickOnNewsBreadcrumb(){
        return cy.get("li[class='breadcrumb-item'] a")
    }

}

export default newsDetail_pageObjectModel;