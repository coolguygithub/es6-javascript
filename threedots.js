// if I had to add arrays, old way was
const ages = [12, 13, 14, 15];
const ages2 = [16, 17, 18];
const ages3 = [19, 20];
const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);

// In Es6 you just have to add dots
const age = [12, 13, 14, 15];
const age2 = [16, 17, 18];
const age3 = [19, 20];
const allAge = [...age,...age2,...age3]
console.log(allAge);

// for getting max value, we used to wrote
const business = 650;
const minister = 450;
const shochib = 250;
const maximum = Math.max(business, minister, shochib);
console.log(maximum);

// but what if, it was inside an array
const takaPoisha = [650, 450, 250]
// If i use Math.max{} here, it will show me NaN
// const maximum2 = Math.max(takaPoisha);

// let's use three dots(...) and see what happens
const maximum3 = Math.max(...takaPoisha);
console.log(maximum3);

////////////////////////// Complete //////////////////////////