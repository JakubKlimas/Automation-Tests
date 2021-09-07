context('Actions', () => {
    beforeEach(() =>{
        cy.visit('https://testyourlog.in/example/index.html')
    })
    it('Visit the Test your login', () =>{
    cy.get('input[placeholder = E-address]')    
        .type('valid@user.com')
        .should('have.value','valid@user.com')

    cy.get('input[type = password]')    
        .type('123456')
        .should('have.value','123456')

    cy.contains('Login').dblclick()

    cy.url().should('include','/logged-in.html?email=valid%40user.com&password=123456')

    cy.contains('Log out').dblclick()

    cy.url().should('include','https://testyourlog.in/example/index.html')
                                
    cy.get('input[placeholder = E-address]')
    .clear()    
        .type('valid@user.com')
        .should('have.value','valid@user.com')

    cy.contains('Login').click()

    cy.contains('Please enter your password')

    cy.contains('Your password must be at least 6 characters')

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

    cy.contains('Please enter a valid e-mail')

    cy.contains('Your username or password is incorrect')

    cy.contains('Your password must be at least 6 characters')

    cy.url().should('include','https://testyourlog.in/example/index.html')

    cy.get('input[placeholder=E-address]')
    .clear()

    cy.get('input[type = password]')
    .clear()    
        .type('123456')
        .should('have.value','123456')

    cy.contains('Login').click()

    cy.contains('Please enter your e-mail')

    cy.contains('Please enter a valid e-mail')

    cy.contains('Your username or password is incorrect')

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

    cy.contains('Your password must be at least 6 characters')

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

    cy.contains('Please enter a valid e-mail')

    cy.contains('Your username or password is incorrect')

    cy.url().should('include','https://testyourlog.in/example/index.html')

    cy.get('input[placeholder = E-address]').invoke('val','')
    .clear()    
            
    cy.get('input[type = password]').invoke('val','')
    .clear()    

    cy.contains('Login').click()

    cy.contains('Please enter your e-mail')

    cy.contains('Please enter a valid e-mail')

    cy.contains('Your username or password is incorrect')

    cy.contains('Please enter your password')

    cy.contains('Your password must be at least 6 characters')

    cy.url().should('include','https://testyourlog.in/example/index.html')    
           
    })

})