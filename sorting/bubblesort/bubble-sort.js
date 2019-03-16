/**
 * Buble Sort
 */

function bubbleSort(arr){
    var len = arr.length-1;
    var isSorted=false;
    while(!isSorted) {
        isSorted=true;
        for(var i=0;i<len;i++) {
            if(arr[i]>arr[i+1]) {
                swap(arr,i,i+1);
                isSorted=false;
            }        
        }
        len--;
    }
    return arr;
}

function swap(arr,i ,j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


module.exports = bubbleSort;