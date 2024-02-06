const express = require ('express')
const app = express()

app.get('/', (req, rest) => {
    res.send('Hello Posey!')
})

app.listen(3000) 