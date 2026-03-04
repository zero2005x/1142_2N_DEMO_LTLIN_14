/*** */
// Type Alias - Challenge

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
const david: Employee = { id: 1, name: 'David', department: 'HR' };
const ltlin: Manager = { id: 2, name: 'LtLin', employees: [alice, david] };
console.log(`alice`, alice);
console.log(`david`, david);
console.log(`ltlin`, ltlin);

function printStaffDetalis(staff: Employee | Manager) {
    if ('employees' in staff) {
        console.log(
            `${staff.name} is a manager of ${staff.employees.length} employees.`
        );
    } else {
        console.log(
            `${staff.name} is an employee in the ${staff.department} department.`
        );
    }
}

printStaffDetalis(ltlin);// Outputs: LtLin is a manager of 2 employees.
printStaffDetalis(alice);// Outputs: Alice is an employee in the Sales department.
printStaffDetalis(david);// Outputs: David is an employee in the HR department.



/** */
// Intersection Types

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };
const book1: Book = {
    id: 2,
    name: 'How to Cook a Dragon',
    price: 15,
};
const book2: Book = {
    id: 3,
    name: 'The Secret Life of Unicorns',
    price: 18,
};
const discountedBook: DiscountedBook = {
    id: 4,
    name: 'Gnomes vs. Goblins: The Ultimate Guide',
    price: 25,
    discount: 0.15,
};

console.log('book1_14', book1);
console.log('book2_14', book2);
console.log('discountedBook_14', discountedBook);