// Object PArt: 02

//Merge two Objects


const obj1 = { 

    a:1,
    b:2

}

const obj2 = { 

    c:3,
    d:4
}


// const obj3 = {obj1 , obj2}

const obj3 = Object.assign({}, obj1 , obj2)

console.log( obj3)