//Q1 remove occurance of number 

//  let nums =[1 ,2 ,3 ,2, 5,7];
// let num = prompt("enter the number you want to delete");
   
// for(let i=0 ;i<nums.length;i++){
//     if(num==nums[i]){
//         nums.splice(i,1);
        
//     }
//     console.log(nums);
// }

//Q2 random number between  1 to 100

// let random =Math.floor(Math.random()*100)+1;


//Q3 print hello in 2sinterval and stop at 10s

// let id= setInterval(()=>{
//     console.log("hello");
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("clear");
// },10000);

//Q4 give the output 

let length=4;
function callback(){
    console.log(this.length);
}

const object={
    length:5,
    method(callback){
        callback();
    },
};

object.method(callback,1,2);






    

