const Myobj = {
    Name : "Drup",
    age : 20,
    logged_in : false,
    "email" : "drupxxx@gmail.com"
}

console.log(Myobj.Name)
console.log(Myobj["email"])


// Way of defining sysmbol in object

const Superhero_name = Symbol("Steve Rogers")

const Myobj2 = {
    Name : "Steve",
    age : 105,
    [Superhero_name] : "Captain America"
}

console.log(Myobj2[Superhero_name])
console.log(typeof(Myobj2[Superhero_name]))
console.log(Superhero_name)
console.log(Myobj2)


// Function

Myobj2.greeting = function() {
    console.log(`Your name is : ${this.Name}`)
}
console.log(Myobj2.greeting())
console.log(Myobj2)