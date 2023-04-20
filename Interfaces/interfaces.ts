// type 과 거의 비슷한 기능
// type 을 정의할 때 사용된다
//객체의 형태를 묘사하는 방법!! only interfaces!!
interface Point {
    x: number;
    y: number;
}

const pt: Point = {x: 12, y: 1234};

//readonly 와 선택적 인터페이스 property
//adding methods to interface
interface Person {
    readonly id: number,
    first: string;
    last: string;
    nickName?: string;

    // sayHi: () => string;
    sayHi(): string;//메서드임을 표시하는 방법
}

const thomas: Person = {
    first: "Thomas",
    last: "Hardy",
    nickName: "Tom",//not really required
    id: 123,
    sayHi: () => {
        return "hello!";
    }
};

//method 에 parameter 추가하기
interface Product {
    name: string;
    price: number;

    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Nike",
    price: 100,
    applyDiscount(discount: number): number {
        this.price = this.price * (1 - discount);
        return this.price;
    }
};

console.log(shoes.applyDiscount(0.4));

//type 과는 다르게 interface 는 한번 정의한 이후에도 다시 작성하여 새로운 프로퍼티를 추가해줄 수 있음
//해당 interface 가 다른 파일에 정의되어있을 때 , 다시 추가할 것이 있다면 다시 추가 가능하다는 의미
interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;

    bark(): string;
}

const bill: Dog = {
    name: "Bill",
    age: 4,
    breed: "Husky",
    bark(): string {
        return "Wolf wolf!!";
    }
};

//인터페이스 확장하기 (interface extension)
interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guideDog";
}

const chewy: ServiceDog = {
    age: 2, breed: "Maltiz", job: "drug sniffer", name: "Chewy", bark(): string {
        return "Bark!!";
    }
};

//다중 상속도 가능하다
interface Human {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends Human, Employee {
    level: string;
    languages: string[];
}

const pierre: Engineer = {
    name: "Pierre",
    id: 1234,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JavaScript", "Java", "Python"]
};

//interface 는 literal type 지정할 때 사용이 불가능하다