const { Employee } = require('../models/factoryModels')


const getAllEmployees = async ()=> await Employee.find({})

const getemployeeById = async(id)=>{
    const employee = await employee.find({id:id})
    
    if(employee.length != 0){
        return {employee:employee}
    }
    return {message:'Not Found'}


}


const createEmployee = async (employee)=>{
    const newemployee = new Employee(employee)
    await newemployee.save()

    return {employee_created:newemployee}
}

const updateEmployee = async (id,employee)=>{
    const employeeTemp = await Employee.findOneAndUpdate({id:id},employee,{new:true,runValidators:true})
    console.log(employeeTemp)
    if(employeeTemp!= null){
        return{updated:employeeTemp}
    }else{
        return {message:'Update Failed'}
    }



}

const deleteEmployee = async (id)=>{
    const employee = await Employee.findOneAndDelete({id:id})
    if(employee!= null){
        return{deleted:employee}
    }
    return {message:'Not Found'}

}

module.exports = {
    getAllEmployees,
    getemployeeById,
    updateEmployee,
    deleteEmployee,
    createEmployee
}

