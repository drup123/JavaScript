const Marvel = ["Ironman","Captain","Thor"]
const DC = ["Superman","Batman","Aquaman"]
const X_men = ["Wolverine","Beast","Deadpool"]

//---------- Methods to merge Arrays -------------------------

const Marvel_DC = Marvel.concat(DC)
console.log(Marvel_DC);

const Multiverse = [...Marvel,...DC,...X_men]  // Spread operator
console.log(Multiverse)


// What if nested array 

const MainArray = [1,2,[3,4],5,[6,[7,8]]]
const Newone = MainArray.flat(Infinity)
console.log(Newone);


// Other methods 

console.log(Array.isArray("Drup"));
console.log(Array.from("Drup"))   // conver to array

let sub1 = 70
let sub2 = 80
let sub3 = 75

console.log(Array.of(sub1,sub2,sub3))  // Make array
