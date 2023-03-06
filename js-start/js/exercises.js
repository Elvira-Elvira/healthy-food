// let x, y;

// function multiplication1(x, y) {
//     let m = x * y;
//     console.log(m)
// }

// multiplication1(12, 10);

// const user = {
//     name: 'Elya',
//     surname: "surname",
//     age: "age",
// };

// user.name = 'Vasya'

// console.log(user.name);

// function showInformation(name, surname, age) {
//     return {
//         name: name,
//         surname: surname,
//         age: age,
//     };
// }

// let userInfo = showInformation('Эльвира', "Иллензеер", 26);
// console.log(userInfo);

let user = {};

user.name = 'John';

user.surname = 'Smith';

user.name = 'Pete';

delete user.surname;

console.log(user.surname);