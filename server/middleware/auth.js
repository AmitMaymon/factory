const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {
    const token = req.headers.authorization

    if(!token){
        res.json({Unauthorized: 'No token provided'}).status(401)
    }

    jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
        if(err){
            if(err.name ==='TokenExpiredError'){
                return res.status(401).json({Unauthorized:'Token Expired'})

            }else{
                return res.status(401).json({Unauthorized:'Invalid Token'})

            }
        }
        req.user = user
        next()

    })


}


module.exports = { authenticateToken}