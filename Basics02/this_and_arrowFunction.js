// This keyword

const obj = {
    Name:"Drup",
    Demo:function() {
        console.log(`Your name is ${this.Name}`)
    }
}
obj.Demo()


function DEMO() {
    let age = 20
    console.log(this.age) // this will not work in functions
}
DEMO()


// Arrow Functions

const Checking = (a,b) => {
    return a+b
}
console.log(Checking(2,3))


const Without_Return = (x,y) => (x+y)  // If we use () then no need to return
console.log(Without_Return(4,5))