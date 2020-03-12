/* jshint esversion: 6 */

// JSON数组格式转换
let json = {
  '0': 'niit',
  '1': 'computer',
  '2': 'mobile',
  length: 3
}
let arr1 = Array.from(json);
console.log(arr1);

function test (a, b) {
  let arr = Array.from(arguments, value => value + 2);
  console.log(arr);
}
test(1, 2);

// js数组定义的歧义性
// const a = new Array(2);
// const b = new Array("2");
// console.log(a, b);

// 变量转换
let arr2 = Array.of(1, 2, 3, 4);
console.log('arr2 :', arr2);

// const c = Array.of(2)
// const d = Array.of("2")
// console.log(c, d);

// 查找
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr3.find(function (value, index, arr) {
  return value > 5;
}));

// 填充
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr4.fill(1, 2, 5);
console.log(arr4);

// 数组遍历
let arr5 = ['niit', 'computer', 'mobile'];
// 输出索引
for(let index of arr5.keys()) {
  console.log(index);
}
// 输出值
for(let index of arr5.values()) {
  console.log(index);
}
// 输出索引和内容
for (let [index, val] of arr5.entries()) {
  console.log(index + " : " + val);
}
// entries()方法
let list = arr5.entries()
console.log(list.next().value);

// map
// let scores = [23,45,76,85,12,91];
// let scores1 = scores.map(score => {
//   if(score >= 60) {
//     return '及格';
//   } else {
//     return '不及格';
//   }
// });
// console.log(scores);
// console.log(scores1);

// reduce
// let scores = [23, 45, 76, 85, 12, 91];
// let average = scores.reduce((tmp, score, index) => {
//   console.log(tmp, score, index);
//   if(index == scores.length - 1) {
//     return (tmp + score) / scores.length;
//   } else {
//     return tmp + score;
//   }
// });
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

// forEach
// let scores = [23, 45, 76, 85, 12, 91];
// scores.forEach((score, index) => {
//   console.log(`第${index+1}门课的成绩为${score}`);
// });

// 练习
// 把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。
function normalize (arr) {
  return arr.map(item => {
    let first = item[0].toUpperCase();
    let other = item.substring(1).toLowerCase();
    return first + other;
  });
}
console.log(normalize(['niit', 'COMPUTER', 'mobilE']));

// 把[1, 3, 5, 7, 9]变换成整数13579
let ints = [1, 3, 5, 7, 9];
let result = ints.reduce((x, y) => x * 10 + y);
console.log(result);

// 不使用parseInt()和Number对象，利用map和reduce操作实现一个str2Int()函数，
// 把一个字符串"13579"转成13579
let str = "13579";
function str2Int (str) {
  let arrs = [];
  for (let c of str) {
    arrs.push(c);
  }
  return arrs.map(c => c - '0').reduce((x, y) => x * 10 + y);
}
console.log(str2Int('0'));
console.log(str2Int('12345'));
console.log(str2Int('12300'));

const nums = [1, 2, 3, 4, 5, 5];
console.log(nums.map(String).join(""));
