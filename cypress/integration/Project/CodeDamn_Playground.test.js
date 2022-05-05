/// <reference types="cypress" />

describe('Codedamn Playground', () => { 
    beforeEach(()=>{
        cy.viewport(1280,720)
        cy.visit("https://codedamn.com/playground/LyqYjxQCLW4_EnQHKZ0m_")
    })
    it('Should Load Playground correctly', () => {
        cy.get("[data-testid=explorer-column]>div").should("contain.text","Code")
        // cy.pause() // to pause the test runner and we can resume it with resume button in the ui
        // cy.debug() // it will pause the js thread and we have to use the browser dev tools
        cy.contains("Establishing connection",{matchCase:false})
        cy.contains("Trying to establish connection",{timeout:1}).should("not.exist")
    });
    it.only("New file feature works",()=>{
        cy.contains("restoring files and access",{matchCase:false,timeout:7*1000}).should("exist")
        cy.contains("restoring files and access",{matchCase:false,timeout:7*1000}).should("not.exist")
        cy.get("[data-testid=xterm]",{timeout:7*1000}).type("touch",{force:true})
    })
})