const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/new-proj')
    .then(() => {
        console.log('MongoDB connected successfully')
    })
    .catch((error) => {
        console.log('MongoDB connection error:', error)
    })