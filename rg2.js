const ex1 = 'Grade 1Grade 2Grade 3Grade 4Grade 5';
const ex2 = 'The pheasant has no agenda';
const ex3 = '75, 50 : 123 / 900 - 321 + 900 = 55';
const ex4 = 'My name is: James';
const ex5 = `Did you find any droids? No, sir. If there were any on board, they must also have jettisoned. Send a scanning crew on board. I want every part of this ship checked. Yes, sir. I sense something...a presence I haven't felt since... Get me a scanning crew in here on the double. I want every part of this ship checked! Boy, it's lucky you've these compartments. I use them for smuggling. I never thought I'd be smuggling myself in them. This is ridiculous. Even if I could take off, I'd never get past the tractor beam.`


ex1.match(/Grade\s\d/g);
/age/.test(ex2);
ex3.match(/\d+/g);
ex4.match(/:\s+(\w+)/)[1];
ex5.match(/'[dstm] | '[r|ve]/g).length;