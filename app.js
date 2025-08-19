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

class EBook extends AudioBook {
  constructor(title, author, lenMin, pages) {
    super(title, author, lenMin);
    this.pages = pages;
  }

  log() {
    console.log(
      `title: ${this.title} - author: ${this.author} - pages: ${this.pages}`
    );
  }
}

const bookNew = new AudioBook("Tororo", "Toriki", 3);
bookNew.buy();
bookNew.log();

const ebookBook = new EBook("Tororo", "Toriki", 3, 100);

ebookBook.buy();
ebookBook.log();
