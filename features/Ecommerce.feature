Feature: E2E test
    Scenario: Placing the order
    Given a login page with "playwright23@gmail.com" and "Iamking@000" and url "https://rahulshettyacademy.com/client"
    When Add "ADIDAS ORIGINAL" to cart
    Then Verify "ADIDAS ORIGINAL" is displayed in cart


    
