class User {
  constructor(name) {
    this.name = name;
  }

  watchTrailer() {
    console.log("Watching trailer...");
  }
}

class PremiumUser extends User {
  watchMovie() {
    console.log("Watching movie...");
  }
}

class FreeUser extends User {}

const user = new FreeUser("Shahmir");
user.watchMovie();
