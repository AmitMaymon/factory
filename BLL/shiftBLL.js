const { Shift } = require('../models/factoryModels')


const getAllShifts = async ()=> await Shift.find({})

const getShiftById = async(id)=>{
    const shift = await Shift.find({id:id})
    
    if(shift.length != 0){
        return {shift:shift}
    }
    return {message:'Not Found'}


}


const createshift = async (shift)=>{
    const newshift = new Shift(shift)
    await newshift.save()

    return {shift_created:newshift}
}

const updateShift = async (id,shift)=>{
    const shiftTemp = await Shift.findOneAndUpdate({id:id},shift,{new:true,runValidators:true})
    console.log(shiftTemp)
    if(shiftTemp!= null){
        return{updated:shiftTemp}
    }else{
        return {message:'Update Failed'}
    }



}

const deleteShift = async (id)=>{
    const shift = await Shift.findOneAndDelete({id:id})
    if(shift != null){
        return{deleted:shift}
    }
    return {message:'Not Found'}

}

module.exports = {
    getAllShifts,
    getShiftById,
    updateShift,
    deleteShift,
    createshift
}

