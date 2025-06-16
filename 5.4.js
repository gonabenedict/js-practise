const getNonRepeated = (str) =>     
    str.split('')
    .filter((char, index , arr) =>
        arr.filter(arrItem => arrItem === item).length === 1);
