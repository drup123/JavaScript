// ---------------------- for..of loop ----------------------

const Marvel = ["Captain America","IronMan","Thor","Doctor Strange"]

for (const i of Marvel) {
    console.log(i)
}

// Object
const obj = {
    a : 1,
    b : 2,
    c : 3
}
for (const [key,val] of obj) {
    console.log(key, " :- ", val)          // TypeError: obj is not iterable
}


// Map using for....of 
const map = new Map()
map.set('a',1)
map.set('b',2)
map.set('c',3)
map.set('d',4)

for (const [key,val] of map) {
    console.log(`${key} :- ${val}`)
}


// ---------------------------- for..in ---------------------------------

// Object
const Rollno = {
    39 : "Drup",
    36 : "Pawan",
    31 : "Kalesh"
}
for (const key in Rollno) {
    console.log(`${key} :- ${Rollno[key]}`)
}

// Array
const DC = ["Superman","Wonder-Woman","Flash"]
for (const key in DC) {
    console.log(DC[key])
}

//Map
const map2 = new Map()
map2.set(1,"Spider-man")
map2.set(2,"Scarlet witch")
map2.set(3,"Hulk")

for (const key in map2) {
    console.log(key)
}