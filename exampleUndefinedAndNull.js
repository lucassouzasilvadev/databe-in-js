const book ={
    title: "clean code",
    author: "robert martin",
    pages: 464,
    language: "english",
    available: true
}

console.log(book)
delete book.available;
console.log(book)
 console.log("title" in book);
 console.log("publisher" in book);
