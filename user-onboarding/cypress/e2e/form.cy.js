describe('test the tests', function(){
    it ('does not do much', function(){
        expect(true).to.equal(true);
    })
})

describe('User Onboarding App', function(){
    beforeEach(() => {
        cy.visit('index.html');
    })

    it ('text the name input', function(){
        cy.visit("index.html");
        cy.get(':nth-child(1) > input')
            .type('Miranda')
            .should('have.value','Miranda');
    }) 
})