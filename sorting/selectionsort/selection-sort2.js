/**
 * Selection Sort (Different Approach)
 */

function findLargestValue(list){
    let lrg = list[0];
    let indexofLarge = 0;

    for(let i=1; i<=list.length; i++) {
        if(lrg<list[i]) {
            lrg=list[i];
            indexofLarge=i;
        }
    }

    return indexofLarge;
}

function selectionSort(list) {
    let newList = [];
    let lrgItem;

    while(list.length) {
        lrgItem = findLargestValue(list);
        newList.push(list[lrgItem]);
        list.splice(lrgItem,1);
    }

    return newList.reverse();
}

module.exports = selectionSort;