const { Department } = require('../models/factoryModels')


const getAllDepartments = async ()=> await Department.find({})

const getDepartmentById = async(id)=>{
    const department = await Department.find({id:id})
    
    if(department.length != 0){
        return department
    }
    return {message:'Not Found'}


}


const createDepartment = async (department)=>{
    const newdepartment = new Department(department)
    await newdepartment.save()

    return {department_created:newdepartment}
}

const updateDepartment = async (id,department)=>{
    const departmentTemp = await Department.findOneAndUpdate({id:id},department,{new:true,runValidators:true})
    if(departmentTemp!= null){
        return{updated:departmentTemp}
    }else{
        return {message:'Update Failed'}
    }



}

const deleteDepartment = async (id)=>{
    const department = await Department.findOneAndDelete({id:id})
    if(department != null){
        return{deleted:department}
    }
    return {message:'Not Found'}

}

module.exports = {
    getAllDepartments,
    getDepartmentById,
    updateDepartment,
    deleteDepartment,
    createDepartment
}

