// 1 task  

// function camelize(str) {
//     return str
//       .split('-') 
//       .map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); 
//   }

// 2 task 

// function filterRange(arr, a, b) {

//     return arr.filter(item => (a <= item && item <= b));
//   }
  
//   let arr = [5, 3, 8, 1];
  
//   let filtered = filterRange(arr, 1, 4);
  
//   alert( filtered ); 
  
//   alert( arr ); 

// 3 task 

// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {
//       let val = arr[i];
  
//       if (val < a || val > b) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }
  
//   }
  
//   let arr = [5, 3, 8, 1];
  
//   filterRangeInPlace(arr, 1, 4); 

//   alert( arr ); 

// // 4 task 
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr );


// 5 task 

// function copySorted(arr) {
//     return arr.slice().sort();
//   }
  
//   let arr = ["HTML", "JavaScript", "CSS"];
  
//   let sorted = copySorted(arr);
  
//   alert( sorted );
//   alert( arr );