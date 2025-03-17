// Scope

function Trial() {
    let Name = "Drup"

    function Trial_child() {
        let Surname = "Patil"
        console.log(Name)   // Can access becuase inside the scope
    }

    console.log(Surname)   // (ERROR) Can't access becuase outside the scope
    Trial_child()
}
Trial()


// hoisting

Demo()
function Demo() {
    console.log("Hello")
}

anyVariable()    // (ERROR) -> can't call variable before initializing
const anyVariable = function() {
    console.log("I am working ?")
}

