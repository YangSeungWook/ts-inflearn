// 타입 단언(type assertion)
var a;
a = 20;

var b = a as string;

// DOM API 조작
var div = document.querySelector('div');
if(div){
    div.innerText;
}


//타입단언(타입 어써션)을 사용하면 if없이 사용 가능
var typeAss = document.querySelector('#app') as HTMLDivElement;
typeAss.innerText;