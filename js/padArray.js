const pad = (array, minSize, value=null) => {
// function pad(array, minSize, value = null) {
    // establish new array from arguments being passed to function
    let newArr = array;
    // while the array is shorter than the desired length, add defined value to end of array
    while (newArr.length < minSize) {
        newArr.push(value);
    }
    // return array;
    return newArr;
}
console.log(pad([1,2,3], 5));
console.log(pad([1,2,3], 5, "apple"));