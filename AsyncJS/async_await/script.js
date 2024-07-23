// async function hello(){
//     console.log("hello.");
// };


/*
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        }, 4000)
    })
}

async function getWeatherData(){
    await api(); //1st call
    await api(); // 2nd call
}
*/


function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success")
        },2000);
    });
};

//Async-await

async function getAllData(){
    console.log("getting data1...");
    await getData(1)
    console.log("getting data2...");
    await getData(2)
    console.log("getting data3...");
    await getData(3)
    console.log("getting data4...");
    await getData(4)
    .then((res)=>{
        console.log(res)git
    })
}
// getAllData()



// IFFE function automatacli called ******************

// (function(){
//     console.log("hello")
// })();


// uper ke code ko iffe function mai convert karne per

// (async function(){
//     console.log("getting data1...");
//     await getData(1)
//     console.log("getting data2...");
//     await getData(2)
//     console.log("getting data3...");
//     await getData(3)
//     console.log("getting data4...");
//     await getData(4)
//     .then((res)=>{
//         console.log(res)
//     })
// })();
