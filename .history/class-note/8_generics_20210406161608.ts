// function logText(text){
//     console.log(text);
//     return text;
// }

// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// function logText<T>(text:T):T{
//     console.log(text);
//     return text;
// }
// logText<string>('하이');

// function logText(text : string){
//     console.log(text);
//     //text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num : number){
//     console.log(num);
//     return num;
// }

// function logText(text : string | number){
//     console.log(text);
//     text
//     return text;
// }

// const a = logText('a'); // 변수a는 string도 아니고 number도 아니고 두개가 합쳐져 있어서 자바스크립트 네이티브 api 사용시 문제가 생김

// logText(10);
// logNumber(10);
// logText(true);

function logText<T>(text:T) : T{
    console.log(text);
    return text;
}

const str = logText<string>('abc'); 
str.split(''); //string 문자열 사용 가능

const login = logText<boolean>(false);  // login변수는 boolean으로 정의됨

logText('a')
logText(10)


// 인터페이스에 제네릭을 선언하는 방법
//기존 인터페이스
// interface Dropdown {
//     value : string;
//     seletected : boolean;
// }
// const obj: Dropdown = {value:10,seletected:false};

interface Dropdown<T> {
    value: T;
    selected : boolean;
}

const obj: Dropdown<string> = {value:'abc', selected:false};

// 제네릭의 타입제한
// 인자 text쪽 T에  배열로 선언하지 않으면 console.log에 length가 먹지 않음, 타입추론 불가..
function logTextLength<T>(text:T[]) : T[] {
    console.log(text.length)
    return text;
}

logTextLength<string>(['hi','good']);
