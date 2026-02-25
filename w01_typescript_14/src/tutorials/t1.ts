console.log('t1.ts is running');

let awesomeName: string = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
// awesomeName = 20;
console.log(awesomeName);
let amount: number = 12;
amount = 12 - 1;
// amount = 'pants';
let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = 'shakeAndBake';



console.log(amount, awesomeName, isAwesome);


/* */

// union type

let tax: number | string = 10;
tax = 100;
tax = "$10";

//Fancy name - literal value type
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random';

console.log(tax, requestStatus);