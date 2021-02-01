function add(num1, num2){
    return num1 + num2;
}
// const total = add(15, 20);               output will be = 35;
// but if there was one number then
// const total1 = add(15);                  output will be = NaN;
// console.log(total1);

// what I have to do is,,

// function add(num1, num2){
//     num2 = num2 || 0;
//     return num1 + num2;
// }
// const total1 = add(15);
// console.log(total1);                     output will be = 15;

// But with Es6, it can be lot Easier,,

function add(num1, num2 = 10) {
    return num1 + num2;
}
const total2 = add(15);
console.log(total2);

// But if give value in the call Function , like,
// [const total2 = add(15, 20);]
// then (num2 = 10) will get ignored and 15 and 20 will get added, cuz that's just a backup...

///////////////////// quiz solution //////////////////////////

function creatUser(name, age = 18) {
    const user = {};
    user.name = name;
    user.age = age;
    return user;
}
console.log(creatUser());

////////////////////////// Complete //////////////////////////