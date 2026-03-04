/**************/
// Generics


// In TypeScript, you can declare an array using two syntaxes:
// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ['Apple', 'Banana', 'Mango'];
let array2: Array<number> = [1, 2, 3];
let array3: Array<boolean> = [true, false, true];

/**************/
// Generics - Create Generic Function and interface


function createString(arg: string): string {
    return arg;
}
function createNumber(arg: number): number {
    return arg;
}


// 通用型的寫法
function genericFunction<T>(arg: T): T {
    return arg;
}

interface GenericInterface<T> {
    value: T;
    getValue: () => T;
}

const genericString: GenericInterface<string> = {
    value: 'ltlin',
    getValue: function () {
        return this.value;
    },
};

console.log('genericString', genericString);


/**************/
// Generics - Promise Example

async function someFunc(): Promise<string> {
    return 'Hello World';
}
const result = someFunc();
console.log('result', result);

/**************/
// Generics - Generate Array

function generateStringArray(length: number, value: string): string[] {
    let result: string[] = [];
    result = Array(length).fill(value);
    return result;
}
console.log(generateStringArray(3, 'hello'));
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    result = Array(length).fill(value);
    return result;
}
let arrayStrings = createArray<string>(3, 'hello'); // ["hello", "hello", "hello"]
let arrayNumbers = createArray<number>(4, 100); // [100, 100, 100, 100]
console.log(arrayStrings);
console.log(arrayNumbers);


/**************/
// Generics - Part 5

function pair<T, U>(param1: T, param2: U): [T, U] {
    return [param1, param2];
}
// Usage
let result2 = pair<number, string>(123, 'Hello');
console.log('result2_14', result2); // Output: [123, "Hello"]