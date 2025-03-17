// functions with obj

const obj = {
    Name : "Drup",
    age : 20
}

function Myfunc(anyobj) {
    return `Your name is ${anyobj.Name} and Your age is ${anyobj.age}`
}

console.log(Myfunc(obj))


// Function with array 

const myarr = [10,20,30,40,50]

function Array_func(anyArray) {
    return anyArray[2]
}

console.log(Array_func(myarr))


// When we want to pass multiple value in single parameter

function Number_count(...num1) {
    console.log(num1)
}

Number_count(200,3,400)