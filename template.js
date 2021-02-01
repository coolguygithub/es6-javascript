const firstName = "Justin";
const lastName = "Timberlake";
// If i want to add this two variable, old way will be,
// const fullName = firstName + " " + lastName + " is a good singer";
// console.log(fullName);                              output = Justin Timberlake is a good singer

// Es6 way will be,

const fullName = `${firstName} ${lastName} is a good singer`
console.log(fullName);                                 // output = Justin Timberlake is a good singer

// we also can add number using this way
const sum = `${20+30}`
console.log(sum);

// before we had to use [\n] to formate a text
// [``] this way it will be lot easier
const text = 
`Life is Beautiful
And I am greatfull`
console.log(text);

////////////////////////// Complete //////////////////////////