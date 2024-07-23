// console.log("One")
// console.log("Two")
// console.log("Three")
// console.log("Four")

// function hello(){
//     console.log("Hello");
// }
// setTimeout(hello,4000)


// console.log("One")
// console.log("Two")
// setTimeout(() => {
//     console.log("4s Hello")
// },4000);


// setTimeout(()=>{
//     console.log("2s")
// },2000);
// console.log("Three")
// console.log("Four")


// CallBacks in Java Script=======================>>

// sync CallBAck

// function sum(a,b){
//     console.log(a+b);
// }

/*
function calculator(a,b,sumCallback){
    sumCallback(a,b);

}

// calculator(1,2,sum)

calculator(1,2,(a,b)=>{
    console.log(a+b);
})
*/

// Async CAllbacks JS

// const hello= () => {
//     console.log("Hello")

// }
// setTimeout(hello,3000);


// Extra Practice for Loop

// for(let i=0;i<5;i++){
//     let str="";
//     for(let j=0;j<5;j++){
//         str = str+j;
//     }
//     console.log(i,str)
// }
// setTimeout(()=>{
//     console.log("Hello")
// },0.1)

// Callback Hell ***********************

function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000)
}

// getData(1)
// getData(2)
// getData(3)
// getData(4)

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



