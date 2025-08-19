
### `test-cases.md`

# Test Cases – Cypress Web Automation (SauceDemo)

## 1) Login – Valid
**Steps:** enter `standard_user` / `secret_sauce` → Login  
**Expected:** URL contains `/inventory.html`  
**Status:** ✅ Passed

## 2) Login – Invalid
**Steps:** enter invalid credentials → Login  
**Expected:** Visible error banner; text contains “Username and password do not match”  
**Status:** ✅ Passed

## 3) Add to Cart
**Steps:** login → add “Sauce Labs Backpack” → open cart  
**Expected:** Cart badge shows `1`; cart lists “Sauce Labs Backpack”  
**Status:** ✅ Passed

## 4) Logout
**Steps:** login → open menu → logout  
**Expected:** Back on login page; login button visible  
**Status:** ✅ Passed

## 5) Checkout Flow (Happy Path)
**Steps:** login → add item → checkout → fill form → finish  
**Expected:** Confirmation header contains “Thank you for your order!”  
**Debugging note:** Initial failure due to text mismatch (case/exclamation). Fixed by asserting the exact UI string.  
**Status:** ✅ Passed

