const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
 person2 ["firstName"]= "Simon";

// perché abbiamo fatto un passaggio per riferimento quindi passiamo direttamente il riferimento a dove il valore originale è contenuto
// e dunque le operazioni avranno effetto su esso

console.log(person1);
console.log(person2);
