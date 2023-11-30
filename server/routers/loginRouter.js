const express = require('express')
const loginBLL = require('../BLL/loginBLL')

router = express.Router()

router.post('/', async (req, res) => {
    const { username, email } = req.body
    const result = await loginBLL.checkLogin(username,email)

    if(result.Auth == true)
        res.json(result).status(200)
    else
        res.json(result).status(401)
})


module.exports = router