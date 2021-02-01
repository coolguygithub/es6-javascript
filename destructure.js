const person = {name: "Bittu Wiliam", age: 17, job: "fireman", gfName: "Emma", address: "Italy", phone: "0172545464", friends: ["Tom","Hanks","Deepjol"]}
// if I want to find an object, we will code
console.log(person.address);

// there is other way to call
// const address = person.address;
// console.log(address);

// another easier way is
const { address } = person;
console.log(address);

// let's try with arrays
const friends = ['Biplob', 'Nahid', 'bakar', 'Noman', 'Shihab', 'MGM'];
// const [first, second] = friends;
// console.log(first, second);
// If I want to show all of them, I have to add [...threedots]
const [first, second, ...restFriends] = friends;
console.log(first, second, ...restFriends);
// with threedots it get rest undefined items

// Example of complex object

const complexObject = {
    name : 'shihab',
    info : {
        address : 'Paikpara',
        leader : 'boro vai',
    }
}
const {leader} = complexObject.info;
console.log(leader);

////////////////////////// Complete //////////////////////////