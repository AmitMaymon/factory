const jf = require('jsonfile')
const { getUserById } = require('../BLL/usersBLL')
const {User} = require('../models/factoryModels')

//Function to log the actions of the user and to log him out if needed
async function logActions(req, res, next) {
    
    if(req.body.loc == 'login'){
        
        return next()
    }

    //Activate IF WANT TO NOT LOG GET REQ
    if (req.method == "GET") {
        next()
        return
    }
    newData = []
    try {
        const prevData = await jf.readFile('../server/data/log.json')

        prevData.forEach((data) => { newData.push(data) })
    } catch (error) {
        console.log('No JSON Data')
    }
    req.he
    const id = req.headers.id
    const { user } = await getUserById(id)

    let date = new Date
    
    let currentDate = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()
    let actionsPerformed = 0
    try {
        for (let i = 0; i < newData.length; i++) {
            if (newData[i].id == id&&newData[i].date==currentDate) {
                actionsPerformed++
            }
        }
    } catch (error) {

    }

    

    const remainingActions = user[0].numOfActions - actionsPerformed - 1
    if(remainingActions<0){
        return res.json({message:'No More actions'})
        
    }

    


    const obj = {
        id: id,
        numOfActions: user[0].numOfActions,
        date:currentDate,
        remainingActions: remainingActions
    }
    newData.push(obj)
    jf.writeFile('../server/data/log.json', newData,{spaces:2})

    await User.findOneAndUpdate({id:id},{"remainingActions":remainingActions})


    next()
}

module.exports = { logActions }

