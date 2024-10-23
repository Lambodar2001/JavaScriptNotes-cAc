//1. Arrow function and this function - part1 : this keyword

const user = {

    userName: " Lambodar", 
    price:900,

    welcomeMeassage: function(){

        // console.log(`${this.userName}, welcome to website`)
        console.log(this)
    }

}

const  myfun=() => {


    console.log(this)


}


myfun()
