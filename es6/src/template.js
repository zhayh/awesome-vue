/* jslint esversion:6 */

// 字符串模板
let a = "hello";
let b = "world";
let c = `${a + b}`;
let d = `${a} ${b}`;
console.log(c);
console.log(d);

// 对运算的支持
let x = 1;
let y = 2;
let result = `${x + y}`;
console.log(result);
