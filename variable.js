//  1. Use strict
'use strict';

//  ๐ 2. Variable,rw(read / write)

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

//  ๐ 3.  onstant r(read only)
//  Immutable data type 
const daysInWeek = 7;
const maxNumber = 5;

//  โ Note !!
//  Immutable date types : premitive types, frozen objects (i.e. object.freeze())
//  Mutable date types : all objects by default are mutable in JS
//  favor immutable day type always for a few reason:
//  -   security
//  -   thread safety
//  -   reduce human mistakes


//  4.  Variable types
//  primitive, single item : number, string, boolean, null, undefine, symbol
//  >>value ํ ๋น๊ฐ ์์ฒด๊ฐ ๋ฉ๋ชจ๋ฆฌ์ ๋ฐ๋ก ์ ์ฅ๋จ
//  object, box container
//  >>object๋ฅผ ๊ฐ๋ฆฌํค๊ณ  ์๋ ref์ ์ ์ฅ ๋จ (์์  ๋ถ๊ฐ)
//  ref๋ง ์ ๊ธฐ๊ณ  ๊ทธ ์์ ๊ฐ๋ค์ ๋ณ๊ฒฝ์ด ๊ฐ๋ฅํจ.
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
//  ๐ฅ false : 0, null, undefined, NaN, ''
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

//  symbol : ๋์์ ๋ค๋ฐ์ ์ผ๋ก ์ผ์ด๋ ์ ์๋ ์ฝ๋์์ ์ฐ์ ์์๋ฅผ ์ฃผ๊ณ ์ถ์ ๋ ์ ๋ง ๊ณ ์ ํ ์๋ณ์๊ฐ ํ์ํ  ๋ ์ฌ์ฉ
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

//  object
const ellie = {name : 'ellie', age : 20};
ellie.age = 21;

//  5. Dynamic typing : ์ค๋ฌด์์ ์๋ฌ ๋ง์ด ๋ฐ์
let text = 'hello';
console.log(`value: ${text}, type : ${typeof text}`);
text = 1;
console.log(`value: ${text}, type : ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type : ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type : ${typeof text}`);
