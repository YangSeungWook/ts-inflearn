
//객체
interface PhoneNumberDictionary {
  [phone: string]: { //특정 키값을 지정하지 않고 string으로 묶어줌, 배열 아님 * ( 아무 string이나 키값이 가능함, 아래 키값 home, office, studio 때문)
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

//이넘으로 폰타입 지정
enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio'
}
