// Write your solution in this file!
const employee = {name : "Adedayo"};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, streetAddress : '11 Broadway'};

}

//destructively mutates the object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress = "12 Broadway";
     return employee;
}

//Deleting a key from the object
function deleteFromEmployeeByKey(employee, key, value){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee; 
}

//destructively delete a key from the object
function destructivelyDeleteFromEmployeeByKey(meployee, key,value){
    delete employee.name;
    return employee;
}