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


function attemptTwoFavoriteCustomers(){
    let favoriteCustomer = 'bar'
    var favoriteCustomer = 'not bar'
}
