// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

//---------------------------------------------------

let CreatedDate = new Date(2025, 2, 8)    // IN THIS FORMAT MONTH START FROM 0
console.log(CreatedDate.toDateString());

console.log(CreatedDate.getMonth() + 1);  // IN THIS FORMAT MONTH START FROM 0

// ------------------------------------------------------

let date = new Date("08-03-2025")  // IN THIS FORMAT MONTH CONSIDER AS IT IS 
console.log(date.toLocaleString());


//-------------------- TIME ------------------------------------------

let time =  Date.now()
console.log(Math.round(time/1000));






