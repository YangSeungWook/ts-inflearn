
//모듈 형태로 변경
import {Contact, PhoneType } from './ts-modules';

//아래는 모듈파일로 분리하기전
/*
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
*/



// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts() : Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts : Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts : Contact[] = [];


  constructor() {
    this.fetchData();
    
  }

  fetchData() : void {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name : string) : Contact[] { 
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address : string) : Contact[]  {
    return this.contacts.filter(contact => contact.address === address);
  }

  // 폰타입 : home, office, studio   , enum 을 이용하여 타입 지정
  findContactByPhone(phoneNumber : number, phoneType: PhoneType) : Contact[]  {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  //이넘으로 실행
  //findContactByPhone(PhoneType.Home)



  addContact(contact : Contact):void{
    this.contacts.push(contact);
  }

  //map은 새로운 배열을 반환하기 때문에 stringp[];
  displayListByName() : string[] {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress() : string[] {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();

// 타입단언 오류 확인, 마우스 오버 해보기
var div = document.querySelector('div');
//div.innerText;