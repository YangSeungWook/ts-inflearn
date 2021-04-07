function fetchItems(){
    let items = ['a','b','c'];
    return items;
}

//fetchItems에 마우스 올리면 타입추론으로 string[]을 보여줌
let result = fetchItems();

