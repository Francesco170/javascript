// const sum = function (a, b) {
//   return a + b;
// }

// const subtract = function (a, b) {
//   return a - b;
// }

// const multiply = function (a, b) {
//   return a * b;
// }

// const divide = function (a, b) {
//   return a / b;
// }

// const log = function (value) {
//   console.log(value);
// }

const sum = (a,b) => {
  return a + b;
}
const subtract=(c,d) => {
  return c - d;
}
const multiply=(e,f)=> {
  return e * f;
}
const divide=( g , h) => {
  return g / h;
}
const log = (i) => {
  return console.log(i);
}
 const operation=(num) => {
    return num=  divide(subtract( multiply(sum(2,4),sum(5,2)),2),5) ;
 }
console.log(operation());


