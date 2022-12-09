/* Write a function that will take an array of numbers and return a new array that only contains unique numbers. */

/* function unique(array) {
    let arr = [];
    arr.push(array[0]);

    for(let i=0; i < array.length; i++){
        if(arr.indexOf(array[i]) >= 0){
            continue;
        }else{
            arr.push(array[i]);
        }
    }
    return arr;
} */

/* Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array. */

/* function removeOccurrences(array, num) {
    for(let i= array.length - 1; i>=0; i--){
        if(array[i] == num){
            array.splice(i, 1);
        }
    }
} */