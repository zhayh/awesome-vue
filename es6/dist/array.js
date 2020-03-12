// JSON数组格式转换
// let json = {
//   '0': 'niit',
//   '1': 'computer',
//   '2': 'mobile',
//   length: 3
// }
// let arr1 = Array.from(json);
// console.log(arr1);

// 变量转换
// let arr2 = Array.of(1, 2, 3, 4)
// console.log('arr2 :', arr2, arr1);

// 查找
// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr3.find(function (value, index, arr) {
//   return value > 5;
// }))

// 填充
// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr4.fill(1, 2, 5);
// console.log(arr4);

// 数组遍历
// let arr5 = ['niit', 'computer', 'mobile'];
// // 输出索引
// for(let index of arr5.keys()) {
//   console.log(index);
// }
// // 输出值
// for(let index of arr5.values()) {
//   console.log(index);
// }
// // 输出索引和内容
// for (let [index, val] of arr5.entries()) {
//   console.log(index + " : " + val);

// }
// // entries()方法
// let list = arr5.entries()
// console.log(list.next().value);

// map
// let scores = [23,45,76,85,12,91];
// let scores1 = scores.map(function(score) {
//   if(score >= 60) {
//     return '及格';
//   } else {
//     return '不及格';
//   }
// })
// console.log(scores);
// console.log(scores1);

// reduce
// let scores = [23, 45, 76, 85, 12, 91];
// let average = scores.reduce(function(tmp, score, index){
//   console.log(tmp, score, index);
//   if(index == scores.length - 1) {
//     return (tmp + score) / scores.length;
//   } else {
//     return tmp + score;
//   }
// })
// console.log(average.toFixed(2));

// filter
// let scores = [23, 45, 76, 85, 12, 91];
// let newScores = scores.filter(function (item) {
//   console.log(item);
//   if (item % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// })
// console.log(newScores);

// let scores = [23, 45, 76, 85, 12, 91];
// console.log(scores.filter((item) => item % 2 == 0));
"use strict";