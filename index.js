var customerName = 'bob'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overWriteBestCustomer(name) {
  bestCustomer = name
}

const leastFavoriteCustomer = 'DT'

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'something else'
}

const favoriteCustomer = 'fav'
function attemptTwoFavoriteCustomers(name) {
  favoriteCustomer = name
}
