# Cypress Web Automation – Test Cases (SauceDemo)

## ✅ Test Case List

| Test Case ID | Title                  | Description                                        | Steps                                                                                       | Expected Result                                              | Status |
|--------------|------------------------|----------------------------------------------------|---------------------------------------------------------------------------------------------|--------------------------------------------------------------|--------|
| TC01         | Successful Login       | Verify user can log in with valid credentials      | 1. Navigate to login page<br>2. Enter valid username & password<br>3. Click login            | User is redirected to Inventory page `/inventory.html`        | Pass   |
| TC02         | Failed Login           | Verify error message for invalid login credentials | 1. Navigate to login page<br>2. Enter invalid username & password<br>3. Click login          | Error message shown: “Username and password do not match”     | Pass   |
| TC03         | Logout                 | Verify user can successfully log out               | 1. Login with valid credentials<br>2. Open menu<br>3. Click Logout                          | User is redirected back to Login page                        | Pass   |
| TC04         | Add Item to Cart       | Verify item can be added to cart                   | 1. Login<br>2. Click on "Add to Cart" for an item<br>3. Open cart                           | Cart contains selected item                                   | Pass   |
| TC05         | Complete Checkout Flow | Verify user can complete purchase checkout flow    | 1. Login<br>2. Add item to cart<br>3. Go to checkout<br>4. Enter details<br>5. Finish order | Order completes with message “Thank you for your order!”      | Pass   |
