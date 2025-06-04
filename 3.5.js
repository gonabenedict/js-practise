const match = (str) =>
    str.replace(/\d/, '$'); 

console.log(match("hello 123 world")); // "hello $23 world"
