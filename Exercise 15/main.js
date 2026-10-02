//  For in and For of loops

const Students = [
    {
        name: "John",
        age: 20,
        city: "New York"
    },
    {
        name: "Jane",
        age: 22,
        city: "Los Angeles"
    },
    {
        name: "Mike",
        age: 21,
        city: "Chicago"
    },
]
let counter = 1;

for (let student of Students) {
    console.log(`===Student ${counter}===`);
    for (let key in student) {
        console.log(`${key}: ${student[key]}`);
    }
    console.log(`----------------------`);
    counter++;
}