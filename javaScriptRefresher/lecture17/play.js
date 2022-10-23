const person = {
    name: "Max",
    age: 99,
    great: () => {

        console.log('Hi , I am ' + person.name);

    }
};

person.great();


const lazyPerson = {
    name: "saiful",
    age: 26,
    notGreat: () => {
        console.log('Hi , I am ' + lazyPerson.name);
    }
}

lazyPerson.notGreat();



const person3 = {
    name: "mr. x",
    age: 99,
    hasHobbies: false,

    willDie: () => {
        console.log('Hi, I am ' + person3.name + " ,now I am too older and age is " + person3.age + " and I would be died .");
    }

}

person3.willDie();

/*
const hobbies = ['sports', 'cooking', 'sleeping', 'singing', 420, false]

for (let hobby of hobbies) {
    console.log(hobby);
}
*/

const hobbies = ['cooking', 'sleeping']


const a = hobbies.map(h => 'hobby :' + h + '!!');

console.log(a);
console.log(hobbies);