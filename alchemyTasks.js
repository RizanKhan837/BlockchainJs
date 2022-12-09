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