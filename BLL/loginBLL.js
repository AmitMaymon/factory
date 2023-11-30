const { getWsUsers } = require('../DAL/usersWS')
const jwt = require('jsonwebtoken')


async function checkLogin(username, email) {
    const users = await getWsUsers()
    const user = users.find((u) => u.username == username && u.email == email)
    if (!user) return { Auth:false,message: 'Wrong Credentials' }

    const token = generateToken(user)
    return {
        Auth:true,
        message: 'Successful',
        token:token 
    }

}

function generateToken(user){
const secretKey = process.env.SECRET_KEY

const payload = {
    // name: user.name

}

return jwt.sign(payload,secretKey,{expiresIn:'1h'})


}

module.exports = { checkLogin }