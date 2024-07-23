// below code use Callback hell function

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }



// getData(1,()=>{
//     console.log("getting data2.....")
//     getData(2,()=>{
//         console.log("getting data3.....")
//         getData(3,()=>{
//             console.log("getting data4.....")
//             getData(4)
//         })
//     })
// })


// use promise channing replace calback hell==========


function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success")
        },3000)
    })
}

/*
getData(1).then((res)=>{
    console.log(res);
    getData(2).then((res)=>{
        console.log(res)
    })

});
*/


// This  is real Promise chain


console.log("geting data 1...");
getData(1).then((res)=>{
    console.log("geting data 2...");
    return getData(2);
})
.then((res)=>{
    console.log("geting data 3...");
    return getData(3);
})
.then((res)=>{
    console.log(res);
})

