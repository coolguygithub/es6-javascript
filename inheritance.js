// class Child {
//     constructor(name){
//         this.name = name;
//     }
// }
// const baby = new Child("Arnold");
// const baby2 = new Child("Tom");
// console.log(baby);
// console.log(baby2);

// If I want to add a class to another class. I have to extends that class to desired class Name.
// class Parent {
//     constructor(name){
//         this.fatherName = "Shwerznegger"
//     }
// }
// class Child extends Parent{
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }
// const baby = new Child("Arnold");
// const baby2 = new Child("Tom");
// console.log(baby);
// console.log(baby2);

// There is a concept called {object oriented programming} where you use class to design a program. Inheritance is a Important Topic there.
// I can write function inside an class. but I don't need to write "function" before functionName.
class Parent {
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2.getFullName());

////////////////////////// Complete //////////////////////////