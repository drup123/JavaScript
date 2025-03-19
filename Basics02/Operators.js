//------------------ Nullish Coalescing operator ------------------------

let UserAge = 20 ?? 30
console.log(UserAge)

let UserId = null ?? 2
console.log(UserId)

let UserCount = undefined ?? 20 ?? 10
console.log(UserCount)

//----------------------- Terniary Operator ----------------------------

let Age = 20
Age >= 18 ? console.log("You can vote") : console.log("You cant vote")