const accountId = 144552
let accountEmail = "hitesh@yt.com"
var accountPassword = "123445"
accountCity = "Jaipur"

let accountState;
/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

// accountId = 2    //not allowed
accountEmail = "hrhitesh@yt.com"
accountPassword = "2121543256"
accountCity = "Noida"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])