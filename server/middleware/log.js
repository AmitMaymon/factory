const jf = require('jsonfile')
const { getUserById } = require('../BLL/usersBLL')


//Function to log the actions of the user and to log him out if needed
async function logActions(req, res, next) {


    //Activate IF WANT TO NOT LOG GET REQ
    // if (req.method == "GET") {
    //     next()
    //     return
    // }
    newData = []
    try {
        const prevData = await jf.readFile('../server/data/log.json')

        prevData.forEach((data) => { newData.push(data) })
    } catch (error) {
        console.log('No JSON Data')
    }

    const id = req.body.id
    console.log(req.body.id)
    const { user } = await getUserById(id)

    let date = new Date
    
    let currentDate = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()
    console.log(typeof currentDate)

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
        return res.json({message:'No More action'})
        
    }

    


    const obj = {
        id: id,
        numOfActions: user[0].numOfActions,
        date:currentDate,
        remainingActions: remainingActions
    }
    newData.push(obj)
    jf.writeFile('../server/data/log.json', newData,{spaces:2})

    next()
}

module.exports = { logActions }

