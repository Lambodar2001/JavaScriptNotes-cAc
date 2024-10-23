//function well synatx 

//argument undefined/nulll
//condition optimization to !parameterc


function userLoggedIn(name){

    // name===undefined

    if(!name){

        console.log("please enter name")
        return
    }


    return `user just logged in name is ${name};`

};


// const result =  userLoggedIn(); // undefined
// const result =  userLoggedIn(null); //null

const result =  userLoggedIn();
console.log(result)

