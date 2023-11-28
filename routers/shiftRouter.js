const express = require('express')
const shiftsBLL = require('../BLL/shiftBLL')

router = express.Router()


router.get('/', async (req, res) => {
    try {
        res.json(await shiftsBLL.getAllShifts()).status(200)
    } catch (e) {
        res.json({ error: e.message }).status(500)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        res.json(await shiftsBLL.getShiftById(id)).status(200)
    } catch (e) {
        res.json({ error: e.message }).status(500)
    }
})
router.post('/', async (req, res) => {
    try {
        const shift = req.body
        res.json(await shiftsBLL.createshift(shift))//.status(201)
    } catch (e) {
        res.json({ error: e.message }).status(500)

    }
})
router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params
        console.log(id)
        const shift = req.body
        res.json(await shiftsBLL.updateShift(id,shift)).status(202)
    } catch (e) {
        res.json({ error: e.message }).status(500)

    }
})
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        res.json(await shiftsBLL.deleteShift(id)).status(202)
    } catch (e) {
        res.json({ error: e.message }).status(500)

    }
})

module.exports =router
