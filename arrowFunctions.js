// const sum = (a, b) =>  a + b;
// const calculator = fn => (a, b) => fn(a, b)


// console.log(calculator(sum)(2, 5));

// //assim n funciona pq o this não é injetado
// const person = {
//     name: "james gosling",
//     city: "alberta",
//     year: 1955,
//     getAge: () => (new Date()).getFullYear() - this.year
// }

// console.log(person);
// console.log(person.getAge());


// const sum2 = () => {
//     let total = 0;
//     for (let argument in arguments){
//         total+= arguments[argument];
//     }

//     return total;
// }

// console.log(sum2(1,2,3,4,5,6,7,8));

const createPerson = (name, city, year) => ({name, city, year});

const person = createPerson("Alan key", "spingfield", 1940);
console.log(person);