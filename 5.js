


 const Chars = (str,char) => 
    str.split('').filter(ch => ch ===char).length; 
 const Contains2to4 = (str,char) => 
    Chars(str,char) >= 2 && Chars(str,char) <= 4;

 console.log(Contains2to4("hello world","o"));