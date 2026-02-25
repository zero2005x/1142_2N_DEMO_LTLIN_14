console.log('t1.ts is running');
var awesomeName = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
// awesomeName = 20;
console.log(awesomeName);
var amount = 12;
amount = 12 - 1;
// amount = 'pants';
var isAwesome = true;
isAwesome = false;
// isAwesome = 'shakeAndBake';
console.log(amount, awesomeName, isAwesome);
/* */
// union type
var tax = 10;
tax = 100;
tax = "$10";
//Fancy name - literal value type
var requestStatus = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random';
console.log(tax, requestStatus);
/* */
// Practical Application of Type Annotation
var books = ['1984', 'Brave New World', 'Fahrenheit 451'];
var foundBook;
for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
    var book_1 = books_1[_i];
    if (book_1 === '1984') {
        foundBook = book_1;
        break;
    }
}
console.log(foundBook === null || foundBook === void 0 ? void 0 : foundBook.length);
/* */
// Arrays - Fundamental Types
var prices = [19.99, 9.99, 14.99];
var fruits = ['apple', 'banana', 'orange'];
var array = ['bobo', true, 'orange', false];
console.log(prices, fruits, array);
/* */
// Objects - Fundamental Types
var car = { brand: 'toyota', year: 2020 };
car.brand = 'ford';
// car.color = 'blue';
var car1 = { brand: 'audi', year: 2021 };
var car2 = { brand: 'audi' };
console.log(car, car1);
var book = { title: 'book', cost: 20 };
var pen = { title: 'pen', cost: 5 };
var notebook = { title: 'notebook' };
var items = [book, pen, notebook];
items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only proper
console.log(items);
