// ---------------- Creating Promise --------------------------

const promise1 = new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log("Async task is complete");
        
    } , 1000)
})

promise1.then(function(){        // This is will not trigger yet becuase we dont call resolve()
    console.log("Promised consume");
    
})


// ---------- with resolve and reject ---------------

const promise2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve("Completede")
        } else {
            reject("Error")
        }
        
    },1000)
})

promise2.then((res) => {
    console.log("complete",res);
    
}).catch((rej) => {
    console.log("Error",rej);
    
})


// -------------------- Promise chaining -------------------

const promise3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false
        if(!error) {
            resolve({Name : 'Bukcy' , HeroName : 'Winter soldier'})
        } else {
            reject("Error")
        }
        
    },1000)
})

promise3.then(function(res) {   
    return res.Name              // This return value pass to next then
}).then(function(val) {          // here
    console.log(val)
}).catch((err) => {
    console.log(err)
})


// -------------------- async and await -------------------------------

async function fetchData() {
    try {
      let response = await fetch("https://api.github.com/users/drup123");
      let data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Error:", err);
    }
  }
  
fetchData()