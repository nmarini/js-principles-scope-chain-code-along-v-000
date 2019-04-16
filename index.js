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


function attemptTwoFavoriteCustomers() {
  const favoriteCustomer = 'name'
  const favoriteCustomer = 'not name'
}
