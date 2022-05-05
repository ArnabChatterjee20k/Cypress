/// <reference types="cypress" />

const login_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFybmFiQ2hhdHRlcmplZSIsIl9pZCI6IjYyNDY4ODBjNTY3YTM4MDAwOTkzN2Y5YiIsIm5hbWUiOiJBcm5hYiBDaGF0dGVyamVlIiwiaWF0IjoxNjQ4Nzg5NTE3LCJleHAiOjE2NTM5NzM1MTd9.qvLEFtQ0aLUIltNpx765lF2IZcCJUO-V2sa_siE1p04";
const login_key = "__auth__token"

describe('basic Unauthenticated desktop test', () => { 
    
    before(()=>{
        /** We dont want to rewrite local storage again and again so setting it before all the test */
        cy.then(()=>{
            window.localStorage.setItem(login_key,login_token)
        })
    })
    /** This will run before each tests */
    beforeEach(()=>{    
        cy.viewport(1280,720)
        cy.visit("https://codedamn.com")
    })
    it('webpage loads,good', () => {
        cy.contains("Start learning").should("exist")
        cy.get("div#root")      
        // making an exact text match
        cy.contains("Learn Programming").should("exist").should("have.text","Learn Programming")
    });
    it("roadmaps working",()=>{
        cy.contains("Explore All Roadmaps").click({force:true})
        cy.contains("Learning")
    })
})