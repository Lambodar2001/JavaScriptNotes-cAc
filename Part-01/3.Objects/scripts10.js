//Object Destruting 


const myObject = { 


    myUserName: "Lambodar",
    myUserAge : 23,
    myUserId: "123abc"
};

// const {myUserName, myUserAge, myUserId}= myObject;
// console.log(myUserName)


const {myUserName: name , myUserAge: age , myUserId: id} = myObject;

console.log(name)
console.log(age)
console.log(id)
