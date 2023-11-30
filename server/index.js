const express = require('express')
const cors = require('cors')
const {authenticateToken} = require('./middleware/auth.js')
const usersRouter = require('./routers/usersRouter')
const shiftRouter = require('./routers/shiftRouter')
const departmentRouter = require('./routers/departmentRouter')
const employeeRouter = require('./routers/employeeRouter')
const loginRouter = require('./routers/loginRouter')
const PORT = 7000
//DB connect
require('./configs/config')

//dotenv load
require('dotenv').config();

const app = express()
//Middleware
app.use(express.json())
app.use(cors())
// app.use(authenticateToken)
//Paths
app.use('/users',authenticateToken,usersRouter)
app.use('/employees',employeeRouter)
app.use('/shifts',shiftRouter)
app.use('/departments',departmentRouter)
app.use('/login',loginRouter)


//listen

app.listen(PORT,()=>{console.log('Listening on Port:'+PORT)})






