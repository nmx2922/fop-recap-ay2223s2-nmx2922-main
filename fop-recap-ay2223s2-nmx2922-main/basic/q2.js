// Q2: Given an array through the arguments,
// find the sum of the biggest and smallest number
/**
 *
 * @param {int []} arr
 * @return sum of biggest and smallest number in arr
 *
 * @example
 * sumBiggestAndSmallest([3,5,1,3,4]) should return 6
 * which is the sum of 5 (biggest) and 1 (smallest)
 *
 * @topics Variables, loops, array
 */
module.exports.sumBiggestAndSmallest = function (arr) {
function getSmall(arr){
    let s=0;
for(let x=0;arr.length>x;x++){
    
    if(arr[x]<s){
        s=arr[x]
    }
    return s;
}
}

function getBig(arr){
let b=0;
for(let x=0;arr.length>x;x++){
    
    if(arr[x]>b){
        b=arr[x]
    }
    return b;
}

}

return getBig(arr)+getSmall(arr);
};
