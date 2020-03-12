/* jslint esversion: 6 */
// 箭头函数：lambda函数，就是语法糖
var show = function () {
  console.log("hello world");
}
show();
var show2 = () => console.log("hello world");
show2();

var show3 = function (name) {
  console.log(name);
}
show3('hxy');
var show4 = (name) => console.log(name);
show4('hxy');

var add1 = function (a, b) {
  return a + b;
};
console.log(add1(1, 2));

var add2 = (a, b) => {
  return a + b;
}
console.log(add2(1, 2));

var add3 = (a, b) => a + b;
console.log(add3(1, 2));

// 剩余参数
function show (a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
show(1, 2, 4, 6, 7, 9);

let arr = [1, 2, 3]
console.log(arr);
console.log(...arr);
function add (...arr) {
  return arr.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4));

// 深拷贝
// let arr1 = [1, 2, 3, 4]
// let arr2 = arr1
// console.log(arr2);
// arr2.push(6)
// console.log(arr1);

// let arr3 = [...arr1]
// console.log(arr3);
// arr3.push(9)
// console.log(arr1);
// console.log(arr3);

// map
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);

let pow = arr.map(x => x * x);
console.log(pow);

// function pow(x) {
//   return x * x;
// }
// let result = arr.map(pow);
// console.log(result);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.map(String));  // ['1', '2', '3', '4', '5', '6', '7', '8', '9']

// reduce
let max = arr.reduce((a, b) => {
  return a > b ? a : b;
});
console.log(max);

let product = arr.reduce((x, y) => x * y);
console.log(arr.reduce((a, b) => a + b));



