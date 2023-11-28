const express = require('express')
const departmentsBLL = require('../BLL/departmentBLL')

router = express.Router()


router.get('/', async (req, res) => {
    try {
        res.json(await departmentsBLL.getAllDepartments()).status(200)
    } catch (e) {
        res.json({ error: e.message }).status(500)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        res.json(await departmentsBLL.getDepartmentById(id)).status(200)
    } catch (e) {
        res.json({ error: e.message }).status(500)
    }
})
router.post('/', async (req, res) => {
    try {
        const department = req.body
        res.json(await departmentsBLL.createDepartment(department)).status(201)
    } catch (e) {
        res.json({ error: e.message }).status(500)

    }
})
router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params
        console.log(id)
        const department = req.body
        res.json(await departmentsBLL.updateDepartment(id,department)).status(202)
    } catch (e) {
        res.json({ error: e.message }).status(500)

    }
})
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        res.json(await departmentsBLL.deleteDepartment(id)).status(202)
    } catch (e) {
        res.json({ error: e.message }).status(500)

    }
})

module.exports =router
