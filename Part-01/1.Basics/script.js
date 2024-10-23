let myDate   = new Date();



console.log("this is  getTime      "+ myDate.getTime())
console.log("this is toString      " + myDate.toString())
console.log("this is toDateString     " + myDate.toDateString())
console.log("this is toISOString   "+ myDate.toISOString())
console.log("this is toUTCString   "+ myDate.toUTCString())
console.log("this is toLocaleDateString   "+ myDate.toLocaleDateString())
console.log("this is toLocaleTimeString   "+ myDate.toLocaleTimeString())


// this is  getTime                         1728911071290
// this is toString                         Mon Oct 14 2024 18:34:31 GMT+0530 (India Standard Time)
// this is toISOString                      2024-10-14T13:04:31.290Z
// this is toUTCString                      Mon, 14 Oct 2024 13:04:31 GMT
// this is toLocaleDateString               10/14/2024
// this is toLocaleTimeString               6:34:31 PM



//create new date 


let myCreatedDate = new Date(2024, 10, 14 )
console.log("My created date is : "+ myCreatedDate.toDateString())

let myCreatedDateWithTime = new Date(2024, 10, 14 , 6, 46)
console.log("My created date with time  is : "+ myCreatedDateWithTime.toLocaleString())