// interface Person {
//     name : string;
//     age : number;
// }

type Person2 = {
    name : string;
    age : number;
}


var seho : Person2 = {
    name : '세호',
    age : 30
}

//마우스 Person에 올릴경우 나타나는 모습이 interface와 타입별칭이 다름

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done:boolean};
function getTodo(todo: Todo){
    return {
        id : 'good',
        title : 'ysw',
        done : true
    }
}
