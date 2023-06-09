const title = "clean code";
const author = "robert martin";
const pages = 464;
const language = "english";
const available = true;

const key1 = "title";
const key2 = "author";
const key3 = "pages";
const key4 = "language";
const key5 = "available";

const book = {
    title: "clean code",
    author: "robert martin",
    pages: 464,
    language: "English",
    available: true
};

console.log(book[key1]);
console.log(book);
const book2 = {};

book2.title = "clean code";
book2.author = "lucas souza";
book2.pages = 464;
book2.language = "english";
book2.available = true

console.log(book2);

const book3 = {};

for(let key in book){
    book3[key] = book[key]
    console.log(book[key])
}

console.log("esse é o book 3 ==>", book3)