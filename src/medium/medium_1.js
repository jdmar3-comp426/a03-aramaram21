import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
   let sm = 0; 
   for( let i = 0; i < array.length; i++){
       sm += array[i];
   }
   return sm;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    array.sort(function(a,b){return a - b});
    let i = array.length;
    if(i % 2 === 0){
        let x = i / 2;
        let y = (array[x] + array[x-1])/2;
        return y;
    }
    else{
        let x = (i/2) - 0.5;
        return array[x];
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    const stat = {};
    array.sort(function(a,b){return a - b});
    let sm = array.reduce((a,b) => a+b, 0);
    let mn = sm/array.length;
    stat["length"] = array.length;
    stat["sum"] = sm;
    stat["mean"] = mn;
    stat["median"] = getMedian(array);
    stat["min"] = array[0];
    stat["max"] = array[array.length - 1];
    stat["variance"] = variance(array, mn);
    stat["standard_deviation"] = Math.sqrt(variance(array,mn));
    return stat;

    
}

