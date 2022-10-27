// Q3: Count the number of time a word appear in an array
/**
 *
 * @param {string[]} arr | example: ["a", "b", "c", "a"]
 * @return an object with the words as the key, and the count as the value
 *
 * @example
 * countCharacter(["a", "b", "c", "a"]) should return
 * { "a": 2, "b": 1, "c": 1 }
 *
 * @topics Variables, for-loop, if-else, array, object, basic arithmetic
 */
module.exports.countCharacter = function (arr) {

    var list=[];
    var num=[];
for(var i=0 ;arr.length>i;i++){
   
var count=0;
    for(var x=0;arr.length>x;x++){
        if(arr[x]==arr[i]){
count++;
        }
    }
list.push(arr[i]);
num.push(count);



}
var newObj = {};
for (var y = 0; y < list.length; y++) {
  newObj[list[y]] = num[y];
}
return newObj;

}