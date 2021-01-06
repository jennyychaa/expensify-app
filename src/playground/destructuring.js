/**
 * Object Destructuring
 */
// const person = {
//   name: 'Jenny',
//   age: 30,
//   location: {
//     city: 'Washington, DC',
//     temp: 30
//   }
// };

// // Example
// // const name = person.name;
// // const age = person.age;
// const { name = 'No Name', age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// Array Destructuring
//
// const address = ['4 I St SE', 'Washington', 'DC', '20003'];
// const [, city, state] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [salesItem, , priceMd] = item;
console.log(`A medium ${salesItem} costs ${priceMd}`);