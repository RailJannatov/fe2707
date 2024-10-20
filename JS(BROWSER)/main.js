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

let user = {
  _name: "John",
  _surname: "Smith",
  _group: "fe201",

  //   get name() {
  //     return this._name;
  //   },

  //   set name(value) {
  //     this._name = value;
  //   },
  get surname() {
    this._surname;
  },
  set surname(value) {
    if (value > 5) {
      this._surname = value;
    } else {
      alert("salamm");
    }
  },
  get group() {
    return this._group;
  },
  set group(value) {
    console.log(value);
    if (value.length < 4) {
      console.log("herere");
    } else {
      [this._group] = value;
    }
  },
};
console.log(user);
user.group = "FE201";
console.log(user._group);
