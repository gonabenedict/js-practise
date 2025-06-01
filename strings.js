/* write a javascript program that when given a string takes the first three parts and last three and makes a new string , the string must be three or more characters if not the original is printed out*/


const takeString=(string) => 
    string.length < 3 ? string : string.slice(0,3) + string.slice(-3);

console.log(takeString("aabb"));

