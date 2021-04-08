interface Developer {
    name : string;
    skill : string;
}

interface Person {
    name : string;
    age : number;
}

function introduce() : Developer | Person {
    return {
        name : 'Tony',
        age : 33,
        skill : 'Iron Making'
    }
}

var tony = introduce();
//console.log(tony.skill) //접근불가
console.log(tony.name) // 공통 프로퍼티 name만 사용가능

if ((tony as Developer).skill){ // 타입단얼을 통해 Developer의 skill을 단언하여 값을 뽑아낼수 있음
    var skill = (tony as Developer).skill;
    console.log(skill);
}else if((tony as Person).age){
    var age = (tony as Person).age;
    console.log(age)
}


// *위처럼 복잡하게 타입단언을 사용하지 않기 위해 타입가드를 쓴다.

// is를 통한 타입 가드 정의
function isDeveloper(target: Developer | Person) : target is Developer{
    return (target as Developer).skill !== undefined;
}

