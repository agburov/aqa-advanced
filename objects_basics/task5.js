// Create an array of user objects
const users = [
    {
        name: "Alex Brown",
        email: "alex@example.com",
        age: 28,
        role: "Developer"
    },
    {
        name: "Emma Davis",
        email: "emma@example.com",
        age: 32,
        role: "Designer"
    },
    {
        name: "Michael Johnson",
        email: "michael@example.com",
        age: 25,
        role: "QA Engineer"
    }
];

for (const { name, email, age, role } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}, Role: ${role}`);
    console.log("-".repeat(80));
}
