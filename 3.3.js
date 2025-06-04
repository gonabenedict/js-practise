// write a program that checks whether an array given of integers is sorted in ascdenging order

const check = (arr) =>{
    for (let i =0 ; i < arr.length ; i++){
        if (arr[i]  > arr[i + 1] ) return false;
        
    }
    return true;

} 
console.log(check([1,2,3,4,5]));

