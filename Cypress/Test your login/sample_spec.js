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

    })

    it('Empty password', () => {
                                
    cy.get('input[placeholder = E-address]')
    .clear()    
        .type('valid@user.com')
        .should('have.value','valid@user.com')

    cy.contains('Login').click()

    cy.contains('Please enter your password')

    cy.contains('Your password must be at least 6 characters')

    cy.url().should('include','https://testyourlog.in/example/index.html')

    })

    it('Wrong email and password' , () => {

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

    })

    it('Empty email' , () => {

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

    })

    it('Wrong password' , () => {

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

    })

    it('Wrong email' , () => {

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

    })

    it('Empty email and password' , () => {

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

    it('Clicking on Email window 9 specyfic positions', () => {

    cy.get('input[name = email]').click()
        .type('@@@')
        .should('have.value','@@@')
        .clear()

    cy.get('input[name = email]').click('topLeft')
        .type('@@@')
        .should('have.value','@@@')
        .clear()

    cy.get('input[name = email]').click('top')
        .type('@@@')
        .should('have.value','@@@')
        .clear()

    cy.get('input[name = email]').click('topRight')
        .type('@@@')
        .should('have.value','@@@')
        .clear()

    cy.get('input[name = email]').click('left')
        .type('@@@')
        .should('have.value','@@@')
        .clear()

    cy.get('input[name = email]').click('right')
        .type('@@@')
        .should('have.value','@@@')
        .clear()
    
    cy.get('input[name = email]').click('bottomLeft')
        .type('@@@')
        .should('have.value','@@@')
        .clear()
    
    cy.get('input[name = email]').click('bottom')
        .type('@@@')
        .should('have.value','@@@')
        .clear()
    
    cy.get('input[name = email]').click('bottomRight')
        .type('@@@')
        .should('have.value','@@@')
        .clear()

    cy.get('div[class = column]').click('topLeft')
        .type('@@@')
        .should('not.have.value','@@@')

    })

    it('Clicking on Password window 9 specyfic positions', () => {
    
        cy.get('input[type = password]').click()
            .type('@@@')
            .should('have.value','@@@')
            .clear()
    
        cy.get('input[type = password]').click('top')
            .type('@@@')
            .should('have.value','@@@')
            .clear()

        cy.get('input[type = password]').click('left')
            .type('@@@')
            .should('have.value','@@@')
            .clear()
    
        cy.get('input[type = password]').click('right')
            .type('@@@')
            .should('have.value','@@@')
            .clear()
        
        cy.get('input[type = password]').click('bottomLeft')
            .type('@@@')
            .should('have.value','@@@')
            .clear()
        
        cy.get('input[type = password]').click('bottom')
            .type('@@@')
            .should('have.value','@@@')
            .clear()

        cy.get('input[type = password]').click('bottomRight')
            .type('@@@')
            .should('have.value','@@@')
            .clear()

        cy.get('div[class = column]').click('left')
            .type('@@@')
            .should('not.have.value','@@@')

        })

})