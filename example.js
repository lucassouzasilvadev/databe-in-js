 //operadores booleanos  ==, ===, !=, !==, >, >=, <, <=
 
let regexp = /javascript/;
regexp[Symbol.match] = false
//console.log("/javascript/".startsWith(regexp))


//RegExp

let regExp = /^john@gmail\.com$/
let result1 = regExp.test('john@gmail.com')
let result = regExp.exec('john@gmail.com')
console.log(result[0])
console.log(result.index)
console.log(result.input)