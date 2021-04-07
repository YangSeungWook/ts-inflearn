function fetchItems(){
    let items = ['a','b','c'];
    return items;
}

//fetchItems에 마우스 올리면 타입추론으로 string[]을 보여줌
let result = fetchItems();


//비동기로 promise 사용할경우 데이터가 어떤게 들어올지 모르기때문에 마우스 올리면 unknown이 뜸
function fetchItemsPromise(){
    let items = ['a','b','c'];
    return new Promise(resolve => {
      resolve(items);
    });
  }
