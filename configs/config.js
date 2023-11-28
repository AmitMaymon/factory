const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://127.0.0.1:27017/factory')
.then(()=>{console.log('Connected to Factory DB')})
.catch((e)=>{console.log('Connection FAILED to Factory DB error: '+e.message)})

