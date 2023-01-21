function multiplyByTwo(value) {
  let number = 2;
  function inner(value){
   let multiply = number * value;
   return multiply;
  }
  return inner;
}

console.log(multiplyByTwo()(6))
