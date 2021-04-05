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
}


logMessage('hello');
logMessage(100);