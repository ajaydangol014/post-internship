type UserGender = "Male" | "Female" | "Other";

interface User {
  id: number;
  name: string;
  gender: UserGender;
  age: number;
  email: string;
  isRetired: boolean;
}

function filterByGenderMatch(users: User[], gender: UserGender): User[] {
  return users.filter((user) => user.gender == gender);
}

const users: User[] = [
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

const data: User[] = filterByGenderMatch(users, "Male");
console.log(data);
