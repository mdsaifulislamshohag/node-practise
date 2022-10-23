/*
const person = {
    name: "Max",
    age: 99
};

const printName = (personData) => {
    console.log(personData.name);
}
printName(person);
*/


//........Destructureing....

const person = {
    name: "Max",
    age: 99
}

const printName = ({ name }) => {
    console.log(name);
}
printName(person);

const { name, age } = person;
console.log(name, age);
//............

const hobbies = ['cooking', 'sports'];

const [h1, h2] = hobbies;
//const [...arg] = hobbies;

console.log(h1, h2);