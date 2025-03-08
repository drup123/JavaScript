// Stack -> for Primitive

let name = "Drup_Patil"
let anotherName = name
anotherName = "Patil_Drup"

console.log(name)
console.log(anotherName)

//----------------------------------------------------------------

// Heap -> for Non-primitve

let Myobj = {
    name:"Drup",
    age:21
}

let anotherOBJ = Myobj

anotherOBJ.name = "Patil"

console.log(Myobj)
console.log(anotherOBJ)