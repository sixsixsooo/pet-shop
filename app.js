class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  buy() {
    console.log("Buy book");
  }
}

class AudioBook extends Book {
  constructor(title, author, lenMin) {
    super(title, author);
    this.title = title;
  }

  log() {
    console.log(`title: ${this.title} - author: ${this.author}`);
  }
}

const bookNew = new AudioBook("Tororo", "Toriki", 3);

bookNew.buy();
bookNew.log();
