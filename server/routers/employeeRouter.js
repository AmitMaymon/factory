const express = require('express')
const employeesBLL = require('../BLL/employeeBLL')

router = express.Router()


router.get('/', async (req, res) => {
    try {
        res.json(await employeesBLL.getAllEmployees()).status(200)
    } catch (e) {
        res.json({ error: e.message }).status(500)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        res.json(await employeesBLL.getEmployeeById(id)).status(200)
    } catch (e) {
        res.json({ error: e.message }).status(500)
    }
})
router.post('/', async (req, res) => {
    try {
        const employee = req.body
        res.json(await employeesBLL.createEmployee(employee)).status(201)
    } catch (e) {
        res.json({ error: e.message }).status(500)

    }
})
router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params
        console.log(id)
        const employee = req.body
        res.json(await employeesBLL.updateEmployee(id,employee)).status(202)
    } catch (e) {
        res.json({ error: e.message }).status(500)

    }
})
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        res.json(await employeesBLL.deleteEmployee(id)).status(202)
    } catch (e) {
        res.json({ error: e.message }).status(500)

    }
})

module.exports =router
