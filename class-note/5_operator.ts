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

//유니온타입 - 파이프라인으로 연결 - 실무에서 많이 사용
function askSomeone(someone:Developer | Person){
    return someone.name;
}

//넣고 싶은 객체만 사용하여 함수 호출
askSomeone({name:'디벨로퍼', skill:'웹 개발'});
askSomeone({name:'캡틴', age:100});


//인터섹션 타입은 변수에 할당할때 2개이상 불가 마우스 오버시 never 뜸
//인터섹션으로 할 경우 Developer와 Person의 객체를 모두 넘겨야함
var capt : string & number;

function askSomeone2(someone:Developer & Person){
     someone.name
     someone.skill
     someone.age
}

//인터섹션은 모든 객체를 호출해야 오류 안남
askSomeone2({name:'디벨로퍼', skill:'웹 개발', age:100});
askSomeone2({name:'캡틴', skill:'웹 개발', age:100});