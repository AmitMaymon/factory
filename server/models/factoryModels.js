const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    id: { type: Number, required: true, min: 1, unique: true },
    fullName: { type: String, required: true },
    numOfActions: { type: Number }
}, { versionKey: false })

const departmentSchema = new mongoose.Schema({
    id: { type: Number, required: true, min: 1, unique: true },
    name: { type: String, required: true },
    managerId: { type: Number }
}, { versionKey: false })

const employeeSchema = new mongoose.Schema({
    id: { type: Number, required: true, min: 1, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    startYear: { type: Number },
    depId: { type: Number }
}, { versionKey: false })

const shiftSchema = new mongoose.Schema({
    id: { type: Number, required: true, min: 1, unique: true },
    date: { type: Date },
    startHour: { type: Number, required: true },
    endHour: { type: Number, required: true }

}, { versionKey: false })


const User = mongoose.model('user', userSchema)
const Department = mongoose.model('department', departmentSchema)
const Employee = mongoose.model('employee', employeeSchema)
const Shift = mongoose.model('shift', shiftSchema)

module.exports = { User, Department, Employee, Shift }