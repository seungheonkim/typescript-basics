//배열 타입의 경우 그냥 빈 배열을 타입으로 설정하면 해당 변수는 무조건 빈배열이 할당되어야한다고 설정하는 꼴임
//따라서 해당 배열에 어떤 타입의 변수가 들어가야 하는지 말해줘야 한다 => 배열에 들어갈 타입 []
const activeUsers: string[] = [];
activeUsers.push("steven");
console.log(activeUsers);//['steven']

const ageList: number[] = [23, 34, 56];
ageList[0] = 99;
// Type 'string' is not assignable to type 'number'
// ageList[1] = 'hello';

//배열 타입 선언하는 또 다른 방법
//Array<type name>
const bools: Array<boolean> = [];

type Point = {
    x: number;
    y: number;
}

const coord: Point[] = [];
coord.push({x: 23, y: 88});
coord.push({x: 15, y: 22});

//다차원 배열 => multi-dimensional array
const board: string[][] = [["x", "o", "x"], ["x", "o", "x"], ["x", "o", "x"]];

const demo: number[][][] = [[[1]]];