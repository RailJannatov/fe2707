// let promise = new Promise(function (resolve, reject) {
//   resolve(1);
//   resolve(2);
//   reject(2);
//   //   setTimeout(() => reject(new Error("error")), 3000);
// });

// promise.then(
//   (resolve) => alert(resolve),
//   (reject) => alert(reject)
// );

// const a = { a: 1, b: 2 };

// const c = a;

// c.d = "d";
// console.log(a);

//STACK a = 124,24214515
//HEAP { a: 1, b: 2 ,test:'test'}

// const test = "test";

// a.test = "test";

// const c = a;

//STACK c = 124,24214515

// console.log(c);

// console.log(a === c); //false

// let user = {
//   _name: "John",
//   _surname: "Smith",
//   _group: "fe201",

//   //   get name() {
//   //     return this._name;
//   //   },

//   //   set name(value) {
//   //     this._name = value;
//   //   },
//   get surname() {
//     this._surname;
//   },
//   set surname(value) {
//     if (value > 5) {
//       this._surname = value;
//     } else {
//       alert("salamm");
//     }
//   },
//   get group() {
//     return this._group;
//   },
//   set group(value) {
//     console.log(value);
//     if (value.length < 4) {
//       console.log("herere");
//     } else {
//       [this._group] = value;
//     }
//   },
// };

// console.log(user);
// user.group = "FE201";
// console.log(user._group);

// let person = {
//   haveCar: true,
// };

// console.log(person.test);

let b = 0;
let c = [];
// console.log(!!c);

let name = "" || "salamm";

let age = "" ?? 100;

// let babyAge = 0 || 100;

// if (babyAge !== null || babyAge !== undefined) {
//   babyAge = 0;
// }

// let babyAge = (1 && 0) ?? 200;

// let anotherAge = ([] || "") ?? 4;

// console.log(babyAge);
// console.log(anotherAge);

// console.log(name);
// console.log(age);

// function getFullName() {
//   let sum = a * b;
//   debugger;
//   // console.log({ a });
//   // console.log(b);
//   // console.log(sum);
//   return sum;
// }

// getFullName();
// let a = "";

let a = 10;

// if (a) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// a === 2
//   ? console.log("false")
//   : a === 4
//   ? console.log("false")
//   : a === 8
//   ? onsole.log("false")
//   : console.log("true");
// if (a === 2) {
//   console.log("false");
// }
