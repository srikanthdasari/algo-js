/**
 * Insertion Sort
 */

function insertionSort(arr) {
    var i, len = arr.length, key, j;

    for(i=1;i<len;i++) {
        key=arr[i];
        j=i;

        while(j>0 && arr[j-1]>key) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j]=key;
    }
    return arr;
}

module.exports = insertionSort;