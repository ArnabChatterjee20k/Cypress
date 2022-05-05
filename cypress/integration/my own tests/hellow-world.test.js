/// <reference types="cypress" /> 
// above line is for providing auto completion feature to our ide.


// inside describe we will provide tests using it and we will provide the test as callback function inside it.
describe('hellow', () => { 
    // this function gonna execute and if the function executes properly then the test passed and if this test fails or thrown error then something is wrong
    it("test one",()=>{
        throw new Error("oops something is wrong")
    })

    it("visiting website",()=>{
        cy.visit("https://www.tutorialspoint.com/")
    })
})