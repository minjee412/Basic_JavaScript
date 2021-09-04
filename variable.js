//  1. Use strict
'use strict';

//  🔅 2. Variable,rw(read / write)

/*let name = 'MinJee';
console.log(name);
name = 'hello';
console.log(name);*/
let globalName = 'global name'
{
    let name = 'MinJee';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

//  🔅 3.  onstant r(read only)
//  Immutable data type 
const daysInWeek = 7;
const maxNumber = 5;

//  ✅ Note !!
//  Immutable date types : premitive types, frozen objects (i.e. object.freeze())
//  Mutable date types : all objects by default are mutable in JS
//  favor immutable day type always for a few reason:
//  -   security
//  -   thread safety
//  -   reduce human mistakes


//  4.  Variable types
//  primitive, single item : number, string, boolean, null, undefine, symbol
//  >>value 할당값 자체가 메모리에 바로 저장됨
//  object, box container
//  >>object를 가리키고 있는 ref에 저장 됨 (수정 불가)
//  ref만 잠기고 그 안에 값들은 변경이 가능함.
//  function, first-class function
const count = 17; //interger
const size = 17.1; // decimal number
console.log (`value : ${count}, type : ${typeof count}`);
console.log (`value : ${size}, type : ${typeof size}`);

//  number - special numeric values : infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log (infinity);
console.log (negativeInfinity);
console.log (nAn);

//  string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value :  ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value : ${helloBob}, type : ${typeof helloBob}`);

//  boolean : true or false
//  🟥 false : 0, null, undefined, NaN, ''
//  ture : any toher value
const canRead = true;
const test = 3<1; // false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log (`value : ${test}, type : ${typeof test}`);

//  null
//let nothing : null;
console.log (`value : ${nothing}, type : ${typeof nothing}`);

//  undefined
let x = undefined;
console.log (`value : ${x}, type : ${typeof x}`);

//  symbol : 동시에 다발적으로 일어날수 있는 코드에서 우선순위를 주고싶을 때 정말 고유한 식별자가 팔요할 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

//  object
const ellie = {name : 'ellie', age : 20};
ellie.age = 21;

//  5. Dynamic typing : 실무에서 에러 많이 발생
let text = 'hello';
console.log(`value: ${text}, type : ${typeof text}`);
text = 1;
console.log(`value: ${text}, type : ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type : ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type : ${typeof text}`);
