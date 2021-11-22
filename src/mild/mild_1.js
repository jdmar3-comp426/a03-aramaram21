/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    return `${a} + ${b} = ${a+b}`
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    const numarr = []; 
    for (let i = startNumber; i < endNumber; i++) {
        numarr.push(i);
    }
    numarr.push(endNumber);
    return numarr;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    let mn = Math.min(...numbers);
    let mx = Math.max(...numbers);
    const rt = {max: mx, min: mn};
    return rt;
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    const arr = [];
    const countarr = [];
    for (let i = 0; i < array.length, i++){
        let included = 0;
        for(let j = 0; j < arr.length, j++){
            if(array[i] === arr[j]){
                included++:
            }
        }
        if(included > 0){
            arr.push(array[i]);
        }
    }
    for (let i = 0; i < arr.length, i++){
        let count = 0;
        for(let j = 0; j < array.length; j++){
            if(array[j] === arr[i]){
                count++;
            }
        }
        numarr.push(count);
    }
    var rt = {};
    for (let i = 0; i < arr.length; i++){
        rt[i] = {arr[i]: countarr[i]};
    }
    return rt;
}
