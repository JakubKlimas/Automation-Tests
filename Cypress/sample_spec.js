describe('My first test in cypress', () => {
    it('Visit the Test your login', () =>{
        cy.visit('https://testyourlog.in/example/index.html')

    cy.get('input[placeholder = E-address]')    
        .type('valid@user.com')
        .should('have.value','valid@user.com')

    cy.get('input[type = password]')    
        .type('123456')
        .should('have.value','123456')

    cy.contains('Login').click()

    cy.url().should('include','/logged-in.html?email=valid%40user.com&password=123456')

    cy.contains('Log out').click()

    cy.url().should('include','https://testyourlog.in/example/index.html')
                                
    cy.get('input[placeholder = E-address]')
    .clear()    
        .type('valid@user.com')
        .should('have.value','valid@user.com')

    cy.contains('Login').click()

    cy.url().should('include','https://testyourlog.in/example/index.html')

    cy.get('input[placeholder = E-address]')
    .clear()    
        .type('12345')
        .should('have.value','12345')

    cy.get('input[type = password]')
    .clear()    
        .type('1234')
        .should('have.value','1234')

    cy.contains('Login').click()

    cy.url().should('include','https://testyourlog.in/example/index.html')

    cy.get('input[type = password]')
    .clear()    
        .type('123456')
        .should('have.value','123456')

    cy.contains('Login').click()

    cy.url().should('include','https://testyourlog.in/example/index.html')

    cy.get('input[placeholder = E-address]')
    .clear()    
        .type('valid@user.com')
        .should('have.value','valid@user.com')

    cy.get('input[type = password]')
    .clear()    
        .type('1234')
        .should('have.value','1234')
    
    cy.contains('Login').click()

    cy.url().should('include','https://testyourlog.in/example/index.html')

    cy.get('input[placeholder = E-address]')
    .clear()    
        .type('1234')
        .should('have.value','1234')

    cy.get('input[type = password]')
    .clear()    
        .type('123456')
        .should('have.value','123456')

    cy.contains('Login').click()

    cy.url().should('include','https://testyourlog.in/example/index.html')

    cy.get('input[placeholder = E-address]').invoke('val','')
    .clear()    
            

    cy.get('input[type = password]').invoke('val','')
    .clear()    

    cy.contains('Login').click()

    cy.url().should('include','https://testyourlog.in/example/index.html')

               
           
    })

})