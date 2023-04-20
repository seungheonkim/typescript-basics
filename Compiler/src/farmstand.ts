//여러 파일 다루기

//index.ts 와 farmstand.ts 모두를 한번에 컴파일하고 싶을경우
//tsconfig.json 파일이 들어있는 폴더라면 한번에 컴파일이 가능하다!!
//tsc 명령어만 입력하면 Compile 이라는 폴더에 있는 모든 ts 파일들이 컴파일된다
interface Product {
    price: number;
    name: string;
    quantity: number;
}

const printProduct = (product: Product) => {
    console.log(`${product.name} - ${product.price}`);
};