//상수 집합을 정의할 수 있음
//해당 상태에 따라 숫자는 자동으로 0부터 지정이 되며
//첫번째에 숫자를 지정하면 알아서 10, 11, 12 이렇게 지정됨
//.아예 처음부터 지정할 수도 있음
enum OrderStatus {
    PENDING = 10,
    SHIPPED,
    DELIVERED,
    RETURNED
}
const myStatus = OrderStatus.DELIVERED;

const isDelivered = (status: OrderStatus) => {
    return status === OrderStatus.DELIVERED;
};

isDelivered(OrderStatus.RETURNED);

//모두 같은 타입일 필요는 없음
//나중에 해당 문자열을 통해 값을 참조할때 자주 사용될 수 있음
enum ArrowKeys {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right',
    ERROR = 234
}

