const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    age: {
        type: Number,
        required: true,
        validate(val) {
            if (val <= 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },

    city: {
        type: String,
        required: true,
        trim: true
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User