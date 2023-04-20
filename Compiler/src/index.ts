//tsc index.ts
//하면 해당 ts 파일을 js 파일로 컴파일해준다

//tsc -w 파일명 => 감시모드 진행
//감시모드를 통해 실시간 업데이트된 파일 내용을 볼 수 있도록 해준다

interface Chicken {
    breed: string;
    eggsPerWeek: number;
    name: string;
    age: number;
}

const norma: Chicken = {
    breed: 'Silkie',
    eggsPerWeek: 4,
    name: 'Norma',
    age: 3,
}

const juniper: Chicken = {
    breed: 'Silkie',
    eggsPerWeek: 10,
    name: 'Juniper',
    age: 2,
}

