//Levantar servidor sencillo
const express = require('express')
const app = express()

//peticiones
app.get('/', (req, res) =>{
    res.send('<h2>MODULO DOCKER DEVOPS</h2>')
})

const port = process.env.PORT || 3000

app.listen(port, () => 
    console.log('server listening on port:', `http://localhost:${port}`)
)