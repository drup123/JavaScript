// Immediately Invoked Function Expression

function Parent() {
    let Mob = "965xxxxx"
    console.log(Mob);
    
    function child() {
        let Mob = "5333XX"
        console.log(Mob)
    } child()
}
Parent()


// ------------------- Case 1 -> Avoiding Global Variable Pollution ---------------------------

let AccId = 2
function Modifie() {
    AccId++      // Here AccId(global) changed
}
Modifie()
console.log(AccId)

const id = (() => {
    let Userid = 2
    function Cant_Modifie() {
        Userid++
    }
    Cant_Modifie()
})()

console.log(id.Userid)  // Give ERROR we can't access Userid


//----------------------- Case 2 -> Encapsulating Private Variables & Preventing Modification-----------------------------

let Firstobj = {
    val : 0,
    Name : "Drup"
}

Firstobj.Name = "Patil"

console.log(Firstobj.Name)


const Func = (() => {
    let surname = "Patil"
})()

Func.surname = "Drup"
console.log(Func.surname)      // Give ERROR we can't access

