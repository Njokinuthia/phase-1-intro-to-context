// Your code here
const person = ["Eunice", "Njoki", "intern", 1000]

// // FUNCTION ONE
// argument - array with 3 strings and number
// return object populated with array items
// initialize two empty arrays for time details 

function createEmployeeRecord(array) {
  const employeeDetails = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  }
  return employeeDetails;
}
// console.log(createEmployeeRecord(person))

// FUNCTION TWO
// argument array of arrays 
// creates two records from nested array using function one that
// populates array with those records

let twoRows = [
  ["moe", "sizlak", "barkeep", 2],
  ["bartholomew", "simpson", "scamp", 3]
]

function createEmployeeRecords(arrayOfArrays) {
  let employeeRecords = []
  for (const array of arrayOfArrays) {      
    let employeeRecordsObject = (createEmployeeRecord(array));
    employeeRecords.push(employeeRecordsObject)
  }
  return employeeRecords;
}
// console.log(createEmployeeRecords(twoRows))


// // FUNCTION 3

// function createTimeInEvent(employeeRecords , dateStamp){  
//   for(const employeeRecord of employeeRecords){   
//     let [date , hour] = dateStamp.split(" ");    
//     employeeRecord.timeInEvents.push({
//       type:"TimeIn",
//       hour:parseInt(hour,10),
//       date:date    
//     }); 
//     return employeeRecord
//   }
// }



function createTimeInEvent(employee, dateStamp) {

  let [date, hour] = dateStamp.split(" ");
  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
  });
  return employee
}

// FUNCTION TIME_OUT

function createTimeOutEvent(employee, dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
  })
  return employee;
}


let personDetails = [{
  firstName: 'bartholomew',
  familyName: 'simpson',
  title: 'scamp',
  payPerHour: 3,
  timeInEvents: [{type: "TimeOut",
  hour: 800,
  date: "2021-10-28"}],
  timeOutEvents: [{type: "TimeOut",
  hour: 1800,
  date: "2021-10-28"}]
}]
// FUNCTION HOURS WORKED
function hoursWorkedOnDate(employee , date){
  console.log(employee[0].timeInEvents[0].hour)
  let inHour = employee[0].timeInEvents[0].hour
  let outHour = employee[0].timeOutEvents[0].hour;
  console.log(outHour - inHour)/100
}
hoursWorkedOnDate(personDetails ,"2021,10,28" )