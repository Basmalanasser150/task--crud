const express = require('express')

const app = express()

const port = process.env.PORT || 3000


// Connect MongoDB
require('./db/mongoose')


// Read JSON from request body
app.use(express.json())


// User Router
const userRouter = require('./routers/user')

app.use(userRouter)


// Start Server
app.listen(port, () => {
    console.log('server is running on port ' + port)
})