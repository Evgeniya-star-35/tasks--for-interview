{
  console.log(i + j);
  var i = 1;
  var j = 2;
}
// answer NaN
const f = (...args) => {
  console.log(args.shift());
};
f(1, 2, 3);
// answer 1
let a = 10;
let b = new Number(10);
console.log(a == b);
console.log(a === b);
// true false
const number = 23.6565;
console.log(number | 0);
// answer 23
const obj = {
  app: "Coders",
};
console.log(obj + 2);
// answer [object Object]2

const user = { name: "John", age: 0 };
user.age ||= 26;
console.log(user.age);
// answer 26

let app = { name: "Lydia" };
const apps = [app];
app = null;
console.log(apps);
// answer [{name: "Lydia"}]

const num = 23.6565;
console.log(num | 0);
// answer 23
