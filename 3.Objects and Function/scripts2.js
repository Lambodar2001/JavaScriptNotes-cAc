//2. object defination  with symbol data type



const mySymbol = Symbol["key1"]

const objectName= {

    [mySymbol]: "key2",
    name : "lambodar",
    age: 23,
    "Full name": "Lambodar Waghmare "
}



console.log(objectName)
console.log(objectName[mySymbol])
