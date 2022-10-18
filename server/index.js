// Imports express and cors frameworks
const express = require('express')
const cors = require('cors')

//
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Connect databases
const {getAllHouses, deleteHouse, createHouse, updateHouse} = require('./controller.js')

// Endpoints
app.get('/api/houses', getAllHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)



// Infinity while loop that runs server
app.listen(4004, () => {
    console.log("Running on port 4004")
})