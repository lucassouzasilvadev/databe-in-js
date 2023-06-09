"javascript".length;
"javascript".indexOf("p")
"php".lastIndexOf("p")
"javascript".toUpperCase()
"KOTLIN".toLowerCase()

"JavaScript".charAt(1)
"JavaScript".charCodeAt(1)
String.fromCharCode(97)


"JavaScript".includes("Java")
"Ruby".startsWith("R")
"Erlang".endsWith("lang")

//locale compare: retorna -1 se a string passada por parâmetro for maior,
// 0 se for igual e 1 se for menor
"C++".localeCompare("Ruby")
"Python".localeCompare("Java")
"JavaScript".localeCompare("JavaScript")


//match: retorna partes da String com base na RegExp passada por parâmetro
//search: Retorna a primeira posição encontrada com base na RegExp passada por parâmetro
//replace: retorna uma nova string resultante da substituição da String ou RegExp passada
//no  primeiro parâmetro pelo segundo parâmetro
"c++".match(/\+/g)
"Java".search(/a/)
"JavaScript".replace("Java", "Ecma")
 
//slice: Retorna uma parte da string que está invocando a função iniciando na posição passada
//no primeiro parametro até a posição final passada no segundo parametro, ou da posição passada
//no primeiro parametro até o fim caso o segundo parametro nao seja informado

//split: Retorna um array contendo o resultado da divisao da srting original de acrodo com o
//criterio passado por parametro

//substring: similar ao slice, não aceita valores negativos como parametro e permite a inversao
//dos parametros

"JavaScript".slice(0, 4)
"c;java;javascript;ruby".split(";")
"javascript".substring(0, 4)  

"java".concat("script")
"data".concat("flex")
"script".padStart(10, "java")
"c".padEnd(3, "+")
"c".concat("+".repeat(2))
" self ".trim()
" scheme ".trimLeft()
" perl ".trimRight()















