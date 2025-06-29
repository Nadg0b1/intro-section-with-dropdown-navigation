const users = [
  {
    id: 101,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "admin",
    isActive: true,
  },
  {
    id: 102,
    name: "Brian Lee",
    email: "brian.lee@example.com",
    role: "editor",
    isActive: true,
  },
  {
    id: 103,
    name: "Carla Mendes",
    email: "carla.mendes@example.com",
    role: "viewer",
    isActive: false,
  },
  {
    id: 104,
    name: "David Patel",
    email: "david.patel@example.com",
    role: "editor",
    isActive: true,
  },
  {
    id: 105,
    name: "Alice Rossi",
    email: "alice.rossi@example.com",
    role: "admin",
    isActive: false,
  },
  {
    id: 106,
    name: "Felix Nguyen",
    email: "felix.nguyen@example.com",
    role: "viewer",
    isActive: true,
  },
  {
    id: 107,
    name: "Grace Kim",
    email: "grace.kim@example.com",
    role: "editor",
    isActive: false,
  },
];

// Exercitii:
// Sa se scrie niste cod care afiseaza in consola un mesaj care indica numarul total de useri din array: "Total number of users: [insereaza numar total de useri]". Nu conteaza rolul lor, statusul sau altceva. In consola trebuie sa apara efectiv cati useri sunt in array. Mentiune: nu pui console.log("Total number of users: 5"); ca numeri tu ca sunt 5 useri, ci trebuie sa scrii niste cod prin care javascript-ul sa faca el numaratoarea si apoi sa afiseze mesajul complet de mai sus.

// Sa se afiseze in consola un mesaj care indica numarul total de useri activi "Active users: [insereaza numar]".

// Sa se afiseze in consola un mesaj care indica numarul total de useri care au rolul admin "Admin users: [insereaza numar]".

// Sa se afiseze in consola un mesaj care indica numarul total de useri care au rolul editor si inca sunt activi "Active editors: [insereaza numar]".

// Sa se afiseze in consola toti userii care au numele "Alice"

// 1.
console.log(`Total number of users: ${users.length}`);

// 2.
let activeUsersCount = 0;
for (let i = 0; i < users.length; i++) {
  if (users[i].isActive === true) {
    activeUsersCount++;
  }
}
console.log(`Active users: ${activeUsersCount}`);

// 3.
let adminUsersCount = 0;
for (let i = 0; i < users.length; i++) {
  if (users[i].role === "admin") {
    adminUsersCount++;
  }
}
console.log(`Admin users: ${adminUsersCount}`);

// 4.
let activeEditorsCount = 0;
for (let i = 0; i < users.length; i++) {
  if (users[i].role === "editor" && users[i].isActive === true) {
    activeEditorsCount++;
  }
}
console.log(`Active editors: ${activeEditorsCount}`);

// 5.
for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Alice") {
    console.log(users[i]);
  }
}
