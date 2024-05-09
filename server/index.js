
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('This response from server')
})

app.listen(5050, () => {
    console.log('Server is running on port 3000')
})