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

/* */

// Practical Application of Type Annotation

const books = ['1984', 'Brave New World', 'Fahrenheit 451'];
let foundBook: string | undefined;
for (const book of books) {
  if (book === '1984') {
    foundBook = book;
    break;
  }
}
console.log(foundBook?.length);

/* */
// Arrays - Fundamental Types

let prices: number[] = [19.99, 9.99, 14.99];
let fruits: string[] = ['apple', 'banana', 'orange'];



let array: (string | boolean)[] = ['bobo',true, 'orange', false];

console.log(prices, fruits, array);


/* */
// Objects - Fundamental Types

let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };
car.brand = 'ford';
// car.color = 'blue';

let car1: { brand: string; year: number } = { brand: 'audi', year: 2021 };

let car2: { brand: string; year: number } = { brand: 'audi' };

console.log(car, car1);


let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 5 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only proper

console.log(items);
