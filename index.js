var customerName = 'bob'
const leastFavoriteCustomer = 'DT'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overWriteBestCustomer(name) {
  bestCustomer = name
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'something else'
}

let favoriteCustomer
function attemptTwoFavoriteCustomers() {
   favoriteCustomer = 'foo'
   favoriteCustomer = 'not bar'
}
