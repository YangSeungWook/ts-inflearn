enum Shoes {
    Nike = '나이키',   
    Adidas = '아디다스'
}

//위처럼 값 지정을 안하고 호출하면 0,1,2 이런식으로 인덱스 번호가 출력됨
var myShoes = Shoes.Nike;
console.log(myShoes);  // 나이키

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}
function askQuestion(answer:Answer){
    if(answer === Answer.Yes){
        console.log('정답입니다.');
    }
    if(answer === Answer.No){
        console.log('오답입니다.');
    }
}

askQuestion(Answer.Yes);
askQuestion('Yes');
