/**
 *
 * @param {int []} arr: Non-empty array to be rotated
 * @param {int} n: Number of times to rotate the array, >= 1 && < arr.length * 10
 *
 * @return an array with arr rotated to the left n times.
 *
 * @example
 *
 * arr = [1,2,3]
 * n = 1
 * result = [2,3,1]
 *
 * @example
 *
 * arr =  [1,2,3,4,5,6,7,8,9]
 * n = 4
 * result = [5,6,7,8,9,1,2,3,4]
 *
 * @topics for-loop, array, problem solving, modulo/remainder
 */
 module.exports.rotation = function rotation(arr, n) {

  if( n >= 1 && n < arr.length*10){
  for(var x=1;n>=x;x++){
      let s = arr.shift();
      arr.push(s);
  }
  }
  return arr;
};
