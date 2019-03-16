/**
 * Merge Sort
 */

function mergeSort(arr) {
    var len = arr.length;

    if(len<2) return arr;

    var mid = Math.floor(len/2),
        left = arr.slice(0,mid),
        right = arr.slice(mid);
    
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right) {
    var results = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    
    while(l<lLen && r<rLen) {
        if(left[l]<right[r]) {
            results.push(left[l++]);
        } else {
            results.push(right[r++]);
        }
    }

    return results.concat(left.slice(l)).concat(right.slice(r));
}

module.exports = mergeSort;