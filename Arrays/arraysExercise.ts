// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages: number[] = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
    name: string;
    price: number;
}

const samples: Product[] = [
    {
        name: "coffee mug",
        price: 50,
    },
    {
        name: "coffee pot",
        price: 100,
    },
    {
        name: "coffee table",
        price: 1000,
    },
    {
        name: "coffee bag",
        price: 300,
    }
];

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

const getTotal = (products: Product[]): number => {
    let sum = 0;
    for (let product of products) {
        sum += product.price;
    }

    return sum;
};

console.log(getTotal(samples));