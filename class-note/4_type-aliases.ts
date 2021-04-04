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


//타입 별칭들
type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done:boolean};
function getTodo(todo: Todo){
    return 'good'
}

//함수 선언시 타입에 맞게 인자삽입
getTodo({id: 'ysw',title: 'nice',done:true})
