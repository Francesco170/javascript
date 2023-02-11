function sum(...rest) {
    let total = 0;
    for (const arg of rest) {
      total += arg;
    }
    return total;
}

console.log(sum(1,1,1,1,1,1));