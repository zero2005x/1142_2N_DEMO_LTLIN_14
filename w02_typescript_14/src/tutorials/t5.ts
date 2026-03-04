/**********************************/
// Interface Fundamentals

interface Book {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
    printAuthor(): void;
    printTitle(): void;
}
const deepWork: Book = {
    isbn: 9781455586691,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-help',
    printAuthor() {
        console.log(`Author: ${this.author}`);
    },
    printTitle() {
        console.log(`Title: ${this.title}`);
    }
};
deepWork.title = 'New Title'; // allowed
// deepWork.isbn = 654321; // not allowed

//console.log('deepWork_14', deepWork);

deepWork.printAuthor();
const result = deepWork.printTitle();
console.log('result_14', result);


/********* */
//Interface - Challenge


interface Computer {
    readonly id: number; // cannot be changed once initialized
    brand: string;
    ram: number;
    upgradeRam(increase: number): number;
    storage?: number; // optional property
}
const laptop: Computer = {
    id: 1,
    brand: 'random brand',
    ram: 8, // in GB
    upgradeRam(amount: number) {
        this.ram += amount;
        return this.ram;
    },
};
laptop.storage = 512; // assigning value to optional property
console.log('ram_14', laptop.upgradeRam(8)); // upgrades RAM by 4GB
console.log('laptop_14', laptop);