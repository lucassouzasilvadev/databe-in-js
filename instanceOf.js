const date = new Date();

const _instanceof = function(obj, fn){
    if(obj === fn.prototype) return true;
    if(obj === null) return false;
    return _instanceof(obj.__proto__, fn);
};


console.log(date instanceof Date);
console.log(date instanceof Object);
console.log(date instanceof Array);

console.log(typeof date);
console.log(_instanceof(date, Date));
console.log(_instanceof(date, Object));
console.log(_instanceof(date, Array));