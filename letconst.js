////////////////////// const ///////////////////////////////
// "const" is permanent relation. you can't change a set object inside const variable once you insert it...

const partner = "Fraustation";
console.log(partner);

// I can modify value of an array item, and also can add, or remove items from const array.

const number = [12, 88];
number [0] = 87;    // I can modify value of an array item, but can't change a whole set array.
number.push(89);    // So we also can-
number.unshift(86); // add, or remove-
number.pop();       // items from-
number.shift();     // const array.
console.log(number);

////////////////////// let /////////////////////////////////

// let variable is change able.

let patient1 = "Nuru Kaka";
patient1 = "Afsar Mistri";  // "Nuru kaka was replaced by Afsar Mistri inside patient1 Variable"
console.log(patient1);

// let variable is leakable.

let sum = 0;
for (var i = 0; i < 10; i++) {
    sum = sum + 1;
}
console.log(i);     // we called console.log from outside of for loop. cuz we used 'var'. It should output cuz 'var' is leakable. if we used 'let'. it would have not gave output. cuz 'let' is not leakable.

////////////////////////// Complete //////////////////////////