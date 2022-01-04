const output = document.querySelector("#output")

fetch("./db.json")
    .then((res) => {
        console.log(res)
        return res.json()
    })
    .then(data => {
       const text = data.tasks
       text.map((item, id) => {
           console.log(item)
           const name = document.createElement("p")
           const state = document.createElement("p")
           name.innerHTML = text[id].name
           state.innerHTML = text[id].state
           output.appendChild(name)
           output.appendChild(state)
       })
    })
    
    .catch((err) => {
        console.log(err)
})