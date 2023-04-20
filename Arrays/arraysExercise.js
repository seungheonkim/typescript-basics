// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
var samples = [
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
var getTotal = function (products) {
    var sum = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        sum += product.price;
    }
    return sum;
};
console.log(getTotal(samples));
