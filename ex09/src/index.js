const users = [
    { id:1, firstName: "John", lastName: "Doe", age: 24, gender: "male" },
    { id:2, firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { id:3, firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { id:4, firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];
function getUsers() {
    var output = "";
    for (let i = 0; i < users.length; i++) {
        output += `${users[i].id} - ${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}\n`;
    }
    return output;
}
function findUserById() {
    
}
console.log(getUsers());
module.exports = findUserById;