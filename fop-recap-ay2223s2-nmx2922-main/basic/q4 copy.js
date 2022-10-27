// Q4: Find duplicates in 2 array
/**
 *
 * @param {int []} xs |
 * @param {int []} ys
 * @return array of integer that exists in both xs and ys
 *
 * @example
 * findDuplicate([1,2,3], [2,3,4]) should return [2,3]
 *
 * @topics for-loop, if-else, array, object#
 * # possible to solve without object
 */
module.exports.findDuplicate = function (xs, ys) {


var list=[];

xs.sort();
var longestArr=yx.length;
if (xs.length>ys.length){
    longestArr=xs.length;
}
var a=0;
for(var x=0;longestArr>x;x++){
if(xs[x]==ys[a]){
    list.push(xs[x]);
}
if(x==longestArr-1){
    a++;
    x=0
}
}

return list;
};
