let promise = new Promise((resolve, reject) => {
    const number = 10;
    if(number>10){
        resolve(number);
    }else{
        reject(number);
    }
})


promise.then((val)=> console.log(val))
promise.catch((err)=> console.error(err))
