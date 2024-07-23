// console.log("promisse in js.");

/*
const getPromise =()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        // resolve("success");
        reject("network Error");

    });
};

let promise = getPromise();
promise.then((res)=>{
    console.log("promise fulfiled",res)
});
promise.catch((err)=>{
    console.log("Promise rejected",err);
});
*/


// function getData(dataId,getNextData) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("Success");
//             // reject("error") // if run this line comment upper two line, and call getData(12) in console panale...
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);

//     });
// }


// 3rd ============================

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("Success 1");

        },4000);

    })
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("Success 2");

        },4000);

    })
}

// Bottom line exicute parlaly..

/*
console.log("Fetching data1...")
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log(res);

});
console.log("Fetching data2...")
let p2 = asyncFunc2();
p2.then((res)=>{
    console.log(res);

});
*/


// another method to run asyncronusly 

/*
console.log("Fetching data1...")
let p1=asyncFunc1();
p1.then((res)=>{
    // console.log(res);
    console.log("Fetching data2...");
    let p2=asyncFunc2();
    p2.then((res)=>{
        // console.log(res);

    })

})
*/

// upper function in short form

/*
console.log("Fetching data1");
asyncFunc1().then((res)=>{
    console.log("Fetching data2");
    asyncFunc2().then((res)=>{

    })

})

*/

