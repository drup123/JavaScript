fetch("https://api.github.com/users/drup123")
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error("Error : ",err))

// With async and await

async function FetchData() {
    try {
        const response = await fetch("https://api.github.com/users/drup123")
        const data = await response.json()
        console.log(data)
    } catch(err) {
        console.error("Error : ",err)
    }
    
}

FetchData()