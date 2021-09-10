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

    cy.get('.cat-title', {duration : 5000})
        .click()
        
    cy.get('.menu-mobile-grover', {duration : 5000}).eq(1)
        .click()

    cy.get('[title="Casual Dresses"]', {duration : 5000}).eq(1)
        .click()

    })

    it('Sort Price: Lowest First', () => {

    cy.get('#selectProductSort').select('price:asc').should('have.value', 'price:asc')
      
    })

    it('Select Printed Dress', () => {

    cy.get('.product_img_link')
        .click()

    })

    it('Select two dresses and add to cart', () => {

    cy.get('[name="qty"]')
        .click()
        .clear()
        .type(2)

    cy.get('#group_1').select('2').should('have.value','2')

    cy.contains('Add to cart')
        .click({ duration: 2000 })
        .click({ duration: 2000 })

    })

    it('View the product in cart', () => {

    cy.contains('Proceed to checkout')
        .click()

    })
  
})