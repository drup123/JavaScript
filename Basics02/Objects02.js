// Merge object

const Target = {a:1,b:2,c:3}
const source = {d:4,e:5,f:6}

const Merged1 = Object.assign(Target,source)
console.log(Merged1)

const Merge2 = {...Target,...source}
console.log(Merge2)

// If we want to acceses use key multiple time 

const{a} = Target 
console.log(a)

const{b:second_key} = Target
console.log(second_key)