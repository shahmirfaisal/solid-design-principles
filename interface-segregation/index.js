class User {
  constructor(name) {
    this.name = name;
  }

  watchTrailer() {
    console.log("Watching trailer...");
  }

  watchMovie() {
    console.log("Watching movie...");
  }
}

class PremiumUser extends User {}

class FreeUser extends User {
  watchMovie() {
    return null;
  }
}

const fu = new PremiumUser("Shahmir");
console.log(fu.watchMovie());
