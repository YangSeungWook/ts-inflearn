
// 타입 추론 기본1
var a = 'abc';
function getB(b = 10){
    var c =  'hi';
    return b + c;
}

// 타입 추론 기본2
interface downBox<T> {
    value:T;
    title:string;
}

var shopItem: downBox<string> = {
    value: 'abc',
    title: 'hello'
}



// 타입 추론 기본3 - 인터페이스 확장하여 제네릭 전달하기
interface Dropdown<T> {
    value:T;
    title:string;
}

interface Detail<K> extends Dropdown<K> {
    description: K;
    tag:number;

}

var detaildItem: Detail<string> = {
    title : 'abc',
    description: 'ab',
    value : '디테일의 제네릭 string이 드랍다운의 제네릭에 전달되서 string이 됨',
    tag  : 11
}

// Best Common Type


