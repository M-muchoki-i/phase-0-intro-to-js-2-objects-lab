// Write your solution in this file!
const employee = {
  name: "joy",
  key: "streetAddress",
};
console.log(employee);
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "place", thika);
console.log(updatedEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  
  employee[key] = value;
  return employee;
}
  
function deleteFromEmployeeByKey(employee, key) {
  const { [key]: _, ...rest } = employee;
  return rest;
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}