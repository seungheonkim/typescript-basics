var pt = { x: 12, y: 1234 };
var thomas = {
    first: "Thomas",
    last: "Hardy",
    nickName: "Tom",
    id: 123,
    sayHi: function () {
        return "hello!";
    }
};
var shoes = {
    name: "Blue Nike",
    price: 100,
    applyDiscount: function (discount) {
        this.price = this.price * (1 - discount);
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
var bill = {
    name: "Bill",
    age: 4,
    breed: "Husky",
    bark: function () {
        return "Wolf wolf!!";
    }
};
var chewy = {
    age: 2, breed: "Maltiz", job: "drug sniffer", name: "Chewy",
    bark: function () {
        return "Bark!!";
    }
};
var pierre = {
    name: "Pierre",
    id: 1234,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JavaScript", "Java", "Python"]
};
//interface 는 literal type 지정할 때 사용이 불가능하다
