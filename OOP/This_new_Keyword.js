function User(userName,userId,userLogged) {
   this.userName = userName
   this.userId = userId
   this.userLogged = userLogged

   this.greeting = () => {
    console.log(`Welcome ${this.userName}`)
   }

   return this
}

const userOne = new User("Drup",39,true)
const userTwo = new User("Rohit",30,true) // without new keyword userTwo overright userOne

console.log(userOne)
console.log(userTwo)
