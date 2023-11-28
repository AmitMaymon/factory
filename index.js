const express = require('express')
const cors = require('cors')
const usersRouter = require('./routers/usersRouter')
const shiftRouter = require('./routers/shiftRouter')
const departmentRouter = require('./routers/departmentRouter')
const employeeRouter = require('./routers/employeeRouter')
const PORT = 7000
//DB connect
require('./configs/config')

const app = express()
//Middleware
app.use(express.json())
app.use(cors())

//Paths
app.use('/users',usersRouter)
app.use('/employees',employeeRouter)
app.use('/shifts',shiftRouter)
app.use('/departments',departmentRouter)


//listen

app.listen(PORT,()=>{console.log('Listening on Port:'+PORT)})






