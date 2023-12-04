const { getWsUsers } = require('../DAL/usersWS')
const jwt = require('jsonwebtoken')
const {getUserById} = require('./usersBLL')

async function checkLogin(username, email) {
    const users = await getWsUsers()
    const user = users.find((u) => u.username == username && u.email == email)
    if (!user) return { Auth: false, message: 'Wrong Credentials' }
    
    const token = await generateToken(user)
    console.log(token)
    if(token == '')return {Auth:false,message:'No user with that ID'}
    
    return {
        Auth: true,
        message: 'Successful',
        token: token,

    }

}

async function generateToken(user) {
    const dbUser = await getUserById(user.id)
    console.log(dbUser.user)
    if(dbUser['message'] == 'Not Found') return ''

    const secretKey = process.env.SECRET_KEY

    const payload = {
        name: dbUser.user[0].fullName,
        id: user.id

    }

    return jwt.sign(payload, secretKey, { expiresIn: '1h' })


}

module.exports = { checkLogin }