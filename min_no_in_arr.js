function GetMin(nums){
    let ans = nums.reduce((min,el)=>{
        if(el>min){
            return min;
        }
            else{
                return el;
            }
        
    });
    return min;

}
let nums=[2,4,1,5,6];
console.log(min);