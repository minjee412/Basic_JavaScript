'use strict';

//  1. String concatenation
console.log ('my' + 'cat'); //문자열 + 문자열
console.log ('1' + 2); // 문자열 + 숫자
console.log(`sing literals : 1+2 = ${1+2}`);
//  줄바꿈 : \n
//  Tab : \t

//  2. Numeric operators
console.log (1 + 1); // add
console.log (1 - 1); // substract
console.log (1 / 1); // divide
console.log (1 * 1); // multiply
console.log (5 % 2); // reminder (나머지 값)
console.log (2 ** 3); // exponentiation( 2의 3승 )

// 3.   Increment and decrement operators.
let counter = 2;
const preIncrement = ++counter; // 1+counter 가 먼저 이루어 지고, 그 값이 preIncrement로 들어 간다.
//counter = counter + 1;
//preIncrement = counter;
console.log (`preIncrement : ${preIncrement}, counter: ${counter}`)
//  결과 >> preIncrement : 3, counter: 3

const postIncrement = counter++; // 기존의 counter 값(3)을 postIncrement 에 먼저 주고, 
                                 // 그 다음 counter+1 된 값(4)이 counter 로 들어 간다.
//  postIncrement = counter;
//  counter = counter + 1;
console.log(`postIncrement : ${postIncrement} , counter: ${counter}`);
//  결과 >> postIncrement : 3 , counter: 4

const preDecrement = --counter;
console.log (`preIncrement : ${preDecrement}, counter: ${counter}`)
//  결과 >> preIncrement : 3, counter: 3

const postDerement = counter--;
console.log(`postIncrement : ${postDerement} , counter: ${counter}`);
//  결과 >> postIncrement : 3 , counter: 2

//  4.  Assignment operators
let x = 3;
let y = 6;
x += y // x = x + y;
x -= y;
x *= y;
x /= y;

//  5.  Comparison operators
console.log (10 < 6);
console.log (10 <= 6);
console.log (10 > 6);
console.log (10 >= 6);

//  6.  Logical operator : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value : 
//  값 들 중 처음으로 true가 나오면 거기서 STOP 되고, 전체가 true 값으로 나옴.
console.log (`or: ${value1 || value2 || check()}`)
//연산을 많이 하는 heavy한 코드(check()와 같은)를 앞에다 두면 안됨. 
function check() {
    for (let i = 0; i < 10; i++) {
        //waisting time
        console.log ('🐹');
    }
    return true;
}

//  && (and), find the first falsy value
//  값이 모두 true 가 되야 true 로 나옴. 
console.log (`and: ${value1 && value2 && check()}`)
//연산을 많이 하는 heavy한 코드(check()와 같은)를 앞에다 두면 안됨. 
function check() {
    for (let i = 0; i < 10; i++) {
        //waisting time
        console.log ('🐹');
    }
    return true;
}

//  ! (not)
//  값을 반대로 바꿔 준다.
console.log(!value1);

//  == (Equality)
const stringFive = '5';
const numberFive = 5;

//  == loose equality, with type conversion.
//  아무리 ''가 있어도 안의 값이 숫자 이면 자동으로 number로 인식해서 비교 함.
console.log (stringFive == numberFive);
console.log (stringFive != numberFive);

//  === strict equality, no type conversion
// 모든 타입과 조건이 맞아야 ture로 나옴.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name : 'ellie'};
const ellie2 = { name : 'ellie'};
// ellie1 과 2는 ref 값이 서로 달라 비교가 불가능.
// 그래서 무엇을 비교 해도 false로 출력 됨.
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //   결과 : false
console.log(ellie1 === ellie2); //  결과 : false
console.log(ellie1 === ellie3); //  결과 ; true

//📝 PUZZLE
//equaility - puzzler
console.log(0 == false);    //  결과 : false    ❌(정답 true)
// 🔴풀이 :  0, '', null, undefined : 기본적으로 false 값. 
console.log(0 === false);   // 결과 : false     ⭕️
// 🔴풀이 : 0 은 true or false 로 나타낼수 있는 boolean 타입이 아니다. 
console.log('' == false);   // 결과 : false     ❌(정답 true)
// 🔴풀이 :  0, '', null, undefined : 기본적으로 false 값. 
console.log('' === false);  // 결과 : true      ❌(정답 false)
// 🔴풀이 : 0 은 true or false 로 나타낼수 있는 boolean 타입이 아니다. 
console.log(null == undefined); // 결과 : true  ⭕️
// 🔴풀이 :  null 과 undefined 는 같은 것으로 본다. 
console.log(null === undefined);    // 결과 : false ⭕️
// 🔴풀이 :  하지만, null 과 undefined 은 다른 타입이다.

//  8.  Conditional operators : if
// if, else if, else
const name = 'ellie';
if (name === 'ellie'){
    console.log ('Welcome, Ellie');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

//  9. Ternary operators : ? (if를 조금 더 간단하게 쓸쑤 있으나, 너무 많이 사용 하면 가독성이 떨어짐.)
//  condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');


//  10. Switch statement
const browser = 'IE';
switch (browser)//switch 안의 값이 browser이면 {}안을 실행
{
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome' :
        console.log('love you!');
        break;
    case 'Firefox' :
        console.log('love you!');
        break;

//  🟥  Chrome과 Firefox는 출력 값이 동일하기 때문에,
//    case 'Chrome' :
//    case 'Firefox' :
//       console.log('love you!');
//       break;
//  로도 사용 가능 하다.

        default : 
        console.log('same all!');
        break;
}

//  11. Loops
//  While loop, while thecondition is truthy,
//  body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

//  12. do while loop, body code is cxecuted first,
//  then check the condition. (do{}안에 있는걸 무조건 1번 실행하고 그 다음에 while의 조건문과 비교)
do  {
    console.log (`do while : ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
// begin 값은 최초의 1회만 실행 되고, 다음부터는 condition과 step만 계속 반복
for (let i = 3; i>0; i--){
    console.log(`for : ${i}`);
}

// nested loops : cpu에 무리가 있다.
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log (`i: ${i}, j: ${j}`);
    }
}

//📝 PUZZLE
//  Q1 0 to 10 print only even numbers (use continue)
for(let i = 0; i < 11; i++){
    if( i % 2 !== 0 ){
      continue;      
    }
    console.log (`even number is ${i}`);
}
//  Q2 0 to 10 print numbers until reaching 8 (use break)
for(let i = 0; i < 11; i++){
    if(i > 8){
        break;
    }
    console.log(`number is ${i}`);
}