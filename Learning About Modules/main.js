

console.log('learning modules...')

// ------------------------------------------------
// Lesson 1: Simple way of importing named module
// import { sum , sub } from './calc.js';
// console.log(sum(2,3))

// Lesson 2: What if you have multiple modules with named conflict
// import {sum as myadd } from './calc.js';
// console.log(myadd(2,3));

// Lesson 3(alais): What if you have a lot of things to import
// import * as calc from './calc.js'
// console.log(calc.sum(2,3))

// Lesson 4(Combined export): If we need two modules
// import * as combine from './combine.js'
// console.log(combine.calc.sum(2,3))
// console.log(combine.myname())

// Lesson 5(Dynamic import): 

// if (true) {
//     const {sayHi, sayHola} = await import('./greetings.js') 

//     sayHi();
//     sayHola();
// }

// const promises = Promise.all(
//     [
//         await import('./greetings.js'), 
//         await import('./calc.js')
//     ]
// )

// console.log(promises)

// promises.then(result => {
//     console.log(result); 
//     console.log(result[0].sayHi());
//     console.log(result[1].sum(2,3));
// })




// ---------------------------------------------
// Lesson 1: Simple way of importing default module
// import { default as anyname } from './whoami.js'
// console.log(anyname())

// Lesson 2: another way of importing default
// import anyname from './whoami.js'
// console.log(anyname())


// ------------------------Practice------
import { customStyle, greeting } from "./cal.js"

console.log(customStyle)
console.log(greeting)

