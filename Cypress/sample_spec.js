

describe('My first test in cypress', () => {
    it('Visit the Test your login', () =>{
        cy.visit('https://testyourlog.in/example/index.html')

            cy.get(':nth-child(1) > .ui > input')    
                .type('valid@user.com')
                .should('have.value','valid@user.com')

                cy.get(':nth-child(2) > .ui > input')    
                    .type('123456')
                    .should('have.value','123456')

                    cy.get('button').click()

                        cy.url().should('include','/logged-in.html?email=valid%40user.com&password=123456')

                            cy.contains('Log out').click()

                                cy.url().should('include','https://testyourlog.in/example/index.html')
                    
           
    })

})