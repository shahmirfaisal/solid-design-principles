class SortUserName {
  constructors(users) {
    this.users = users;
  }

  ascending() {
    return users.sort((user1, user2) => (user1.name < user2.name ? -1 : 1));
  }

  descending() {
    return users.sort((user1, user2) => (user1.name > user2.name ? -1 : 1));
  }
}

class SortUserAge {
  constructors(users) {
    this.users = users;
  }

  ascending() {
    return users.sort((user1, user2) => user1.age - user2.age);
  }

  descending() {
    return users.sort((user1, user2) => user2.age - user1.age);
  }
}

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

const sort = new SortUserAge(users);
console.log(sort.ascending());
