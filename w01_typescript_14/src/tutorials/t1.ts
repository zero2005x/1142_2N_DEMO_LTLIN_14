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



let array: (string | boolean)[] = ['bobo', true, 'orange', false];

console.log(prices, fruits, array);


/* */
// Objects - Fundamental Types

let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };
car.brand = 'ford';
// car.color = 'blue';

let car1: { brand: string; year: number } = { brand: 'audi', year: 2021 };

//let car2: { brand: string; year: number } = { brand: 'audi' };

console.log(car1);


let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 5 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only proper

console.log(items);

/* */

function sayHi(name: string) {
    console.log(`Hello there ${name.toUpperCase()}!!!`);
}
sayHi('john');
// sayHi(3)
// sayHi('peter', 'random');
function calculateDiscount(price: number): number {
    // price.toUpperCase();
    const hasDiscount = true;
    if (hasDiscount) {
        return price;
        // return 'Discount Applied';
    }
    return price * 0.9;
}
const finalPrice = calculateDiscount(200);
console.log(finalPrice);
// "any" example
function addThree(number: any) {
    let anotherNumber: number = 3;
    return number + anotherNumber;
}
const addThreeResult = addThree(2);
const someValue = addThreeResult;

console.log(someValue)
// run time error
//someValue.myMethod();

/* */
// Function = Optional and Default Parameters

function calculatePrice(price: number, discount?: number) {
    return price - (discount || 0);
}
let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount); // Output: 80
let priceWithoutDiscount = calculatePrice(300);
console.log(priceWithoutDiscount); // Output: 300
function calculateScore(initialScore: number, penaltyPoints: number = 0) {
    return initialScore - penaltyPoints;
}
let scoreAfterPenalty = calculateScore(100, 20);
console.log(scoreAfterPenalty); // Output: 80
let scoreWithoutPenalty = calculateScore(300);
console.log(scoreWithoutPenalty); // Output: 300

/* */

function sum(message: string, ...numbers: number[]): string {
    const doubled = numbers.map((num) => num * 2);
    console.log(doubled);
    let total = numbers.reduce((previous, current) => {
        return previous + current;
    }, 0);
    return `${message} ${total}`;
}

let sumResult = sum('The total is:', 1, 2, 3, 4, 5); // sumResult will be "The total is: 15"
console.log(sumResult);

/* */
// Functions - Using Object as Function

function createEmployee({ id }: { id: number }): {
    id: number;
    isActive: boolean;
} {
    return { id, isActive: id % 2 === 0 };
}
const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);
// alternative
function createStudent(student: { id: number; name: string }) {
    console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}
const newStudent = {
    id: 5,
    name: 'anna',
};
createStudent(newStudent);