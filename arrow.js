function doubleIt(num) {
    return num * 2;
}
const result = doubleIt(5);
console.log(result);

// there is other way
const doubleIt2 = function(num){
    return num * 2;
}

const result1 = doubleIt2(5);
console.log(result1);

// with es6, it's lot easier
const doubleIt3 = num => num * 2;
const result3 = doubleIt3(5);
console.log(result3);

// for multiple parameter use first bracket and comma inside
const add = (x, y) => x + y;
const result4 = add(5, 5);
console.log(result4);

// for empty parameter
const giveMe = () => 10;
const result5 = giveMe();
console.log(result5);

// for multiple work inside a function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum - diff;
    return result; 
}
const result6 = doMath(5, 5);
console.log(result6);

////////////////////////// Complete //////////////////////////