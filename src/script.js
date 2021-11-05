fetch("http://localhost:3000/graphql",{
    method: "POST",
    headers:{ "Content-Type": "application/json" },
    mode: "no-cors",
    body: JSON.stringify({
        query:`
        query{
            Quotes
          }
        
        `
    })
})
.then(res => res.json())
.then(data => {
    console.log(data.data)
})