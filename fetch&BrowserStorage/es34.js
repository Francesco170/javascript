function printAsyncName(callback, name,){
   let hello= setInterval(callback,1000);
   setTimeout(() => clearInterval(hello),1000 * 1);
    name="francesco";
    setTimeout(function(){ 
   console.log(name);
    },2000) ;
}
printAsyncName(()=> console.log("hello"));