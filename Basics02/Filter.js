//------------- filter ----------------------

const Price = [20,10,44,60,79,50,5]

const result = Price.filter((num) => num > 30)
console.log(result)

const second = Price.filter((val) => {
    return  val < 50
})
console.log(second)
