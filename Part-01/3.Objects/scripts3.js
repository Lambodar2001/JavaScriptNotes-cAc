//3. object with function 




const mySymbol = Symbol["key1"]

const objectName= {

    [mySymbol]: "key2",
    name : "lambodar",
    age: 23,
    "Full name": "Lambodar Waghmare "
}



//Normal function declartion 

function functionName(){

    console.log("Greatingss!!!")
}


// function declartion with objects 

objectName.functionName2 = function(){

    console.log("Greating")
}


//acces

console.log(objectName.functionName2())


