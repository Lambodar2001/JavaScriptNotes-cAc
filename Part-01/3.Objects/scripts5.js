//5. Object function  this keyword



const mySymbol = Symbol["key1"]

const objectName= {

    [mySymbol]: "key2",
    name : "lambodar",
    age: 23,
    "Full name": "Lambodar Waghmare"
}



// function declartion with objects 

objectName.functionName = function(){

    console.log(`This is function accesing object property name with value ${this.name}`)
}


console.log(objectName.functionName ())


