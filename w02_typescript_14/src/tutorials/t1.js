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
//let car2: { brand: string; year: number } = { brand: 'audi' };
console.log(car1);
var book = { title: 'book', cost: 20 };
var pen = { title: 'pen', cost: 5 };
var notebook = { title: 'notebook' };
var items = [book, pen, notebook];
// items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only proper
console.log(items);
/* */
function sayHi(name) {
    console.log("Hello there ".concat(name.toUpperCase(), "!!!"));
}
sayHi('john');
// sayHi(3)
// sayHi('peter', 'random');
function calculateDiscount(price) {
    // price.toUpperCase();
    var hasDiscount = true;
    if (hasDiscount) {
        return price;
        // return 'Discount Applied';
    }
    return price * 0.9;
}
var finalPrice = calculateDiscount(200);
console.log(finalPrice);
// "any" example
function addThree(number) {
    var anotherNumber = 3;
    return number + anotherNumber;
}
var addThreeResult = addThree(2);
var someValue = addThreeResult;
console.log(someValue);
// run time error
//someValue.myMethod();
/* */
// Function = Optional and Default Parameters
function calculatePrice(price, discount) {
    return price - (discount || 0);
}
var priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount); // Output: 80
var priceWithoutDiscount = calculatePrice(300);
console.log(priceWithoutDiscount); // Output: 300
function calculateScore(initialScore, penaltyPoints) {
    if (penaltyPoints === void 0) { penaltyPoints = 0; }
    return initialScore - penaltyPoints;
}
var scoreAfterPenalty = calculateScore(100, 20);
console.log(scoreAfterPenalty); // Output: 80
var scoreWithoutPenalty = calculateScore(300);
console.log(scoreWithoutPenalty); // Output: 300
/* */
function sum(message) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    var doubled = numbers.map(function (num) { return num * 2; });
    console.log(doubled);
    var total = numbers.reduce(function (previous, current) {
        return previous + current;
    }, 0);
    return "".concat(message, " ").concat(total);
}
var sumResult = sum('The total is:', 1, 2, 3, 4, 5); // sumResult will be "The total is: 15"
console.log(sumResult);
/* */
// Functions - Using Object as Function
function createEmployee(_a) {
    var id = _a.id;
    return { id: id, isActive: id % 2 === 0 };
}
var first = createEmployee({ id: 1 });
var second = createEmployee({ id: 2 });
console.log(first, second);
// alternative
function createStudent(student) {
    console.log("Welcome to the course ".concat(student.name.toUpperCase(), "!!!"));
}
var newStudent = {
    id: 5,
    name: 'anna',
};
createStudent(newStudent);
