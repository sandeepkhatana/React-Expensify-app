// // 
// // Object destructuring
// // 
// // 

// // // const person = {
// // //     name: "sandeep",
// // //     age: 26,
// // //     location: {
// // //         city: "sohna",
// // //         temp: 92
// // //     }
// // // }

// // // const {name: firstName =annonmous, age} = person;
// // // const {city, temp} = person.location;

// // // console.log(`hiii my name is ${firstName} and im ${age} old`);

// // // console.log(`my city is ${city} temprature here is ${temp}`);

// // const book = {
// //     title: 'Ego is the Enemy',
// //     auther: 'Ryan Holiday',
// //     publisher: {
// //         name: 'Penguin'
// //     }
// // };



// // const {name: publisherName = 'Self-Published'} = book.publisher;

// // console.log(publisherName);



// // 
// // array destructuring
// // 

// const address = [220, 'Lala Kherli', 'Sohna','Haryana', 122103]

// const [, village, , state = "India"] = address;

// console.log(`my Adress is ${village} which is in ${state}`);



const item = ['Coffee (hot)', '$2.0', '$2.5', '$2.75']

const [hotCoffee, ,med] = item;

console.log(`A medium ${hotCoffee} cost ${med}`);

