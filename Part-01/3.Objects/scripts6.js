// Object PArt: 02

//Nested Objects 


const objectOne = {

    userMail : "aws@gmail.com",

    objectTwo : {


        objectThree: {


            UserFirstName : "lambodar",
            userSecName : "Waghmare"
        }



    }
}



//acces 

objectOne.objectTwo.objectThree.UserFirstName="Shiv"

console.log( objectOne.objectTwo.objectThree.UserFirstName)

console.log(objectOne)