const person = {
  name: "Fatin",
  age: 31,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

person.greet();
