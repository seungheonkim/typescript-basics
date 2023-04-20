const dog = {
    name: "who",
    breed: "inu",
    age: 4,
};

function printName(person: { first: string, last: string }) {
    console.log(`${person.first} ${person.last}`);
}

printName({first: "bill", last: "steph"});

let coordinate: { x: number, y: number } = {x: 34, y: 22};

function makeRandomCoordinate(): { x: number, y: number } {
    return {x: Math.random(), y: Math.random()};
}

console.log(makeRandomCoordinate());

//초과 프로퍼티
//지정된 argument갯수를 초과하는 것은 그냥 덧붙여서 있는 것으로 확인
//기존에 필수적으로 존재해야 하는 first 와 last 가 제대로 있는지만 확인한다
// printName({first: "bill", last: "steph", age: 43});

//type alias => 타입 별칭 생성하기
//이렇게 항상 부르면 번거롭기 때문에 나만의 type을 설정한다
type Point = {
    x: number;
    y: number;
}

function doublePoint(point: Point): Point {
    return {x: point.x * 2, y: point.y * 2};
}

//Nested obj => 중첩된 객체

type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: {
        producer: string;
        writer: string;
    };
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song) {
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
    title: "Hello",
    artist: "steve",
    numStreams: 222222,
    credits: {
        producer: "mack",
        writer: "bts"
    }
};

console.log(calculatePayout(mySong));
printSong(mySong);

//selective property => 선택적 프로퍼티
//해당 변수뒤에 ? 를 붙인다
type threePoint = {
    x: number;
    y: number;
    z?: number;
}

const myPoint: threePoint = {x: 0, y: 0, z: 10};
const myPointNoZ: threePoint = {x: 0, y: 0};

//readonly 제어자
type User = {
    readonly id: number;
    username: string;
}

const user: User = {
    id: 11111,
    username: "cat girl"
};

//id 앞의 readonly 제어자를 통해
//읽을 순 있지만 해당 값을 변경하지는 못하게 만들어줄 수 있다
console.log(user.id);
// Cannot assign to 'id' because it is a read-only property
// user.id = 22222;

//Intersection type => 교차 타입
type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

type ColorfulCircle = Colorful & Circle;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "red"
};

type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

type CatDog = Cat & Dog & {
    age: number;
}

const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 5,
};