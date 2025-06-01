//write a js program to extract the first half of a string of even length


const firstHalf = (string) =>
    string.length%2 == 0 ?  string.slice(0,string.length/2) : console.log("error")

console.log(firstHalf("aaaabbbb"));