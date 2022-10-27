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
    for(var x=0;xs.length>x;x++){
var count;
for(var y=0;ys.length>y;y++){
if(ys[y]==xs[x]){
list.push(xs[x]);
}
}

    }

return list;
};
