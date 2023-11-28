const express = require('express')
const usersBLL = require('../BLL/usersBLL')

router = express.Router()


router.get('/', async (req, res) => {
    try {
        res.json(await usersBLL.getAllUsers()).status(200)
    } catch (e) {
        res.json({ error: e.message }).status(500)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        res.json(await usersBLL.getUserById(id)).status(200)
    } catch (e) {
        res.json({ error: e.message }).status(500)
    }
})
router.post('/', async (req, res) => {
    try {
        const user = req.body
        res.json(await usersBLL.createUser(user)).status(201)
    } catch (e) {
        res.json({ error: e.message }).status(500)

    }
})
router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params
        console.log(id)
        const user = req.body
        res.json(await usersBLL.updateUser(id,user)).status(202)
    } catch (e) {
        res.json({ error: e.message }).status(500)

    }
})
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        res.json(await usersBLL.deleteUser(id)).status(202)
    } catch (e) {
        res.json({ error: e.message }).status(500)

    }
})

module.exports =router
