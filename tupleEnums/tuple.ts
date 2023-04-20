//tuple
//arrays of fixed length and ordered with specific types
//배열의 길이가 정해져 있고
//특정 타입이 들어오는 순서가 정해져 있다
let myTuple: [number, string];
myTuple = [1, "hello"];
// myTuple = ['hello', 22]; => 순서가 잘못되었기 때문에 오류!!

const color: [number, number, number] = [255, 0, 255];

type HttpResponse = [number, string];

const goodRes: HttpResponse = [200, "OK"];
//다음과 같이 tuple 이 생성된 이후에 push 를 하게 되면 오류가 발생하지 않음
goodRes.push(123);

const badRes: HttpResponse = [404, "Page Not Found"];