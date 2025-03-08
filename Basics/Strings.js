// Template Literals (or Template Strings) in JavaScript.
const Name = "Drup"   // PRIMITIVE STRING 
const Age = 21
console.log(`Your name is ${Name} and your age is ${Age}`);



//-------------------------------------------------------------------------------

const UserName = new String("Drup-Patil")      // STRING OBJ (USE RARELY)
UserName.language = "English"
console.log(UserName.language)                // WE CAN ADD PROPERTIES IN OBJ



//----------------------- Methods of Strings -----------------------------------------------

console.log(Name.charAt(3))

console.log(Name.includes('d')) // checks char present or not

console.log(Name.length)   // Its a property not method

console.log(Name.replace('r','u'))

const mail = "  druppatil   "
console.log(mail.trim())   // remove unwanted spaces


const Password = "Drup-patil"
console.log(Password.split('-'))