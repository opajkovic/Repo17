const users = [
    { firstName: "John", lastName: "Doe", age: 24, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];
function getUsers() {
    var output = "";
    for (let i = 0; i < users.length; i++) {
        output += `${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}\n`;
    }
    return output;
}
function findUser(lastName, gender) {
    try {
        var user;
        // var user = _.find(users,{'lastName':lastName,'gender':gender});
        var iFundUser = `${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
    } catch(error) {
        return `Cannot read property ${firstName} of undefined`;
    }
}

console.log(getUsers());
findUser();
module.exports = findUser;