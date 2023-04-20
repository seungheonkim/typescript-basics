function square(num: number) {
    return num * num;
}

square(3);
//밑의 예제는 전달인자가 number type 임이 명시되었기 때문에 에러가 뜬다!!
// square('asd');
// square(true);

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething('ChickenFace', 76, true);

//adding default values
function greet(person: string = 'stranger') {
    return `Hi there, ${person}`;
}

console.log(greet())
console.log(greet('steven'))

//return 타입 명시해주기
//전달인자 뒤에 붙여준다
//대체로 typescript 자체에서 infer를 함
function square2(num: number): number {
    return num * num;
}

console.log(square2(10));

function rando(num: number): string | number {
    if(Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

console.log(rando(0.2));
console.log(rando(44));

const colors = ['red', 'orange', 'blue'];

colors.map(color => {
    return color.toUpperCase();
});

//void 타입
//함수 타입에서만 사용함
//return 하는 것이 없음!!
//undefined or null 리턴함

function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
    //여기에 return 작성하면 당연히 error!!
}

//never type
//항상 throws an exception
//아니면 계속 실행되는 함수
function makeError(msg: string): never {
    throw new Error(msg);
}

function gameLoop(): never {
    while (true) {
        console.log('game loop running');
    }
}
