const { User } = require('../models/factoryModels')

const getAllUsers = async ()=> await User.find({})

const getUserById = async(id)=>{
    const user = await User.find({id:id})
    
    if(user.length != 0){
        return {user:user}
    }
    return {message:'Not Found'}


}


const createUser = async (user)=>{



    const newUser = new User(user)
    await newUser.save()

    return {user_created:newUser}
}

const updateUser = async (id,user)=>{
    const userTemp = await User.findOneAndUpdate({id:id},user,{new:true,runValidators:true})
    console.log(userTemp)
    if(userTemp!= null){
        return{updated:userTemp}
    }else{
        return {message:'Update Failed'}
    }



}

const deleteUser = async (id)=>{
    const user = await User.findOneAndDelete({id:id})
    if(user != null){
        return{deleted:user}
    }
    return {message:'Not Found'}

}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser
}

