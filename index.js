let greet = "Hello world";
console.log(greet);

// function calculateAge(birthyear){
//     let currentTime = new Date();
//     let currentYear = currentTime.getFullYear();
//     let age = currentYear - birthyear;
//     if(birthyear>currentYear){
//         console.log("Birthyear is not greater than "+currentYear);
//     }else{
//         console.log(`Your Age is ${age}`);
//     }

// }
// calculateAge(2025);

// function twice(num, modifier){
//     let result = modifier(num)*2;
//     console.log(result);
// }
// twice(4,function(num){
//     return num -1;
// });

// let names = ['Mgmg','Aungaung','Kyawkyaw'];

// names = names.map((name)=>{
//     return `Mr. ${name}`;
// });

// console.log(names);

// let nums = [1,2,3,4,5,6,7,8,9];
// let filterNum = nums.filter((num)=>{
//     return num%3===0;
// });
// console.log(filterNum);

// let nums=[1,2,3,4,5,6,7];
// let result = nums.reduce((prev,current)=>{
//     return prev+current;
// });
// console.log(result);

// let person = {
//     name:'joe',
//     age:34,
//     eat:function(){
//         console.log('person is eating');
//     },
//     drink(){
//         console.log('person is drinking');
//     }
// };
// console.log(person.name);
// person.eat();
// person.drink();

//this => is pointing to
// method => method's object
// regular function => window
// function test(){
//     console.log(this);
// }
// test();
// arrow function => parent's this (lexical scoping)

//object spread and object destructuring , property shorthand
//object spread
// let obj1 = {
//     name:'hlaing',
//     age:20
// };
// let obj2 = {
//     hairColor:'Black'
// };

// let obj3 = {...obj1,...obj2};
// console.log(obj3);

//object destructuring
// let {name,age} = {
//     name:'Nay',
//     age : 22,
// }
// console.log(name,age);

// let people = [
//     {name:'Mg Mg', age:23, gender:'male'},
//     {name:'Aung Aung', age:34, gender:'male'},
//     {name:'Su Su', age:16, gender:'female'}
// ];

// let result = people.map((person)=>{
//     return person.name;
// });
// console.log(result);

// let searchKey = prompt('search person:');

// let filterresult = people.filter((person)=>{
//     return person.name.includes(searchKey);
// });
// console.log(filterresult);

// let people = [
//     {name:'Mg Mg', age:23},
//     {name:'Aung Aung', age:34, gender:'m'},
//     {name:'Su Su', age:16, gender:'f'}
// ];
// people = people.map((person)=>{
//     if(person.gender==='m')
//         person.gender='male'
//     else if(person.gender==='f')
//         person.gender='female'
//     else
//         person.gender='unknown'
//     return person
// })
// console.log(people);

// people = people.map((person)=>{
//     switch (person.gender) {
//         case 'm':
//             person.gender='male'
//             break;
//         case 'f':
//             person.gender='female'
//             break;
//         default:
//             person.gender='unknown'
//             break;
//     }
//     return person;
// })
// console.log(people);

// let people = ["mgmg", "aungaung", "susu"];
// let x = 0;
// while (x < people.length) {
//   console.log(people[x]);
//   x++;
// }

// for (person of people) {
//   console.log(person);
// }
// let animals = {
//   name: "pig",
//   type: "milk",
// };
// for (key in animals) {
//   console.log(animals[key]);
// }

// for (key in people) {
//   console.log(`key is ${key}, value is ${people[key]}`);
// }
// //create class
// class Calculator {
//   static PI = 3.142;
//   plus(n1, n2) {
//     return n1 + n2;
//   }
//   minus(n1, n2) {
//     return n1 - n2;
//   }
//   divide(n1, n2) {
//     return n1 / n2;
//   }
//   multiply(n1, n2) {
//     return n1 * n2;
//   }
//   remainer(n1, n2) {
//     return n1 % n2;
//   }
// }
// //call create new object by new keyword for class
// let calculate = new Calculator(); //is not do this state for static property console.log(Calculator.PI)
// console.log(calculate);
// console.log(calculate.plus(2, 3));

// //static method
// class Calculator2 {
//   Name = "Casio";
//   PI = 3.142;
//   area(r) {
//     return this.PI * r ** 2;
//   }
//   volume(r, h) {
//     return this.area(r) * h;
//   }
//   static info() {
//     console.log(`I am ${this.Name} calculator`); // not working this keyword because static method

//     let cal = new Calculator2();
//     console.log(`I am ${cal.Name} calculator`); // working this keyword by using new object in static method
//   }
// }
// Calculator2.info();
// let cal2 = new Calculator2();
// console.log(cal2.area(2));

//constructor method => is a method but this is normal method

//OOP (access modifier) (static public private protected) //protect not has javascript
// class Car1 {
//   Name = "marcedes";
//   #hp = 300; // private
//   getHorsePower() {
//     console.log(`Horse power is ${this.#hp}`);
//   }
// }

// let car = new Car1();
// car.Name = "Toyota";
// car.getHorsePower();

//OOP (inheritance)
// class Animal {
//   constructor(name) {
//     this.Name = name;
//   }
//   run() {
//     console.log(`${this.Name} is running`);
//   }
// }
// class Dog extends Animal {
//   bark() {
//     console.log(`${this.Name} is woof woof`);
//   }
// }

// let dog = new Dog("Aung Nak");
// dog.run();
// dog.bark();

//Asynchronous javascript // javascript is done , one job by one job
//sync way
// console.log(1);
// console.log(2);
//async way
// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log(3);
// }, 3000);
// console.log(4);

//promise
// function asynchronous() {
//   return new Promise((resolve, reject) => {
//     let result = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       result += i;
//     }
//     if (result) {
//       resolve(result);
//     } else {
//       console.log("some error");
//     }
//   });
// }

// console.log("work");
// asynchronous()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log("more work");

//Fetch Api
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     response
//       .json()
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//or
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//async await
// async function fetchTodo() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchTodo();

// function test() {
//   console.log("hi");
// }

// node js intro (Node module System)
//const add = require('./math.js')

const { add, minus, PI } = require("./math.js");
console.log(add(3, 4), minus(5, 3));

//ES module System