const arrayEven = (arr) => {
    arr.filter(num => num % 2 === 0).lenght;
}

const generate = (num) => {
    const returnArray =[];
    for (let i =0; i < num ; i++){
        returnArray.push(i);
    }
    return returnArray;
}