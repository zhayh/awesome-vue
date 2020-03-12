"use strict";

var _console;

// 箭头函数：lambda函数，就是语法糖
// var show = function () {
//   console.log("hello world");
// }
// show();
// var show2 = () => console.log("hello world");
// show2();

// var show3 = function (name) {
//   console.log(name);
// }
// show3('hxy')
// var show4 = (name) => console.log(name);
// show4('hxy')

// var add1 = function (a, b) {
//   return a + b;
// }
// console.log(add1(1, 2));

// var add2 = (a, b) => {
//   return a + b;
// }
// console.log(add2(1, 2));

// var add3 = (a, b) => a + b;
// console.log(add3(1, 2));

// 剩余参数
function show(a, b) {
  console.log(a);
  console.log(b);

  for (var _len = arguments.length, c = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    c[_key - 2] = arguments[_key];
  }

  console.log(c);
}
show(1, 2, 4, 6, 7, 9);

var arr = [1, 2, 3];
console.log(arr);
(_console = console).log.apply(_console, arr);
function add() {
  for (var _len2 = arguments.length, arr = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    arr[_key2] = arguments[_key2];
  }

  return arr.reduce(function (previous, current) {
    return previous + current;
  });
}
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4));

// 深拷贝
var arr1 = [1, 2, 3, 4];
var arr2 = arr1;
console.log(arr2);
arr2.push(6);
console.log(arr1);

var arr3 = [].concat(arr1);
console.log(arr3);
arr3.push(9);
console.log(arr1);
console.log(arr3);