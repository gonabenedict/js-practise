const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';


ex1.match(/(^|\s)[a-zA-Z]{3}($|\s)/g);
ex2.replace( /[1-9] /g,'');
ex3.match(/\$\d{1,3}\.\d\d/)[0]
ex4.match(/(\d{3,4}\s?){3}/g);
ex5.match(/\s+@\5+\.\s+/)[0]
