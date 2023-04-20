//하나의 타입만 허용하는 것이 아닌 2가지 이상의 타입을 허용할 수 있도록 설정하는 것
let age: number | string | boolean = 21;
age = 33;
age = "40";
age = true;

type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = {x: 1, y: 34};
coordinates = {lat: 111.111, long: 222.22};

//union 타입으로 타입 좁히기
//type narrowing
function printAge(age: number | string) {
    console.log(`you are ${age} years old`);
}

printAge(23);
printAge("44");

function calcuateTax(price: number | string, tax: number) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}

console.log(calcuateTax(45, 0.7));
console.log(calcuateTax("$45", 0.7));

//유니온 타입 과 배열
//허용할 타입을 () 괄호 안에 넣는다
// const nums: number[] = [1,2,3,4];
// const stuff: any[] = [1, 2, 3, 4, true, "aaaa", {}];
const stuff: (number | string)[] = [1, 2, 3, 4, "hello"];

const coords: (Point | Loc)[] = [];
coords.push({lat: 111.111, long: 222.22});
coords.push({x: 1, y: 34});

//Literal type
let zero: 0 = 0;
//Type '2' is not assignable to type '0'
// zero = 2;
//어떤 특정 값을 전달할때 사용된다
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = 'Angry';

type DayofWeek = "mon" | "tue" | "wed" | "thur" | "fri" | "sat" | "sun";

let today: DayofWeek = 'thur';