// Initialization

const Myarr = [13,4,5,"Drup",3,7]
const myarray = new Array(1,2,3,4,5,6,7,8)
const copy2 = myarray   // Shallow copy

//-------------- Methods of Array -------------------------------------

Myarr.push(9)
Myarr.push("Patil")
console.log(Myarr);

Myarr.pop()
console.log(Myarr);

const copy = Myarr.join()    // .join()  ->  convert to string
console.log(typeof copy);
console.log(Myarr.join("-"));

copy2.unshift(8)          // add at 0th index
console.log(myarray)

copy2.shift()            // remove at 0th index
console.log(myarray)


//-------- slice and splice ----------------

console.log(myarray.slice(1,3));
console.log(myarray)

console.log(myarray.splice(0,4))
console.log(myarray);

//-------- Use of splice ---------------

const Months = ["jan","feb","march","june"]
Months.splice(3,1,"april")          // 3 -> start index , 1 -> delete value
console.log(Months);









