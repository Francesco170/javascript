function printName(){
    let helloName="Hello John";
    function inner(){
        setTimeout (()=> {

            return  console.log(helloName);
        },1000)
    }
   return inner;
}
printName()();