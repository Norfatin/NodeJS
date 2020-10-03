// var name = "Fatin";
// var age = 31;
// var hasHobbies = true;

const name = "Fatin";
let age = 31;
const hasHobbies = true;

age = 29;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies " +
    userHasHobby
  );
};

console.log(summarizeUser(name, age, hasHobbies));

// const add = (a, b) => {
//   return (a = b);
// };

const add = (a, b) => a + b;
console.log(add(1, 2));

const addOne = (a) => a + 1;
console.log(addOne(1));

const addRandom = () => 1 + 2;
console.log(addRandom());
