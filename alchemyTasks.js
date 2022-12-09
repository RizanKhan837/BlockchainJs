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

/* Given an array of pizza orders, return the total number of pizzas ordered.

The orders are an array of objects, each with pizzas key inside: */

/* const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
]; */

/* function numberOfPizzas(orders) {
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
        total += orders[i].pizzas;
    }
    return total;
} */
