var name = "saiful";
var age = 26;
var hasHobbies = true;

const summaerizeSaifulsHobbies = (userName, userAge, userHobbies) => {
    return ('Name is ' + userName + ' , age is ' + userAge + ' and he has hobbies :' + userHobbies);
}

console.log(summaerizeSaifulsHobbies(name, age, hasHobbies));



const add = (a, b) => {
    return a + b;
}

console.log(add(12, 12));


const sub = (a, b) => a - b + ' hello ' + true;

console.log(sub(12, 12));



const mul = (a, b) => 'result is : ' +
    a * b + ' .';

console.log(mul(12, 12));



const addOne = (a) => a + 1;

console.log(addOne(100));