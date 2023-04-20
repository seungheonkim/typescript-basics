//하나의 타입만 허용하는 것이 아닌 2가지 이상의 타입을 허용할 수 있도록 설정하는 것
var age = 21;
age = 33;
age = "40";
age = true;
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 111.111, long: 222.22 };
//union 타입으로 타입 좁히기
//type narrowing
function printAge(age) {
    console.log("you are ".concat(age, " years old"));
}
printAge(23);
printAge("44");
function calcuateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
console.log(calcuateTax(45, 0.7));
console.log(calcuateTax('$45', 0.7));
