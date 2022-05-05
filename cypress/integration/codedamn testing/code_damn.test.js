/// <reference types="cypress" />

describe('code-damn-test', () => {
    it('desktop suite', () => {
        cy.viewport(1280,720)

        cy.visit("https://codedamn.com")
        cy.contains("Start learning").should("exist")
        cy.get("div#root")
        
        // making an exact text match
        cy.contains("Learn Programming").should("exist").should("have.text","Learn Programming")
    });

    it('mobile testing suite', () => {
        cy.viewport("iphone-5")
        // clicking the button of mobile
        cy.get("[data-bypassmenuclose=true]").click()
    });

    it('Login Page Looks good', () => {
        cy.visit("https://codedamn.com")
        cy.viewport(1280,720)
        cy.contains("Sign in").click()
        cy.contains("Sign in").should("exist")
        cy.contains("Forgot your password").should("exist")
        cy.contains("Create one").should("exist")
    });

    it.only('login page links are working', () => {
        cy.viewport(1280,720)
        cy.visit("https://codedamn.com")

        cy.log("going to test sign in page")
        // 1. sign in page
        cy.contains("Sign in").click()
        
        cy.log("going to test forgot password")
        // 2. password reset page
        cy.contains("Forgot your password?")
        .should("exist")
        .click({force:true}) // force true means forcefull clicking the button

        cy.log("going to test reset url")
        // 3. vefrify your page url
        cy.url().should("include","/password-reset")
        cy.url().then((value)=>{cy.log("current url is ",value)})
        
        // go back on the same page
        cy.go("back")

        // registering field
        cy.contains("Create one").should("exist").click()
        cy.url().should("include","/register")

        // typing into the fields
        cy.get("[data-testid=username]").type("admin",{force:true})
        cy.get("[data-testid=password]").type("admin",{force:true})
        cy.get("[data-testid=submit-btn]").click({force:true})
        // cy.contains("Unable to authorize").should("exists")
    });

    
})