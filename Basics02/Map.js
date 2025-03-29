// Map

const myarr = [7,8,9,5,6,10]

const result = myarr.map((val) => val * 10)
console.log(result)

// -------------------- Chaining ----------------------

const arr  = [12,20,32,18,16,4,56,17]

const show = arr.map((val) => val * 10).filter((num) => num < 50)
console.log(show)