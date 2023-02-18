function repeatHello(callback){
let hello= setInterval(callback, 1000);
setTimeout(() => clearInterval(hello),1000 * 5);
}




repeatHello(()=> console.log("hello"));