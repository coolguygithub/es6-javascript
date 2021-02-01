// class name starts with Uppercase

// class Students {};

// const student1 = new Student();
// const student2 = new Student();
// console.log(student1, student2);


// we got two student element by using Class. we can use property inside class too. we have to use a method name [ constructor(){} ] for define property inside class.
// 1. we have to write [ constructor(){} ],
// 2. for writing any property we have to write (this.) before every property. (there will detailed discussion about this in advance javascript.)
// class Students {
//     constructor(){
//         this.id = 1;
//         this.name = "Mahi";
//     }
// }
// const student1 = new Students();
// const student2 = new Students();
// console.log(student1, student2);


// But we wanted different value for different student. so we can give parameter to the constructor, preety much like function.
class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.result = "passed";             // If you want to give a default value, just don't use parameter, give a direct value and element will get that.
    }
}
const student1 = new Student(1, "Pakhi");
const student2 = new Student(2, "Ayna");
console.log(student1, student2);
console.log(student1.id, student2.name);    // we can access to a definite property by doing this.
// Benefit of using [Class] is, you can have as much as object you want using same structure and same amount of property.

////////////////////////// Complete //////////////////////////