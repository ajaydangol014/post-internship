"use strict";
function filterByGenderMatch(users, gender) {
    return users.filter((user) => user.gender == gender);
}
const users = [
    {
        id: 1,
        name: "Ajay",
        gender: "Male",
        age: 30,
        email: "same@example.com",
        isRetired: false,
    },
    {
        id: 2,
        name: "Sam",
        gender: "Female",
        age: 25,
        email: "same@example.com",
        isRetired: false,
    },
    {
        id: 3,
        name: "John Cena",
        gender: "Male",
        age: 39,
        email: "same@example.com",
        isRetired: false,
    },
];
const data = filterByGenderMatch(users, "Male");
console.log(data);
