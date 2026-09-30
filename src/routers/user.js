const express = require('express')
const User = require('../models/user')

const router = express.Router()



// 1- POST - Add User


router.post('/users', async (req, res) => {
    try {

        const user = new User(req.body)

        await user.save()

        res.status(201).send(user)

    } catch (e) {

        res.status(400).send(e)

    }
})



// 2- GET - Get All Users


router.get('/users', async (req, res) => {
    try {

        const users = await User.find({})

        res.status(200).send(users)

    } catch (e) {

        res.status(500).send(e)

    }
})



// 3- GET By ID - Get One User


router.get('/users/:id', async (req, res) => {
    try {

        const user = await User.findById(req.params.id)

        if (!user) {
            return res.status(404).send('Unable to find user')
        }

        res.status(200).send(user)

    } catch (e) {

        res.status(400).send(e)

    }
})



// 4- PATCH - Update User


router.patch('/users/:id', async (req, res) => {
    try {

        const updates = Object.keys(req.body)

        const user = await User.findById(req.params.id)

        if (!user) {
            return res.status(404).send('Unable to find user')
        }

        updates.forEach((ele) => {
            user[ele] = req.body[ele]
        })

        await user.save()

        res.status(200).send(user)

    } catch (e) {

        res.status(400).send(e)

    }
})



// 5- DELETE - Delete User


router.delete('/users/:id', async (req, res) => {
    try {

        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send('Unable to find user')
        }

        res.status(200).send({
            message: 'User deleted successfully',
            user: user
        })

    } catch (e) {

        res.status(400).send(e)

    }
})


module.exports = router