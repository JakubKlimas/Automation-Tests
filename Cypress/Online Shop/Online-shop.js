context('Actions', () => {
    beforeEach(() =>{

    cy.viewport('iphone-x')

    })

    it('.click on phone number', () => {
       
    cy.visit('http://automationpractice.com/index.php')

    cy.get('.shop-phone').contains('0123-456-789')
        .click( { force:true })
    
    })
    
    it('Check scoll response', () => {
    cy.scrollTo('bottom', { duration: 2000 })
    
    cy.scrollTo('center', { duration: 2000 })
    
    cy.scrollTo('top', { duration: 2000 })
    
    })

    it('Select Dresses category and Casual Dresses subcategory', () => {

    cy.get('.cat-title')
        .click()
    
    cy.get('.menu-mobile-grover').eq(1).click()

    cy.get('[title="Casual Dresses"]').eq(1)
        .click()

    })

  
})