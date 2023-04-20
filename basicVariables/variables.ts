//string 으로 선언함
let movieTitle: string = 'John Wick';
//다른 문자열로 변경은 가능함
movieTitle = 'Lord of the rings';
//문자열 타입이 아닌 다른 타입으로의 변경은 불가능!!
// movieTitle = 10; => x!!

//2. 숫자
let myNum: number = 20;
myNum++;//ok
// myNum = 'hello'; =>  불가능함

//3. 참, 거짓
let gameOver: boolean = true;
gameOver = false;

//type inference
//굳이 우리가 type을 명시하지 않아도 typescript 가 알아서 해당 타입이 무엇인지 추론하여 나타낸다
let tvShow = 'bts show';//string type 을 적지 않았음에도 잘 알아냈음

let isFunny = false;//boolean inference
isFunny = true;
// isFunny = 'hello';//불가능함


//Any type
let thing: any = 'start';
thing = [];
thing = {};
thing = 10;
//이와 같이 특정 타입을 명시하지 않았기 때문에 아무 타입이나 들어가도 됨

//any type이 사용되는 경우
const movies = ['hell', 'Arrival'];
let foundMovie;

for(let movie of movies) {
    if(movie === 'Arrival') {
        foundMovie = 'Arrival';
    }
};


//다음과 같이 사용하면 타입 스크립트는 해당 변수를 암묵적으로 any 타입으로 추론함
foundMovie();
foundMovie = 1;
foundMovie.assdd();
