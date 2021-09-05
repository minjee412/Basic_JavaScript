// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const newFruits = fruits.toString();
    console.log(newFruits);
}

// >>풀이 (join() 사용)

{
    const fruits = ['apple', 'banana', 'orange'];
    const newFruits = fruits.join();
    console.log(newFruits);
}
  
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const newFruits = fruits.split(',')
    console.log(newFruits);
    console.log(newFruits[0]); // >>  🍎
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const newArray = array.reverse(); // reverse는 원본도 변경 시킴.
    console.log(newArray);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const newArray = array.slice(2,5); // 범위는 해당 인덱스 앞에서 짤림.
    console.log(newArray);
    console.log(array); // slice 는 원본 유지 됨.
  }
// 🟥 splice는 원본 유지 안됨.
  
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  // 풀이
  {
    //const result = students.find(function(student, index){
      //console.log(student,index); // >> Student {name: 'A', age: 29, enrolled: true, score: 45} 0
                                    // >> Student {name: 'B', age: 28, enrolled: false, score: 80} 1
                                    // >> Student {name: 'C', age: 30, enrolled: true, score: 90} 2
                                    // >> Student {name: 'D', age: 40, enrolled: false, score: 66} 3
                                    // >> Student {name: 'E', age: 18, enrolled: true, score: 88} 4
    //});
    
    const result = students. find((student) => student.score === 90) ;
        console.log(result); // Student {name: 'C', age: 30, enrolled: true, score: 90}
  }
  
  // Q6. make an array of enrolled students
  {
      const result = students.filter((student)=> student.enrolled);
      console.log(result); // 0: Student {name: 'A', age: 29, enrolled: true, score: 45}
                           // 1: Student {name: 'C', age: 30, enrolled: true, score: 90}
                           // 2: Student {name: 'E', age: 18, enrolled: true, score: 88}
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student) => student.score);
        console.log(result); // [45, 80, 90, 66, 88]
  }
  //혹시라도 점수에 *2 하고 싶으면 student.score를 student.score * 2로 변경 해준다.
  
  // Q8. check if there is a student with the score lower than 50
  {
      // some은 배열안에 하나라도 만족 되는게 있으면 true 로 리턴 한다.
      const result = students.some((student) => student.score < 50);
      console.log(result); // true

      // 반면 every는 배열안에 모든 조건이 충족 되어야 true 로 나온다.
      const result2 = students.every((student) => student.score >= 50);
      console.log(result2); // false
      console.log(!result2); // true (앞에 !를 붙이면 true는 false로, false는 true로 리턴 한다.)
  }
  
  // Q9. compute students' average score
  {
    // reduce는 배열 안에 모든 값을 누적할때 쓴다.
    const result = students.reduce((prev,curr) => prev + curr.score, 0);
      console.log(result); // 369
      console.log(result/ students.length);
}
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    // const result = students.map((student) => student.score);
    // console.log(result); // [45, 80, 90, 66, 88] (배열 안에서 점수들만 따로 뽑아옴.)
    
    const result = students.map((student) => student.score).join();
    console.log(result); // 45,80,90,66,88

    // const result = students.map((student) => student.score)
    // .filter((score) => score >= 50)
    // .join();
    // console.log(result); // 80,90,66,88
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
    console.log(result); // 45,66,80,88,90
  }
  