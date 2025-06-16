const voelCount = (str) =>
    str.split('').filter(char => char.match(/[aeiou/i]/i)).length;
console.log(voelCount("hello world")); // 3