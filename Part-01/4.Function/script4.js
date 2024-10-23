//Object in function



const myObject = {

    courseName : "Js with",
    lang: "Hinglish",
    price: 2000

}



function handleObject(anyObject){

    console.log(`Course name is ${anyObject.courseName} lang is  ${anyObject.lang} price is  ${anyObject.price} `)

}


//calling function 



handleObject(myObject())


// handleObject({
//     courseName:"hh",
//     lang:"h",
//     price: 444
// })  