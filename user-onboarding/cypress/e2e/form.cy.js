// Test the Tests
describe('test the tests', function(){
    it ('does not do much', function(){
        expect(true).to.equal(true);
    })
})
// E2E Testing
describe('User Onboarding App', function(){
    beforeEach(() => {
        cy.visit('index.html');
    })

    it ('tests the name input', function(){
        cy.get(':nth-child(1) > input')
            .type('Miranda')
            .should('have.value','Miranda');
    }) 

    it ('tests the email input', function(){
        cy.get(':nth-child(3) > input')
            .type('me@gmail.com')
            .should('have.value', 'me@gmail.com');
    })

    it ('tests the password input', function(){
        cy.get(':nth-child(4) > input')
            .type('12345a')
            .should('have.value', '12345a');
    })

    it ('tests the checkbox for tos', function(){
        cy.get(':nth-child(5) > input').check();
    })

    it ('tests the submit button', function(){
        cy.get('[type="submit"]').click();
    })

    it ('tests the error message shows if the first name input is left empty', function(){
        cy.get(':nth-child(2) > input')
            // .type('Cascione')
            .trigger('{validate}')

    })

})


//  Check for form validation if an input is left empty