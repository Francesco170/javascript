function nicknameMap(persons) {
 return persons.forEach((person) => console.log(nickNames))
}
const nickNames = [
  { nickName: "<Paul>-<16>"},
  { nickName: "<George>-<17>" },
  { nickName: "<Lucas>-<21>" },
  { nickName: "<Marco>-<32>" },
  { nickName: "<Peter>-<18>" },
  { nickName: "<Carl>-<13>" },
  { nickName: "<Simon>-<24>" },
  { nickName: "<Mark>-<15>" },
  { nickName: "<Sandra>-<34>" },
  { nickName: "<Alice>-<28>" }
];
  const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];
  
  nicknameMap(persons);
