const isLogged = true;
let number= Math.random()
let logged= new Promise((resolve, reject) => {
       if(isLogged==true){
          resolve(number);
       }else{
        reject(new Error("Not logged"));
       }   
})

let secondPromise= new Promise((resolve, reject) => {
    if(number>0.5){
        resolve(console.log({name: "John", age: 24}))
    }else{
        reject(new Error("Error"));
    }
})
logged.then(secondPromise)
.catch((err)=>console.error(err))
.finally(() => console.log("Complete"));
