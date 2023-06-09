const javascript = Object.create({})

Object.assign(javascript, {
    name: "javaScript",
    year: 1995,
    paradigma: "OO and functional"
},{
  author: "brendan eich",
  influencedBy: "Java, scheme and self"  
});


console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));

console.log(Object.is(javascript, javascript))