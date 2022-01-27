// Write your solution in this file!

const employee = {
    name: "Mike",
    streetAddress: "36 Fort Evans"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};

    newEmployee[key] = value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {...employee}

    newEmployee[name];

    delete newEmployee.name;

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employees, name) {
    delete employee.name;

    return employee;
}