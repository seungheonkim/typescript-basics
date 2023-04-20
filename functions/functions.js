function square(num) {
    return num * num;
}
square(3);
//밑의 예제는 전달인자가 number type 임이 명시되었기 때문에 에러가 뜬다!!
// square('asd');
// square(true);
var doSomething = function (person, age, isFunny) { };
doSomething('ChickenFace', 76, true);
//adding default values
function greet(person) {
    if (person === void 0) { person = 'stranger'; }
    return "Hi there, ".concat(person);
}
console.log(greet());
console.log(greet('steven'));
//return 타입 명시해주기
//전달인자 뒤에 붙여준다
function square2(num) {
    return num * num;
}
console.log(square2(10));
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
console.log(rando(0.2));
console.log(rando(44));
