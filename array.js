'use strict';

//Array
// 1. 배열 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position (Index 접근)
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
// 제일 마지막 값을 받아올 때.(이유 : 배열은 인덱스가 0부터 시작 하기 때문에, 총 길이에서 -1하면 제일 마지막 값을 받아온다.)
console.log(fruits[fruits.length - 1]);

// 3.Looping over an array
// fruits 안의 모든 과일 부르기
    // 1) for문 사용
    for(let i = 0; i < fruits.length; i++){
        console.log(fruits[i]);
    }

    // 2) for of 사용(let fruit 이라는 변수 안에 fruits 안의 값을 한번씩 할당 한다.)
    for(let fruit of fruits) {
        console.log(fruit);
    }

    // 3) forEach (함수를 전달 할 수 있고, 그 함수 인에는 3개의 인자를 불러올수 있다.(value: T, index: number, array: T[]))
    // >> ***** forEach는 내가 전달한 value들 마다 내가 전달한 함수를 출력 *****
    // 기본예시
    fruits.forEach(function (){
        console.log('he'); // >> he he
    }) 

    fruits.forEach(function (fruit, index, array){
        console.log(fruit);                 // >> 🍎 🍌

        console.log(fruit, index);          // >> 🍎 0 
                                            // >> 🍌 1

        console.log(fruit, index, array);   // >> 🍎 0 (2) ['🍎', '🍌']
                                            // >> 🍌 1 (2) ['🍎', '🍌']
    }) 
    // ⬇️ arrow function 시키기 (anonymous)
    fruits.forEach((fruit, index, array) => {
        console.log(fruit, index, array);
    })
    // 코드가 한줄에 다 있는 경우 arrow function을 더 줄일 수 있다.
    fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. push, pop, shift, unshift
    // 1) add : 뒤에서 아이템 추가 하기.
    fruits.push('🍓');
    console.log(fruits); // >> ['🍎', '🍌', '🍓']

    // 2) pop : 뒤에서 부터 아이템 빼기
    fruits.pop();
    console.log(fruits); // >> ['🍎', '🍌']

    // 3) unshift : 앞에서 아이템 추가 하기.
    fruits.unshift('🍇');
    console.log(fruits); // >> ['🍇', '🍎', '🍌']

    // 4) shift : 앞에서 부터 아이템 빼기
    fruits.shift();
    console.log(fruits); // >> ['🍎', '🍌']

// 5. splice : 원래 위치에서 원하는 아이템 빼기
// splice(시작지점,범위) 
fruits.push('🫐','🍉','🍑')
console.log(fruits); // >> ['🍎', '🍌', '🫐', '🍉', '🍑']

fruits.splice(1,1);
console.log(fruits); // >> ['🍎', '🫐', '🍉', '🍑']

fruits.splice(1,1,'🍒','🍐') // 범위 뒤에 입련된 값은 빼진 자리에 값을 추가 해준다.
console.log(fruits); // >> ['🍎', '🍒', '🍐', '🍉', '🍑']

fruits.splice(1); // >> 범위를 지정 하지 않으면 시작지점 뒤부터 다 삭제 됨
console.log(fruits); // >> ['🍎']

// 6.concat : 두 배열을 하나로 합쳐 줌.
const fruits2 = ['🥝','🥥']
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // >> ['🍎', '🥝', '🥥']

// 7. indexOf (검색기능)
console.clear(); // 앞에 까지의 콘솔 기록 지우기
console.log(newFruits); // >> ['🍎', '🥝', '🥥']
console.log(newFruits.indexOf('🍎')); // >> 0
console.log(newFruits.indexOf('🥦')); // >> -1 (배열 안에 없다는 뜻)

// 8. includes (포함여부,boolean값)
console.log(newFruits.includes('🍓')); // >> false

// 9. lastIndexOf
console.log(newFruits);
newFruits.push('🍎');
console.log(newFruits); // >> ['🍎', '🥝', '🥥', '🍎']
console.log(newFruits.indexOf('🍎')); // >> 0 (indexOf는 앞에서 부터 카운팅 하고 해당 문자열의 배열값을 받는다.)
console.log(newFruits.lastIndexOf('🍎')); // >> 3 (lastIndexOf는 뒤에서 부터 카운팅 하고 해당 문자열의 배열값을 받는다.)
