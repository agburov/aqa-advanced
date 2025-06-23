const person = {
    firstName: "James",
    lastName: "Wilson",
    age: 30
};

person.email = "james.wilson@example.com";

delete person.age;

console.log(person);
