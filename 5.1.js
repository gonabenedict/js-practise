const alphaOrder = (string) => 
    string.split('').sort((a,b) => a>b ?1 : -1).join('');

console.log(alphaOrder('webmaster'));
