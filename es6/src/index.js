/* jshint esversion: 6 */

var a = 1;
var a = 2;
console.log(a);
{
  let b = 3;
}
console.log(b);  // error: b没有定义

// var定义的变量是全局变量
// for (var i = 0; i <10; i++) {
//   console.log("i的值：" + i);
// }
// console.log("i的值：" + i);

// let定义
// for (let i = 0; i < 10; i++) {
//   console.log("i的值：" + i);
// }
// console.log("i的值：" + i);
