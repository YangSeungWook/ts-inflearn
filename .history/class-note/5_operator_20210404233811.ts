// function logMessage(value:any){
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// Union Type ( 파이프 연산자를 이용하여 추가로 사용가능)
var seho : string | number | boolean;

function logMessage(value : string | number){
   if(typeof value == 'number'){
        value.toLocaleString();
   }
   if(typeof value == 'string'){
        value.toString();
   }
   throw new TypeError('value must be string or number';)
}

logMessage('hello');
logMessage(100);

interface Developer {
    name : string;
    skill : string;
}

interface Person {
    name : string;
    age : number;
}

//유니온타입으로 할 경우 공통적인 속성으로만 사용 가능하다 ( name만)
function askSomeone(someone:Developer | Person){
    return someone.name;
}

//인터섹션 타입은 변수에 할당할때 2개이상 불가 마우스 오버시 never 뜸
var capt : string & number;

function askSomeone2(someone:Developer & Person){
    return someone.name
    return someone.skill
    return someone.age
}