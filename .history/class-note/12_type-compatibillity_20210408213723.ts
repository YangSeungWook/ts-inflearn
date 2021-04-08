// 타입호환
// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

var developer: Developer;
var person: Person;
//developer = person;  오른쪽에 타입이 적어서 에러남
person = developer;  // 오류 안남


// 함수인자의 비교
var add = function(a: number){
    // ...
}

var sum = function(a: number, b: number) {
    // ...
}

add = sum; // 인자가 적어서 오류남
sum = add;

//제네릭
interface Empty<T> {
    data : 'good';
    nice : string;
}

var empty1:Empty<string>;
var empty2:Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T>{
    data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

notEmpty1 = notEmpty2; // 제네릭에서 받는 타입이 다르기 때문에 둘다 오류남
notEmpty2 = notEmpty1;




