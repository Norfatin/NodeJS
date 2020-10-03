const person = {
  name: "Fatin",
  age: 31,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const hobbies = ["Running", "Games"];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
console.log(hobbies.map((hobby) => "Hobby: " + hobby));
console.log(hobbies);
