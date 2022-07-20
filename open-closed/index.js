const sortUsers = (users, sortBy, order) => {
  switch (sortBy) {
    case "name":
      switch (order) {
        case "asc":
          users = users.sort((user1, user2) =>
            user1.name < user2.name ? -1 : 1
          );
          break;

        case "desc":
          users = users.sort((user1, user2) =>
            user1.name > user2.name ? -1 : 1
          );
          break;
      }
      break;

    case "age":
      switch (order) {
        case "asc":
          users = users.sort((user1, user2) => user1.age - user2.age);
          break;

        case "desc":
          users = users.sort((user1, user2) => user2.age - user1.age);
          break;
      }
      break;
  }

  return users;
};

const users = [
  {
    name: "Shahmir",
    age: 19,
  },
  {
    name: "Faisal",
    age: 18,
  },
  {
    name: "Usman",
    age: 20,
  },
];

console.log(sortUsers(users, "age", "asc"));
