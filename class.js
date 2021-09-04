'use strict';

//  class : 붕어빵을 만들기 위한 틀 (=청사진, template)
//      >> 한번만 선언 한다. , 데이터가 들어 있지 않다.
//  object : 붕어빵을 만들기 위한 재료 (= instance of a class)
//      >> class의 요소, 데이터가 들어 간다. (object의 내용에 따라 크림붕어빵, 피자붕어빵 등이 될 수 있다.)

//  1. Class declarations
class Person{
    //constructor
    constructor (name, age){
    // fields
    this.name = name;
    this.age = age;
    }

    // methods
    speaks(){
        console.log(`${this.name} : hello!`); // this는 생성 된 object를 가리킨다.
    }
}

const ellie = new Person('ellie', 20); // 새로운 object를 만들 때는 new 라는 키워드를 사용 한다.
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();
