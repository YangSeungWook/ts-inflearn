// ES2015 (ES6)
class Person {
    //클래스 로직
    constructor(name, age){
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}

var seho = new Person('세호',30); //생성 되었습니다.
var seho2 = new Person('승욱',32); //생성 되었습니다.
console.log(seho)
console.log(seho2)